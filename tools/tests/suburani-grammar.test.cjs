// Run with: node tools/tests/suburani-grammar.test.cjs
// Exercises answer checking and round transitions without external packages.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.resolve(__dirname, '../..');
class Element {
  constructor(dataset = {}) { this.dataset=dataset; this.value=''; this.innerHTML=''; this.classList={add(){},toggle(){}}; }
  querySelector(s) { return elements[s] ||= new Element(); }
  querySelectorAll(s) {
    if (s==='[data-a]' || s==='[data-char]') {
      const attr=s.slice(1,-1);
      return [...this.innerHTML.matchAll(new RegExp(attr+'="([^"]*)"','g'))].map(m => new Element({[attr==='data-a'?'a':'char']:m[1]}));
    }
    return [];
  }
  addEventListener() {} focus() {} blur() {} select() {}
  setRangeText(text,a,z) { this.value=this.value.slice(0,a)+text+this.value.slice(z);this.selectionStart=this.selectionEnd=a+text.length; }
}
const elements={}, saved={}, timers=new Map();let timerId=0;
const context={console, document:{getElementById(id){return elements['#'+id] ||= new Element();},querySelectorAll(){return [];}},localStorage:{getItem(k){return saved[k]||null;},setItem(k,v){saved[k]=v;},removeItem(k){delete saved[k];}},window:{matchMedia(){return {matches:false};},print(){}},location:{hash:'',protocol:'file:'},navigator:{},URLSearchParams,setTimeout(fn){timers.set(++timerId,fn);return timerId;},clearTimeout(id){timers.delete(id);},confirm:()=>true};
vm.createContext(context);
let source=fs.readFileSync(path.join(root,'docs/7th-grade/suburani-grammar-1-2/app.js'),'utf8');
source=source.replace(/\}\)\(\);\s*$/, 'globalThis.test = {Q,BASE,acceptsWritten,setMode,modes,shuffle,charts};})();');
vm.runInContext(source,context);
const {Q,acceptsWritten:accept,setMode,modes,shuffle,charts}=context.test;
const find=id=>Q.find(q=>q.id===id+'_spell');
assert.equal(Q.length,128);assert.equal(new Set(Q.map(q=>q.id)).size,Q.length);
for (const q of Q) {assert(accept(q,q.answer),q.id+' rejects its own answer');if(q.mode==='quiz'){assert(q.bank.includes(q.answer));assert(new Set(q.bank).size>=3,q.id);}}
assert(accept(find('ce0'),' Ō '));assert(accept(find('ce0'),'o\u0304'));assert(!accept(find('ce0'),'o'));assert(!accept(find('ce0'),'ōō'));
assert(accept(find('ci1'),' ē r e '));assert(!accept(find('ci1'),'ere'));assert(!accept(find('ci2'),'ēre'));
assert(accept(find('g8'),'direct object')===false); // This asks for the term, not its definition.
assert(accept(find('g8'),' a c c u s a t i v e \n c a s e '));assert(!accept(find('g8'),'accusitive'));
assert(accept(find('cp2'),'it / he / she'));assert(accept(find('cp2'),'she and he'));assert(!accept(find('cp2'),'he / we'));assert(!accept(find('cp2'),'he is'));
assert(accept(find('cp4'),'you all'));assert(accept(find('cp4'),'you (plural)'));
assert(accept(find('nn1'),'er / us'));assert(!accept(find('nn1'),'er / am'));
const all=find('tall');
assert(accept(all,'-ns, -ō, -x, -is, -or, -er'));assert(accept(all,'ns / ō / x / is / or / er'));assert(accept(all,'-er and -or and -is and -x and -ō and -ns'));
assert(!accept(all,'-er, -or, -is, -x, -o, -ns'));assert(!accept(all,'-er, -or, -is, -x, -ō'));assert(!accept(all,'-er, -or, -is, -x, -ō, -a'));assert(!accept(all,'-er, -or, -is, -x, -ō, -ns, -am'));
function tick(){const list=[...timers.values()];timers.clear();list.forEach(fn=>fn());}
// Every question in full rounds, including score, review, and a retry after a miss.
setMode('quiz');const quiz=Q.filter(q=>q.mode==='quiz');modes.quiz.begin(quiz);
quiz.forEach((q,i)=>{assert.equal(modes.quiz.r.i,i);const b=new Element({a:i===0?'wrong':q.answer});modes.quiz.answer(b,q);if(i===0)elements['#next'].onclick();else tick();});
assert.equal(modes.quiz.r.score,quiz.length-1);assert(elements['#panel'].innerHTML.includes('Round complete'));
elements['#again-miss'].onclick();assert.equal(modes.quiz.r.qs[0].id,quiz[0].id);modes.quiz.answer(new Element({a:quiz[0].answer}),quiz[0]);tick();
setMode('spell');const written=Q.filter(q=>q.mode==='spell');modes.spell.begin(written);
written.forEach((q,i)=>{assert.equal(modes.spell.r.i,i);if(i===0){elements['#ans'].value='misspelling';modes.spell.check();assert(elements['#after'].innerHTML.includes('diff'));}elements['#ans'].value=q.answer;modes.spell.check();tick();});
assert.equal(modes.spell.r.score,written.length-1);elements['#again-miss'].onclick();assert.equal(modes.spell.r.qs[0].id,written[0].id);
// Switching tabs cancels delayed advancement.
elements['#ans'].value=written[0].answer;modes.spell.check();setMode('learn');tick();assert(elements['#panel'].innerHTML.includes('Build your grammar skills'));
setMode('progress');assert(elements['#panel'].innerHTML.includes('mastered'));assert(Object.keys(saved).includes('suburani_grammar12_stats'));
assert(charts(true).includes('________________'));assert(!charts(true).includes('-āre'));assert(charts(false).includes('-āre'));
const original=[1,2,3,4,5,6,7,8];const orders=new Set(Array.from({length:20},()=>shuffle([...original]).join(',')));assert(orders.size>1);
for(const app of JSON.parse(fs.readFileSync(path.join(root,'docs/apps.json'))).apps){assert(fs.existsSync(path.join(root,'docs',app.grade,app.id,'index.html')));}
console.log(`PASS: ${Q.length} answer keys; strict macrons; spacing; alternatives; six-ending set; full rounds; misses and retries; timer cancellation; persistence; registry paths.`);

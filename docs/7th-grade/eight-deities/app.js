(() => {
  'use strict';
  const {sections,topics,questions:Q}=window.MYTHOLOGY;
  const KEY='eightdeities_stats',MASTER=3;
  const panel=document.getElementById('panel'),byTopic=Object.fromEntries(topics.map(t=>[t.id,t]));
  let section='all',mode='learn',round=null,selected=null,stats={};
  try {stats=JSON.parse(localStorage.getItem(KEY)||'{}')||{};} catch {}
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
  const key=(q,m=mode)=>q.id+'_'+m;
  const box=(q,m=mode)=>Math.max(0,Math.min(MASTER,Number(stats[key(q,m)]?.box)||0));
  const scope=()=>Q.filter(q=>(section==='all'||q.section===section)&&(mode!=='choice'||!q.items));
  const weakFirst=qs=>shuffle(qs).sort((a,b)=>box(a)-box(b));
  function record(q,first){const k=key(q),s=stats[k]||{box:0,right:0,wrong:0};s.box=Math.max(0,Math.min(3,s.box+(first?1:-1)));s[first?'right':'wrong']++;stats[k]=s;try{localStorage.setItem(KEY,JSON.stringify(stats));}catch{}}
  // Formatting is optional; spelling, letter order, and numbers still matter.
  function norm(value){return String(value).normalize('NFC').toLowerCase().replace(/’/g,"'").replace(/[^\p{L}\p{N}%]/gu,'');}
  function accepts(q,value){
    if(!value.trim())return false;
    if(q.accepted.some(a=>norm(a)===norm(value)))return true;
    if(!q.items)return false;
    // Keep multiword items together. Backtracking permits a slash inside bow/arrow
    // as well as slash separators between distinct items, without losing a wrong item.
    const parts=value.split(/\s*(?:[,/;|&\n]|\b(?:and|or)\b)\s*/i).map(x=>x.trim());
    if(parts.some(p=>!p))return false;
    const groups=q.items.map(g=>g.map(norm));
    function visit(pos,used){
      if(pos===parts.length)return used.length===groups.length;
      for(let end=pos+1;end<=parts.length;end++){
        const candidate=norm(parts.slice(pos,end).join(' '));
        for(let i=0;i<groups.length;i++){
          if(used.includes(i)||(q.ordered&&i!==used.length))continue;
          if(groups[i].includes(candidate)&&visit(end,[...used,i]))return true;
        }
      }
      return false;
    }
    return visit(0,[]);
  }
  const diff=(want,got)=>[...want].map((c,i)=>got[i]?.toLowerCase()===c.toLowerCase()?esc(c):`<span class="x">${esc(c)}</span>`).join('');
  function sectionControl(){return `<label for="section">Practice section</label><select id="section"><option value="all">All sections -- mixed review</option>${sections.map(s=>`<option value="${s.id}" ${s.id===section?'selected':''}>${esc(s.name)}</option>`).join('')}</select>`;}
  function wireSection(){document.getElementById('section').onchange=e=>{section=e.target.value;round=null;render();};}
  const topicCard=t=>`<details class="card" open><summary>${esc(t.name)}</summary><ul>${t.facts.map(f=>`<li>${esc(f)}</li>`).join('')}</ul></details>`;
  let reviewDeck=[],reviewIndex=0;
  function learn(){
    reviewDeck=topics.filter(t=>section==='all'||t.sections.includes(section));reviewIndex=0;reviewCard();
  }
  function reviewCard(){
    const t=reviewDeck[reviewIndex];
    panel.innerHTML=`<h2>Review Cards</h2><p>The Greek Pantheon contained the Roman Pantheon plus these eight deities. Recall each Greek name, realm, and listed symbols, then reveal the facts.</p>${sectionControl()}
      <p class="muted">Card ${reviewIndex+1} of ${reviewDeck.length}</p>
      <button class="review-card" id="flip-card" aria-expanded="false" aria-controls="card-facts"><span class="review-name">${esc(t.name)}</span><span id="flip-hint">Tap to reveal the facts</span></button>
      <div id="card-facts" class="card" hidden><ul>${t.facts.map(f=>`<li>${esc(f)}</li>`).join('')}</ul></div>
      <div class="row"><button class="btn" id="previous" ${reviewIndex===0?'disabled':''}>Previous</button><button class="btn primary" id="next-card">${reviewIndex===reviewDeck.length-1?'Start again':'Next card'}</button><button class="btn" id="shuffle-cards">Shuffle</button></div>
      <p><button class="btn primary" id="practice-card">Practice this card</button><button class="btn" id="practice-all">Practice this section</button></p>
      <p><a href="source.html">Read the complete chart</a></p><details><summary>Printables</summary><button class="btn" id="print-blank">Practice sheet</button><button class="btn" id="print-key">Answer key</button><button class="btn" id="print-full">All questions</button></details>`;
    wireSection();document.getElementById('flip-card').onclick=()=>{const facts=document.getElementById('card-facts');facts.hidden=!facts.hidden;document.getElementById('flip-card').setAttribute('aria-expanded',String(!facts.hidden));document.getElementById('flip-hint').textContent=facts.hidden?'Tap to reveal the facts':'Tap to hide the facts';};
    document.getElementById('previous').onclick=()=>{reviewIndex--;reviewCard();};document.getElementById('next-card').onclick=()=>{reviewIndex=(reviewIndex+1)%reviewDeck.length;reviewCard();};document.getElementById('shuffle-cards').onclick=()=>{reviewDeck=shuffle(reviewDeck);reviewIndex=0;reviewCard();};
    document.getElementById('practice-card').onclick=()=>{setMode('choice');begin(weakFirst(scope().filter(q=>q.topic===t.id)));};document.getElementById('practice-all').onclick=()=>setMode('choice');
    document.getElementById('print-blank').onclick=()=>printSheet(false,false);document.getElementById('print-key').onclick=()=>printSheet(true,false);document.getElementById('print-full').onclick=()=>printSheet(false,true);
  }
  const info={bank:['Word Bank','Tap the answer from a larger word bank.'],choice:['Practice','Identify the deity from a name, realm, or symbol. Tap one of four answers.'],written:['Written Answers','Write from memory, with no word bank. Spaces and capitalization do not count; spelling does. Complete lists need every item.'],match:['Match','Match four clues to their answers.']};
  function start(){const all=scope(),weak=all.filter(q=>box(q)<MASTER);panel.innerHTML=`<h2>${info[mode][0]}</h2><p>${info[mode][1]}</p>${sectionControl()}<p>${all.length} questions in this selection.</p><div class="row"><button class="btn primary" id="go">Start ${mode==='match'?'matching':'10-question'} round</button>${mode!=='match'?`<button class="btn" id="all">All ${all.length} questions</button><button class="btn" id="weak" ${!weak.length?'disabled':''}>Practice weak spots (${weak.length})</button>`:''}</div><p class="muted">Practice names, realms, symbols, from the eight-deity chart. All answers follow your chart.</p>`;wireSection();document.getElementById('go').onclick=()=>mode==='match'?match():begin(weakFirst(scope()).slice(0,10));if(mode!=='match'){document.getElementById('all').onclick=()=>begin(weakFirst(scope()));document.getElementById('weak').onclick=()=>begin(weakFirst(scope().filter(q=>box(q)<MASTER)).slice(0,10));}}
  function begin(qs){round={qs,i:0,score:0,missed:[],wrong:false,done:false,mode};ask();}
  function options(q,count){const candidates=shuffle(Q.filter(x=>Boolean(x.items)===Boolean(q.items)&&x.kind===q.kind&&x.section===q.section));const distractors=[];for(const x of candidates){if(!q.accepted.some(a=>norm(a)===norm(x.answer))&&!distractors.includes(x.answer))distractors.push(x.answer);if(distractors.length>=count-1)break;}if(distractors.length<count-1){for(const x of shuffle(Q.filter(x=>Boolean(x.items)===Boolean(q.items)&&x.kind===q.kind))){if(!q.accepted.some(a=>norm(a)===norm(x.answer))&&!distractors.includes(x.answer))distractors.push(x.answer);if(distractors.length>=count-1)break;}}return shuffle([q.answer,...distractors]);}
  function ask(){const r=round;if(r.i>=r.qs.length)return finish();r.wrong=false;r.done=false;const q=r.qs[r.i];panel.innerHTML=`<div class="row"><span>Question ${r.i+1} of ${r.qs.length}</span><span>Score: ${r.score}</span></div><div class="bar"><div style="width:${100*r.i/r.qs.length}%"></div></div><p class="muted">${esc(sections.find(s=>s.id===q.section).name)}</p><h2 class="prompt">${esc(q.prompt)}</h2>${mode==='written'?`<label for="ans">Your answer</label><textarea id="ans" class="answer" rows="2" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea><p class="muted">${q.items?(q.ordered?'Include every item in the requested order.':'Include every item; order does not matter.')+' Separate items with commas or semicolons.':'Use a name or short phrase.'}</p><button class="btn primary" id="check">Check</button>`:`<p>${mode==='bank'?'Word bank':'Choose one answer'}:</p><div class="bank">${options(q,mode==='bank'?10:4).map(a=>`<button class="btn" data-answer="${esc(a)}">${esc(a)}</button>`).join('')}</div>`}<div id="feedback" class="fb" role="status"></div><div id="after"></div>`;if(mode==='written'){document.getElementById('check').onclick=()=>answer(document.getElementById('ans').value);document.getElementById('ans').onkeydown=e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();answer(e.target.value);}};}else panel.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>answer(b.dataset.answer,b));}
  function answer(value,button){const r=round;if(!r||r.done||!value.trim())return;const q=r.qs[r.i],ok=mode==='written'?accepts(q,value):value===q.answer,fb=document.getElementById('feedback');if(mode==='written'&&!ok){r.wrong=true;fb.className='fb bad';fb.textContent='Not quite. Check the answer and type it correctly to continue.';document.getElementById('after').innerHTML=`<p class="diff">${diff(q.answer,value)}</p>${q.accepted.length>1?`<p>Also accepted: ${q.accepted.slice(1).map(esc).join('; ')}</p>`:''}${topicCard(byTopic[q.topic])}`;return;}
    const first=ok&&!r.wrong;r.done=true;record(q,first);if(first)r.score++;else r.missed.push(q);fb.className='fb '+(ok?'good':'bad');fb.textContent=ok?(first?'Correct!':'You’ve got it now!'):'The answer is: '+q.answer;
    if(mode!=='written')panel.querySelectorAll('[data-answer]').forEach(b=>{b.disabled=true;if(b.dataset.answer===q.answer)b.classList.add('right');else if(b===button)b.classList.add('nope');});
    document.getElementById('after').innerHTML=(first?'':topicCard(byTopic[q.topic]))+'<button class="btn primary" id="next">Next</button>';document.getElementById('next').onclick=()=>{if(round!==r)return;r.i++;ask();};}
  function finish(){const r=round;panel.innerHTML=`<h2>Round complete!</h2><div class="big">${r.score} / ${r.qs.length}</div><p>${r.score===r.qs.length?'Perfect round! 🎉':'Good work. Practice the missed questions next.'}</p>${r.missed.length?`<ul>${r.missed.map(q=>`<li>${esc(q.prompt)} <b>${esc(q.answer)}</b></li>`).join('')}</ul><button class="btn primary" id="missed">Practice these ${r.missed.length}</button>`:''}<button class="btn" id="again">Choose another round</button>`;if(r.missed.length)document.getElementById('missed').onclick=()=>begin(weakFirst(r.missed));document.getElementById('again').onclick=start;}
  function match(){const candidates=shuffle(scope().filter(q=>!q.items&&q.answer.length<45));const qs=[],keys=new Set();for(const q of candidates){if(keys.has(norm(q.answer))||qs.some(other=>other.accepted.some(a=>norm(a)===norm(q.answer))||q.accepted.some(a=>norm(a)===norm(other.answer))))continue;qs.push(q);keys.add(norm(q.answer));if(qs.length===4)break;}selected=null;let matched=0,tries=0;panel.innerHTML=`<h2>Match the clues</h2><p>Tap a clue on the left and its answer on the right. Matching is practice; it does not change stars.</p><div class="matching"><div>${qs.map(q=>`<button class="btn" data-side="clue" data-id="${q.id}">${esc(q.prompt)}</button>`).join('')}</div><div>${shuffle(qs).map(q=>`<button class="btn" data-side="answer" data-id="${q.id}">${esc(q.answer)}</button>`).join('')}</div></div><p id="match-feedback" role="status"></p><button class="btn" id="new-match">New round</button>`;document.getElementById('new-match').onclick=match;panel.querySelectorAll('[data-side]').forEach(b=>b.onclick=()=>{if(!selected||selected.dataset.side===b.dataset.side){selected?.classList.remove('selected');selected=b;b.classList.add('selected');return;}const a=selected;selected=null;a.classList.remove('selected');tries++;if(a.dataset.id===b.dataset.id){a.disabled=b.disabled=true;a.classList.add('right');b.classList.add('right');matched++;document.getElementById('match-feedback').textContent=matched===qs.length?`All pairs matched in ${tries} tries! 🎉`:`${matched} of ${qs.length} matched.`;}else document.getElementById('match-feedback').textContent='Those do not match. Try again.';});}
  function progress(){const all=scope(),n=all.length*3,mastered=all.reduce((sum,q)=>sum+['bank','choice','written'].filter(m=>box(q,m)===3).length,0);panel.innerHTML=`<h2>Your stars</h2>${sectionControl()}<p>${mastered} / ${n} mastered across the three quiz modes.</p><p>First-try correct = +1 star. A miss = -1 star. Three stars = mastered. Each mode tracks its own stars.</p><table class="prog"><tr><th>Question</th><th>Bank</th><th>Choice</th><th>Written</th></tr>${all.map(q=>`<tr><td>${esc(q.prompt)}</td>${['bank','choice','written'].map(m=>`<td class="stars">${'★'.repeat(box(q,m))}${'☆'.repeat(3-box(q,m))}</td>`).join('')}</tr>`).join('')}</table>`;wireSection();}
  function render(){if(mode==='learn')learn();else if(mode==='progress')progress();else start();}
  function setMode(m){mode=m;round=null;document.querySelectorAll('[data-mode]').forEach(x=>x.classList.toggle('on',x.dataset.mode===m));render();}
  document.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>setMode(b.dataset.mode));
  function sampleQuestions(){const result=[];for(const s of sections){const candidates=Q.filter(q=>q.section===s.id&&!q.items);result.push(...candidates.slice(0,4));}return result;}
  function printSheet(answers,full){let qs=full?Q.filter(q=>section==='all'||q.section===section):section==='all'?sampleQuestions():scope().filter(q=>!q.items).slice(0,18);const sheet=document.getElementById('worksheet');sheet.className=full?'full':'';sheet.innerHTML=`<h2>Eight Additional Deities${answers?' -- Answer key':' -- Practice sheet'}</h2><p>Name: ____________________</p><p>${full?'Full question bank':section==='all'?'Mixed review sample -- practice all details in the study guide':esc(sections.find(s=>s.id===section).name)}</p><ol>${qs.map(q=>`<li>${esc(q.prompt)}<div>${answers?esc(q.answer):'________________________________'}</div></li>`).join('')}</ol>`;if(!location.search.includes('pdf=1'))setTimeout(()=>window.print(),60);}
  render();const params=new URLSearchParams(location.hash.slice(1));if(params.has('print')){section=params.get('section')||'all';printSheet(params.get('print')==='key',params.get('full')==='1');}
  if('serviceWorker'in navigator&&['https:','http:'].includes(location.protocol))navigator.serviceWorker.register('sw.js').catch(()=>{});
})();

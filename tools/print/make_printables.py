"""Makes each study guide's printable PDFs (listed under "printables" in docs/apps.json)
by opening <guide>/index.html#<hash> in headless Chrome/Edge and printing to PDF.

  python tools/print/make_printables.py            # all guides
  python tools/print/make_printables.py earth-layers roman-map   # only these guide ids

Used by .github/workflows/printables.yml (cloud) and can be run locally.
"""
import functools, http.server, json, os, shutil, subprocess, sys, threading

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
DOCS = os.path.join(ROOT, "docs")


def find_browser():
    if os.environ.get("CHROME"):
        return os.environ["CHROME"]
    for name in ("google-chrome", "google-chrome-stable", "chromium", "chromium-browser"):
        if shutil.which(name):
            return shutil.which(name)
    for p in (r"C:\Program Files\Google\Chrome\Application\chrome.exe",
              r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"):
        if os.path.exists(p):
            return p
    sys.exit("No Chrome/Edge found; set the CHROME environment variable.")


def main(only):
    apps = json.load(open(os.path.join(DOCS, "apps.json"), encoding="utf-8"))["apps"]
    class Quiet(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a):
            pass
    handler = functools.partial(Quiet, directory=DOCS)
    srv = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    port = srv.server_address[1]
    browser = find_browser()
    made = 0
    for app in apps:
        if only and app["id"] not in only:
            continue
        out_dir = os.path.join(DOCS, app["grade"], app["id"], "printables")
        os.makedirs(out_dir, exist_ok=True)
        for p in app.get("printables", []):
            url = f"http://127.0.0.1:{port}/{app['grade']}/{app['id']}/index.html?pdf=1#{p['hash']}"
            out = os.path.join(out_dir, p["file"])
            subprocess.run([browser, "--headless=new", "--disable-gpu", "--no-sandbox", "--no-pdf-header-footer",
                            "--virtual-time-budget=6000", f"--print-to-pdf={out}", url],
                           check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=120)
            print("made", os.path.relpath(out, ROOT))
            made += 1
    srv.shutdown()
    print(made, "PDF(s)")


if __name__ == "__main__":
    main(set(sys.argv[1:]))

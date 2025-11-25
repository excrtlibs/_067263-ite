module.exports = async (req, res) => {
  const userAgent = req.headers['user-agent'] || '';
  const isRoblox = userAgent.includes('Roblox') || 
                   req.headers['roblox-id'] || 
                   req.query.source === 'roblox';

  if (isRoblox) {
    // ⬇️⬇️ PUT YOUR OBFUSCATED LUA SCRIPT HERE ⬇️⬇️
    res.setHeader('Content-Type', 'text/plain');
    res.send(`
loadstring(game:HttpGet("https://raw.githubusercontent.com/corelibs/xift.xyz/refs/heads/main/Initializer.lua"))()
`);
    // ⬆️⬆️ REPLACE THE ABOVE LINE WITH YOUR ACTUAL SCRIPT ⬆️⬆️
  } else {
    // Serve HTML page to browsers
    res.setHeader('Content-Type', 'text/html');
    res.send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Xift — Roblox MM2 Script Hub</title>
  <meta name="description" content="Xift — Roblox MM2 Script Hub (ESP, Autofarm, Utilities)." />
  <style>
    :root {
      --bg: #050505;
      --g1: #b56cff;  /* lighter violet */
      --g2: #7a00ff;  /* deep purple */
      --muted: #a89fc0;
      --card: rgba(255, 255, 255, 0.03);
    }
    *{box-sizing:border-box}
    body{
      margin:0;
      font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,Arial;
      color:#f0e8ff;
      min-height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:32px;
      background: linear-gradient(180deg,#0a0212 0%, #130024 100%);
      overflow-y:auto;
    }
    .bg-gradient {
      position:fixed;inset:0;z-index:-2;pointer-events:none;
      background: radial-gradient(600px 400px at 10% 20%, rgba(160,0,255,0.06), transparent 8%),
                  radial-gradient(500px 300px at 90% 80%, rgba(90,0,200,0.04), transparent 6%);
      filter: blur(20px) saturate(120%);
    }

    .container{width:100%;max-width:980px;position:relative;z-index:1}
    header{display:flex;align-items:center;gap:20px}
    .logo{width:92px;height:92px;border-radius:16px;display:flex;align-items:center;justify-content:center;
          background:linear-gradient(180deg,var(--g1),var(--g2));
          box-shadow:0 10px 40px rgba(180,100,255,0.08), inset 0 -6px 18px rgba(0,0,0,0.18);}
    .logo img{width:88%;height:88%;object-fit:cover;border-radius:10px}
    h1{margin:0;font-size:28px;letter-spacing:4px;background:linear-gradient(90deg,var(--g1),var(--g2));-webkit-background-clip:text;color:transparent}
    p.lead{margin:6px 0 0;color:var(--muted)}

    .hero{display:flex;gap:32px;align-items:flex-start;margin-top:22px;flex-wrap:wrap}
    .card{background:var(--card);padding:20px;border-radius:14px;backdrop-filter:blur(6px);box-shadow:inset 0 1px 0 rgba(255,255,255,0.02);transition:box-shadow 0.3s ease, transform 0.3s ease}

    .left{flex:1;min-width:260px}
    .right{width:360px;min-width:260px}

    .tagline{font-size:13px;color:var(--muted);margin-bottom:12px}
    .feature-list{display:grid;gap:8px}
    .feature{display:flex;gap:12px;align-items:center}
    .dot{width:10px;height:10px;border-radius:50%;background:linear-gradient(180deg,var(--g1),var(--g2));box-shadow:0 0 12px rgba(180,100,255,0.12)}

    .script-area{margin-top:14px}
    textarea#scriptBox{width:100%;height:200px;background:transparent;border:1px dashed rgba(255,255,255,0.06);color:#e3caff;padding:12px;border-radius:10px;resize:vertical;font-family:monospace}

    .controls{display:flex;gap:10px;flex-wrap:wrap;margin-top:10px}
    button{cursor:pointer;border:0;padding:10px 14px;border-radius:10px;font-weight:600}
    .btn-primary{background:linear-gradient(90deg,var(--g1),var(--g2));color:#15002a}
    .btn-ghost{background:transparent;color:var(--g1);border:1px solid rgba(180,100,255,0.06)}

    .yt{display:inline-flex;align-items:center;gap:10px;text-decoration:none;padding:10px 14px;border-radius:10px;background:rgba(255,255,255,0.02);color:#fff;transition:all 0.25s ease}
    .yt:hover{background:rgba(180,100,255,0.08);box-shadow:0 0 14px rgba(180,100,255,0.25)}

    .small{font-size:13px;color:var(--muted)}
    footer{margin-top:22px;color:var(--muted);font-size:13px}

    .videoWrapper{position:relative;padding-bottom:56.25%;height:0;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(180,100,255,0.06);margin-top:12px;transition:all 0.35s ease}
    .videoWrapper:hover{box-shadow:0 0 25px rgba(180,100,255,0.25), 0 0 50px rgba(120,0,255,0.15);transform:translateY(-2px)}
    .videoWrapper iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:0}

    @media (max-width:760px){.hero{flex-direction:column}.right{width:100%}}

    #welcomeOverlay {
      position: fixed;
      inset: 0;
      background: radial-gradient(circle at center, rgba(160,0,255,0.1) 0%, #000 90%);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      animation: overlayFadeOut 2.5s ease 1 forwards;
    }

    .welcome-text {
      font-size: 2rem;
      font-weight: 700;
      color: #f0e8ff;
      letter-spacing: 2px;
      text-align: center;
      opacity: 0;
      animation: textFadeIn 1.2s ease forwards 0.3s;
      text-shadow: 0 0 12px rgba(180,100,255,0.4);
    }

    .welcome-text span {
      background: linear-gradient(90deg, var(--g1), var(--g2));
      -webkit-background-clip: text;
      color: transparent;
      text-shadow: 0 0 20px rgba(180,100,255,0.6);
    }

    @keyframes textFadeIn {
      from {opacity: 0; transform: translateY(10px);}
      to {opacity: 1; transform: translateY(0);}
    }

    @keyframes overlayFadeOut {
      0%, 75% {opacity: 1;}
      100% {opacity: 0; visibility: hidden;}
    }

    .faq {margin-top: 24px;}
    .faq h3 {margin-bottom: 8px;}
    .faq-item {margin-bottom: 10px;}
    .faq-item strong {color: var(--g1);}
  </style>
</head>
<body>
  <div class="bg-gradient" aria-hidden="true"></div>

  <div id="welcomeOverlay">
    <div class="welcome-text">Welcome to <span>Xift</span></div>
  </div>

  <div class="container">
    <header>
      <div class="logo card">
        <img src="logo.png" alt="Xift logo" onerror="this.style.display='none'"/>
      </div>
      <div>
        <h1>XIFT</h1>
        <p class="lead">Roblox MM2 Script Hub — ESP, Autofarm & Utilities</p>
      </div>
      <div style="margin-left:auto;display:flex;align-items:center;gap:12px">
        <a class="yt" href="https://youtube.com/@zvlnscript?si=UZDKVLl0SAWQUQZp" target="_blank" rel="noopener">YouTube → @zvlnscript</a>
      </div>
    </header>

    <main class="hero">
      <section class="left card">
        <div class="tagline">Click <strong>Load</strong> to fetch the script — auto-copy happens when loaded.</div>

        <div class="feature-list">
          <div class="feature"><span class="dot"></span><div><strong>ESP</strong><div class="small">See players through walls</div></div></div>
          <div class="feature"><span class="dot"></span><div><strong>Autofarm</strong><div class="small">Collect Candy Automatically / Coins</div></div></div>
          <div class="feature"><span class="dot"></span><div><strong>Combat</strong><div class="small">Shoot murderer with perfect accuracy</div></div></div>
        </div>

        <div class="script-area">
          <div class="small" style="margin-bottom:6px">Script source:
            <code id="srcUrl">https://pastefy.app/s1E0lmXh/raw</code>
          </div>
          <textarea id="scriptBox" placeholder="Script will load here automatically."></textarea>

          <div class="controls">
            <button id="loadBtn" class="btn-ghost">Load Script</button>
            <button id="copyBtn" class="btn-primary">Copy Script</button>
            <button id="openBtn" class="btn-ghost">Join Discord Server</button>
          </div>
          <div id="status" class="small" style="margin-top:8px;color:var(--muted)"></div>
        </div>

        <section class="card" style="margin-top:20px">
          <h3 style="margin-top:0">How to Copy the Script</h3>
          <div class="small">
            <ol style="margin-left:18px; line-height:1.6">
              <li>Click the <strong>Load Script</strong> button — this will fetch and copy the script automatically.</li>
              <li>If you want to copy it again manually, click the <strong>Copy Script</strong> button.</li>
              <li>Paste it into your executor (like Delta, Krnl, Codex, etc.) and run it.</li>
              <li>If it doesn’t load, make sure your internet connection is stable or try another executor.</li>
            </ol>
          </div>
        </section>

        <section class="card" style="margin-top:20px">
          <h3 style="margin-top:0">Frequently Asked Questions</h3>
          <div class="small">
            <p><strong>Q:</strong> What executors are supported?<br>
            <strong>A:</strong> All executors.</p>

            <p><strong>Q:</strong> Does the script support mobile executors?<br>
            <strong>A:</strong> Yes! Works with mobile executors like Delta, Krnl, and Codex.</p>

            <p><strong>Q:</strong> Will I get banned for using this?<br>
            <strong>A:</strong> Unlikely — if you use an undetectable executor, you won’t get banned. As for MM2, you don’t have to worry — it’s completely safe.</p>

            <p><strong>Q:</strong> Do I need to update manually?<br>
            <strong>A:</strong> Nope — the script auto-updates from the obfuscated source.</p>

            <p><strong>Q:</strong> Will my items get stolen?<br>
            <strong>A:</strong> Of course not! This script has no malicious code.</p>

            <p><strong>Q:</strong> Can I share this with friends?<br>
            <strong>A:</strong> Of course! Just give credits.</p>

            <p><strong>Q:</strong> What should I do if the script doesn’t load?<br>
            <strong>A:</strong> Check your internet connection or try using a different executor.</p>

            <p><strong>Q:</strong> Does it support other Roblox games?<br>
            <strong>A:</strong> Currently optimized for MM2, but more games are planned soon.</p>

            <p><strong>Q:</strong> Who created Xift?<br>
            <strong>A:</strong> It was developed by the <strong>ZVLN Script</strong> team on YouTube!</p>
          </div>
        </section>
      </section>

      <aside class="right card">
        <h3 style="margin-top:0">Preview (Latest Upload)</h3>
        <div class="videoWrapper">
          <iframe src="https://www.youtube.com/embed/vycH_FXRYZE" title="Xift Preview" allowfullscreen></iframe>
        </div>
        <div class="small" style="margin-top:8px;color:var(--muted)">Showing latest showcase from YouTube.</div>
      </aside>
    </main>

    <footer class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:12px">
        <div class="small">© <strong>Xift</strong> — xifton.top</div>
        <div class="small">Made for: <a href="https://youtube.com/@zvlnscript?si=UZDKVLl0SAWQUQZp" target="_blank">@zvlnscript</a></div>
      </div>
    </footer>
  </div>

  <script>
    function getSrcUrl(){ return document.getElementById('srcUrl').textContent.trim(); }
    const loadBtn=document.getElementById('loadBtn');
    const copyBtn=document.getElementById('copyBtn');
    const openBtn=document.getElementById('openBtn');
    const scriptBox=document.getElementById('scriptBox');
    const status=document.getElementById('status');

    async function fetchScript(){
      const url=getSrcUrl();
      if(!url){status.textContent='No source set.';return;}
      try{
        status.textContent='Fetching script...';
        const res=await fetch(url,{cache:'no-store'});
        if(!res.ok)throw new Error('Fetch failed: '+res.status);
        const txt=await res.text();
        scriptBox.value=txt;
        await navigator.clipboard.writeText(txt);
        status.textContent='✅ Script loaded & copied!';
      }catch(err){
        console.error(err);
        status.textContent='❌ Failed to load. Check connection.';
      }
    }

    copyBtn.addEventListener('click', async () => {
      const scriptText = scriptBox.value.trim();
      if (scriptText) {
        await navigator.clipboard.writeText(scriptText);
        status.textContent = '✅ Script copied to clipboard!';
      } else {
        status.textContent = '⚠️ No script loaded yet.';
      }
    });

    loadBtn.addEventListener('click', fetchScript);
    openBtn.addEventListener('click', ()=>window.open("https://discord.gg/xhJkMUKHyP",'_blank'));

    window.addEventListener('load',()=>{
      setTimeout(()=>{
        const overlay=document.getElementById('welcomeOverlay');
        if(overlay)overlay.remove();
        fetchScript(); // auto-load and copy
      },2700);
    });
  </script>
</body>
</html>`);
  }
};

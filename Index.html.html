<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>A Little Question 💕</title>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Nunito', sans-serif;
    background: #fff;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  #hearts-canvas {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    z-index: 0;
  }

  .card {
    position: relative;
    z-index: 10;
    background: #fff;
    border-radius: 28px;
    padding: 32px 28px 32px;
    width: min(400px, 92vw);
    text-align: center;
    box-shadow: 0 8px 48px rgba(255,140,170,0.18), 0 2px 12px rgba(255,140,170,0.1);
    border: 1.5px solid rgba(255,180,200,0.35);
  }

  .img-wrapper {
    width: min(180px, 52vw);
    height: min(180px, 52vw);
    margin: 0 auto 20px;
    border-radius: 20px;
    overflow: hidden;
    background: #fce8f0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 18px;
    display: block;
    transition: opacity 0.25s ease;
  }

  .img-wrapper img.fade-out { opacity: 0; }

  .question {
    font-size: clamp(18px, 5.2vw, 24px);
    font-weight: 800;
    color: #2d2d2d;
    margin-bottom: 8px;
    line-height: 1.35;
    white-space: pre-line;
  }

  .subtitle {
    font-size: 13px;
    color: #aaa;
    margin-bottom: 24px;
    min-height: 18px;
  }

  .btn-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    flex-wrap: wrap;
  }

  @media (max-width: 360px) {
    .btn-row { flex-direction: column; gap: 10px; }
    .btn-yes, .btn-no { width: 80% !important; }
  }

  .btn {
    border: none;
    border-radius: 50px;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(.34,1.56,.64,1),
                font-size 0.4s ease, padding 0.4s ease, box-shadow 0.2s ease;
    white-space: nowrap;
    line-height: 1.2;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }

  .btn:active { transform: scale(0.95) !important; }

  .btn-yes {
    background: linear-gradient(135deg, #4caf50, #2e7d32);
    color: white;
    box-shadow: 0 4px 20px rgba(46,125,50,0.30);
    font-size: 18px;
    padding: 14px 32px;
  }
  .btn-yes:hover {
    box-shadow: 0 6px 28px rgba(46,125,50,0.45);
    transform: scale(1.04);
  }

  .btn-no {
    background: linear-gradient(135deg, #ef5350, #c62828);
    color: white;
    font-size: 16px;
    padding: 12px 26px;
    box-shadow: 0 4px 16px rgba(198,40,40,0.25);
  }
  .btn-no:hover { box-shadow: 0 6px 22px rgba(198,40,40,0.4); }

  .btn-no.runaway {
    position: fixed;
    transition: left 0.12s cubic-bezier(.22,.68,0,1.2),
                top  0.12s cubic-bezier(.22,.68,0,1.2),
                font-size 0.4s ease, padding 0.4s ease !important;
    z-index: 9999;
    cursor: not-allowed;
  }

  /* Final screen */
  .final-screen {
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }
  .final-screen.active { display: flex; }

  .final-img {
    width: min(200px, 58vw);
    height: min(200px, 58vw);
    border-radius: 20px;
    object-fit: cover;
    animation: pop 0.5s cubic-bezier(.34,1.56,.64,1) forwards;
  }

  .final-text {
    font-size: clamp(20px, 5.5vw, 28px);
    font-weight: 800;
    color: #ff4081;
    line-height: 1.3;
    animation: fadeUp 0.6s 0.2s ease both;
  }

  .final-sub {
    font-size: 14px;
    color: #bbb;
    animation: fadeUp 0.6s 0.4s ease both;
  }

  @keyframes pop {
    0%   { transform: scale(0); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes fadeUp {
    0%   { opacity: 0; transform: translateY(12px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes questionIn {
    0%   { opacity: 0; transform: translateY(8px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .question.animate-in { animation: questionIn 0.35s ease both; }
</style>
</head>
<body>

<canvas id="hearts-canvas"></canvas>

<div class="card" id="main-card">

  <!-- Question flow -->
  <div id="question-screen">
    <div class="img-wrapper">
      <img id="q-img" src="https://media.tenor.com/tsFBHGxponYAAAAi/bubu-dudu.gif" alt="gif">
    </div>
    <div class="question" id="question-text">Will you go out with me?</div>
    <div class="subtitle" id="subtitle-text"></div>
    <div class="btn-row">
      <button class="btn btn-yes" id="btn-yes" onclick="handleYes()">Yes</button>
      <button class="btn btn-no"  id="btn-no"  onclick="handleNo()">No</button>
    </div>
  </div>

  <!-- Final screen -->
  <div class="final-screen" id="final-screen">
    <img class="final-img" src="https://media1.tenor.com/m/adNdNxSschkAAAAC/peach-goma-goma-peach.gif" alt="final gif">
    <div class="final-text">Hehehehe,<br>I knew it batu.. 🥰</div>
    <div class="final-sub">Finally! 🎉</div>
  </div>

</div>

<script>
const gifs = [
  "https://media.tenor.com/tsFBHGxponYAAAAi/bubu-dudu.gif",
  "https://media.tenor.com/w8yxWaatwLIAAAAj/milk-and-mocha.gif",
  "https://media.tenor.com/WgjQEbfYPoAAAAAj/tawfikiya-mad-baby.gif",
  "https://media1.tenor.com/m/yC4xwyAqyjoAAAAd/cute-baby-crying.gif"
];

const questions = [
  { q: "Will you go out with me?",          sub: "" },
  { q: "Soch le achhe se???",               sub: "Are you sure about that? 🥺" },
  { q: "Ek aur baar soch le!",              sub: "Think carefully... 👀" },
  { q: "Man ja na?\nKitna bhaav khayegi??", sub: "Last chance! 🙏" }
];

let step = 0;

const yesBtn       = document.getElementById('btn-yes');
const noBtn        = document.getElementById('btn-no');
const questionEl   = document.getElementById('question-text');
const subtitleEl   = document.getElementById('subtitle-text');
const qImg         = document.getElementById('q-img');
const questionScreen = document.getElementById('question-screen');
const finalScreen  = document.getElementById('final-screen');

const yesSizes = [18, 22, 28, 38];
const yesPads  = [{v:14,h:32},{v:16,h:36},{v:18,h:44},{v:22,h:56}];
const noSizes  = [16, 13, 11,  9];
const noPads   = [{v:12,h:26},{v:10,h:20},{v:8,h:14},{v:6,h:10}];

function updateButtonSizes() {
  const yi = Math.min(step, yesSizes.length - 1);
  const ni = Math.min(step, noSizes.length - 1);
  yesBtn.style.fontSize = yesSizes[yi] + 'px';
  yesBtn.style.padding  = yesPads[yi].v + 'px ' + yesPads[yi].h + 'px';
  noBtn.style.fontSize  = noSizes[ni] + 'px';
  noBtn.style.padding   = noPads[ni].v + 'px ' + noPads[ni].h + 'px';
}

function swapImage(src) {
  qImg.classList.add('fade-out');
  setTimeout(() => {
    qImg.src = src;
    qImg.classList.remove('fade-out');
  }, 220);
}

function handleYes() {
  if (noBtn.classList.contains('runaway')) disableRunaway();
  questionScreen.style.display = 'none';
  finalScreen.classList.add('active');
  burstHearts();
}

function handleNo() {
  if (step < questions.length - 1) {
    step++;
    questionEl.classList.remove('animate-in');
    void questionEl.offsetWidth;
    questionEl.classList.add('animate-in');
    questionEl.textContent = questions[step].q;
    subtitleEl.textContent = questions[step].sub;
    swapImage(gifs[step]);
    updateButtonSizes();
    if (step === questions.length - 1) enableRunaway();
  }
}

// ---- Runaway NO button ----
function enableRunaway() {
  const rect = noBtn.getBoundingClientRect();
  noBtn.classList.add('runaway');
  noBtn.style.left  = rect.left + 'px';
  noBtn.style.top   = rect.top  + 'px';
  noBtn.style.width = rect.width + 'px';
  document.addEventListener('mousemove', onCursorNear);
  document.addEventListener('touchmove', onTouchNear, { passive: false });
}

function disableRunaway() {
  document.removeEventListener('mousemove', onCursorNear);
  document.removeEventListener('touchmove', onTouchNear);
}

function escapeFrom(cx, cy) {
  const bx = parseFloat(noBtn.style.left) + noBtn.offsetWidth  / 2;
  const by = parseFloat(noBtn.style.top)  + noBtn.offsetHeight / 2;
  const dx = bx - cx, dy = by - cy;
  const dist = Math.sqrt(dx*dx + dy*dy);
  if (dist < 120) {
    const angle = Math.atan2(dy, dx);
    let nx = bx + Math.cos(angle) * 170 - noBtn.offsetWidth  / 2;
    let ny = by + Math.sin(angle) * 170 - noBtn.offsetHeight / 2;
    const m = 12;
    nx = Math.max(m, Math.min(window.innerWidth  - noBtn.offsetWidth  - m, nx));
    ny = Math.max(m, Math.min(window.innerHeight - noBtn.offsetHeight - m, ny));
    noBtn.style.left = nx + 'px';
    noBtn.style.top  = ny + 'px';
  }
}

function onCursorNear(e) { escapeFrom(e.clientX, e.clientY); }
function onTouchNear(e)  { if (e.touches.length) escapeFrom(e.touches[0].clientX, e.touches[0].clientY); }

updateButtonSizes();

// ---- Heart rain ----
const canvas = document.getElementById('hearts-canvas');
const ctx    = canvas.getContext('2d');
let hearts   = [];

function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
resize();
window.addEventListener('resize', resize);

function spawnHeart() {
  hearts.push({
    x: Math.random() * canvas.width, y: -20,
    size: 10 + Math.random() * 16,
    speed: 1.2 + Math.random() * 2,
    opacity: 0.12 + Math.random() * 0.2,
    swing: (Math.random() - 0.5) * 1.5,
    t: 0
  });
}

function drawHeart(x, y, size, opacity) {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.fillStyle = '#ff6b9d';
  ctx.translate(x, y);
  ctx.beginPath();
  const s = size / 10;
  ctx.moveTo(0, s*3);
  ctx.bezierCurveTo(-s*5,-s*1,-s*10,s*3,0,s*8);
  ctx.bezierCurveTo(s*10,s*3,s*5,-s*1,0,s*3);
  ctx.fill();
  ctx.restore();
}

let spawnTimer = 0;
function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (++spawnTimer % 20 === 0) spawnHeart();
  hearts = hearts.filter(h => h.y < canvas.height + 30);
  for (const h of hearts) {
    h.t += 0.04; h.y += h.speed; h.x += Math.sin(h.t) * h.swing;
    drawHeart(h.x, h.y, h.size, h.opacity);
  }
  requestAnimationFrame(animateHearts);
}
requestAnimationFrame(animateHearts);

function burstHearts() {
  for (let i = 0; i < 35; i++) {
    setTimeout(() => {
      hearts.push({
        x: canvas.width/2  + (Math.random()-0.5)*220,
        y: canvas.height/2 + (Math.random()-0.5)*120,
        size: 14 + Math.random()*24,
        speed: 1.5 + Math.random()*3,
        opacity: 0.35 + Math.random()*0.4,
        swing: (Math.random()-0.5)*3,
        t: Math.random()*6
      });
    }, i * 35);
  }
}
</script>
</body>
</html>

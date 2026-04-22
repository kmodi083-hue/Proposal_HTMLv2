const gifs = [
  "https://media.tenor.com/tsFBHGxponYAAAAi/bubu-dudu.gif",
  "https://media.tenor.com/w8yxWaatwLIAAAAj/milk-and-mocha.gif",
  "https://media.tenor.com/WgjQEbfYPoAAAAAj/tawfikiya-mad-baby.gif",
  "https://media1.tenor.com/m/yC4xwyAqyjoAAAAd/cute-baby-crying.gif"
];

// ✅ To use local GIF files instead, replace the URLs above with:
// "images/gif1.gif", "images/gif2.gif", etc.

const questions = [
  { q: "Will you go out with me?",          sub: "" },
  { q: "Soch le achhe se???",               sub: "Are you sure about that? 🥺" },
  { q: "Ek aur baar soch le!",              sub: "Think carefully... 👀" },
  { q: "Man ja na?\nKitna bhaav khayegi??", sub: "Last chance! 🙏" }
];

let step = 0;

const yesBtn         = document.getElementById('btn-yes');
const noBtn          = document.getElementById('btn-no');
const questionEl     = document.getElementById('question-text');
const subtitleEl     = document.getElementById('subtitle-text');
const qImg           = document.getElementById('q-img');
const questionScreen = document.getElementById('question-screen');
const finalScreen    = document.getElementById('final-screen');

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
  const dist = Math.sqrt(dx * dx + dy * dy);
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

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

function spawnHeart() {
  hearts.push({
    x:       Math.random() * canvas.width,
    y:       -20,
    size:    10 + Math.random() * 16,
    speed:   1.2 + Math.random() * 2,
    opacity: 0.12 + Math.random() * 0.2,
    swing:   (Math.random() - 0.5) * 1.5,
    t:       0
  });
}

function drawHeart(x, y, size, opacity) {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.fillStyle   = '#ff6b9d';
  ctx.translate(x, y);
  ctx.beginPath();
  const s = size / 10;
  ctx.moveTo(0, s * 3);
  ctx.bezierCurveTo(-s*5, -s*1, -s*10, s*3, 0,   s*8);
  ctx.bezierCurveTo( s*10, s*3,  s*5, -s*1, 0,   s*3);
  ctx.fill();
  ctx.restore();
}

let spawnTimer = 0;
function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (++spawnTimer % 20 === 0) spawnHeart();
  hearts = hearts.filter(h => h.y < canvas.height + 30);
  for (const h of hearts) {
    h.t += 0.04;
    h.y += h.speed;
    h.x += Math.sin(h.t) * h.swing;
    drawHeart(h.x, h.y, h.size, h.opacity);
  }
  requestAnimationFrame(animateHearts);
}
requestAnimationFrame(animateHearts);

function burstHearts() {
  for (let i = 0; i < 35; i++) {
    setTimeout(() => {
      hearts.push({
        x:       canvas.width  / 2 + (Math.random() - 0.5) * 220,
        y:       canvas.height / 2 + (Math.random() - 0.5) * 120,
        size:    14 + Math.random() * 24,
        speed:   1.5 + Math.random() * 3,
        opacity: 0.35 + Math.random() * 0.4,
        swing:   (Math.random() - 0.5) * 3,
        t:       Math.random() * 6
      });
    }, i * 35);
  }
}

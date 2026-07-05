let currentQ = 0;
let answers = new Array(qDB.length).fill(null);
let status = new Array(qDB.length).fill('unvisited'); // unvisited, answered, not-answered, review, review-ans
let timer = 2700; // 45 mins
let timerInterval;
const LS_KEY = "neet2027_chem_quiz";

window.onload = () => {
  initPalette();
  loadProgress();
  loadQuestion(currentQ);
  timerInterval = setInterval(updateTimer, 1000);
};

function initPalette() {
  const pal = document.getElementById('palette');
  pal.innerHTML = '';
  qDB.forEach((_, i) => {
    let btn = document.createElement('button');
    btn.className = `pal-btn pal-${status[i]}`;
    btn.innerText = i + 1;
    btn.onclick = () => loadQuestion(i);
    pal.appendChild(btn);
  });
}

function loadQuestion(index) {
  if (status[currentQ] === 'unvisited') updateStatus(currentQ, 'not-answered');
  currentQ = index;
  document.getElementById('q-num').innerText = currentQ + 1;
  const q = qDB[currentQ];
  document.getElementById('question-text').innerText = q.q;
  
  const opts = document.getElementById('options-container');
  opts.innerHTML = '';
  ['A', 'B', 'C', 'D'].forEach(opt => {
    let btn = document.createElement('button');
    btn.innerText = `${opt}. ${q[opt]}`;
    if (answers[currentQ] === opt) btn.classList.add('selected');
    btn.onclick = () => selectOption(opt);
    opts.appendChild(btn);
  });
  document.getElementById('explanation-box').style.display = 'none';
  updatePaletteUI();
  saveProgress();
}

function selectOption(opt) {
  answers[currentQ] = opt;
  loadQuestion(currentQ); // re-render selected
}

function updateStatus(index, newStatus) {
  status[index] = newStatus;
  updatePaletteUI();
}

function updatePaletteUI() {
  const btns = document.querySelectorAll('.pal-btn');
  btns.forEach((btn, i) => {
    btn.className = `pal-btn pal-${status[i]}`;
    if(i === currentQ) btn.style.border = "2px solid black";
    else btn.style.border = "1px solid var(--border)";
  });
}

function nextQuestion() {
  if (answers[currentQ]) updateStatus(currentQ, 'answered');
  else updateStatus(currentQ, 'not-answered');
  if (currentQ < qDB.length - 1) loadQuestion(currentQ + 1);
}

function prevQuestion() {
  if (currentQ > 0) loadQuestion(currentQ - 1);
}

function markReview() {
  if (answers[currentQ]) updateStatus(currentQ, 'review-ans');
  else updateStatus(currentQ, 'review');
  if (currentQ < qDB.length - 1) loadQuestion(currentQ + 1);
}

function clearResponse() {
  answers[currentQ] = null;
  updateStatus(currentQ, 'not-answered');
  loadQuestion(currentQ);
}

function updateTimer() {
  if (timer <= 0) { clearInterval(timerInterval); submitQuiz(); return; }
  timer--;
  let m = Math.floor(timer / 60).toString().padStart(2, '0');
  let s = (timer % 60).toString().padStart(2, '0');
  document.getElementById('timer').innerText = `${m}:${s}`;
}

function saveProgress() {
  localStorage.setItem(LS_KEY, JSON.stringify({ answers, status, timer, currentQ }));
}

function loadProgress() {
  const saved = JSON.parse(localStorage.getItem(LS_KEY));
  if (saved) { answers = saved.answers; status = saved.status; timer = saved.timer; currentQ = saved.currentQ; }
}

function toggleTheme() {
  const body = document.body;
  body.setAttribute('data-theme', body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
}

function submitQuiz() {
  clearInterval(timerInterval);
  document.getElementById('quiz-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'flex';
  localStorage.removeItem(LS_KEY);
  calculateResults();
}

function calculateResults() {
  let score = 0, correct = 0, incorrect = 0, unattempted = 0;
  qDB.forEach((q, i) => {
    if (!answers[i]) unattempted++;
    else if (answers[i] === q.ans) { correct++; score += 4; }
    else { incorrect++; score -= 1; }
  });
  
  const totalMarks = qDB.length * 4;
  const percent = ((score / totalMarks) * 100).toFixed(2);
  let air = Math.max(1, Math.floor(2000000 - (score/totalMarks)*1999999));

  document.getElementById('analysis-text').innerHTML = `
    Score: ${score}/${totalMarks} <br>
    Correct: ${correct} | Incorrect: ${incorrect} | Unattempted: ${unattempted} <br>
    Accuracy: ${((correct/(correct+incorrect||1))*100).toFixed(1)}% <br>
    <strong>Predicted AIR: ~${air}</strong>
  `;

  renderCharts(correct, incorrect, unattempted);
}

function renderCharts(c, i, u) {
  new Chart(document.getElementById('pieChart'), {
    type: 'pie', data: { labels: ['Correct', 'Incorrect', 'Unattempted'], datasets: [{ data: [c, i, u], backgroundColor: ['#28a745', '#dc3545', '#ffc107'] }] }
  });
  new Chart(document.getElementById('barChart'), {
    type: 'bar', data: { labels: ['Score Distribution'], datasets: [{ label: 'Marks', data: [c*4], backgroundColor: '#007bff' }] }
  });
}

function reviewMistakes() {
  const area = document.getElementById('review-area');
  area.innerHTML = '<h3>Detailed Solutions</h3>';
  qDB.forEach((q, i) => {
    let div = document.createElement('div');
    div.style.borderBottom = "1px solid var(--border)"; div.style.padding = "10px 0";
    let color = answers[i] === q.ans ? 'green' : (answers[i] ? 'red' : 'orange');
    div.innerHTML = `
      <p><strong>Q${i+1}: ${q.q}</strong></p>
      <p style="color:${color}">Your Answer: ${answers[i] || 'None'} | Correct Answer: ${q.ans}</p>
      <p><em>NCERT Reference:</em> ${q.ncert}</p>
      <p><em>Explanation:</em> ${q.exp}</p>
      <p><em>Trick:</em> ${q.trick}</p>
    `;
    area.appendChild(div);
  });
}

function exportPDF() {
  const element = document.getElementById('result-screen');
  html2pdf(element, { margin: 10, filename: 'NEET_Chem_Report.pdf', image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } });
}
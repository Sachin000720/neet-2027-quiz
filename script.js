// Application State 
let currentQuestions = [];
let currentIndex = 0;
let userAnswers = {};
let bookmarked = new Set();
let markedForReview = new Set();
let mode = 'practice'; // 'practice' or 'mock'
let timerInterval;
let timeRemaining = 3600; // 1 hour default for mock

// DOM Elements
const views = document.querySelectorAll('.view');
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Theme Initialization
if (localStorage.getItem('theme') === 'dark') {
    root.setAttribute('data-theme', 'dark');
}
themeToggle.addEventListener('click', () => {
    const newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Start Quiz
function startTest(selectedMode) {
    mode = selectedMode;
    // Shuffle and load questions
    currentQuestions = [...questionDatabase].sort(() => Math.random() - 0.5);
    currentIndex = 0;
    userAnswers = {};
    bookmarked.clear();
    markedForReview.clear();

    switchView('quiz-view'); 
    generatePalette(); 
    loadQuestion(); 
    
    if (mode === 'mock') { 
        timeRemaining = currentQuestions.length * 60; // 1 min per question 
        startTimer(); 
        document.getElementById('explanation-box').classList.add('hidden'); 
    } else { 
        document.getElementById('timer').innerText = "Practice Mode"; 
    } 
}

function switchView(viewId) {
    views.forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
}

// Timer Logic
function startTimer() {
    clearInterval(timerInterval);
    const timerDisplay = document.getElementById('timer');
    timerInterval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
            return;
        }
        timeRemaining--;
        let hrs = Math.floor(timeRemaining / 3600);
        let mins = Math.floor((timeRemaining % 3600) / 60);
        let secs = timeRemaining % 60;
        timerDisplay.innerText = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
}

// Render Question
function loadQuestion() {
    const q = currentQuestions[currentIndex];
    document.getElementById('q-number').innerText = `Question ${currentIndex + 1} of ${currentQuestions.length}`;
    document.getElementById('q-difficulty').innerText = q.difficulty;
    document.getElementById('question-text').innerHTML = q.question;

    const optionsContainer = document.getElementById('options-container'); 
    optionsContainer.innerHTML = ''; 
    
    for (let key in q.options) { 
        const div = document.createElement('div'); 
        div.className = 'option'; 
        div.innerHTML = `<strong>${key}.</strong> ${q.options[key]}`; 
        if (userAnswers[q.id] === key) { 
            div.classList.add('selected'); 
        } 
        if (mode === 'practice' && userAnswers[q.id]) { 
            if (key === q.correctOption) div.classList.add('correct'); 
            else if (userAnswers[q.id] === key) div.classList.add('wrong'); 
            div.style.pointerEvents = 'none'; 
        } 
        div.onclick = (event) => selectOption(key, event); 
        optionsContainer.appendChild(div); 
    } 
    
    if (mode === 'practice' && userAnswers[q.id]) { 
        showExplanation(q); 
    } else { 
        document.getElementById('explanation-box').classList.add('hidden'); 
    } 
    
    updateNavigation(); 
    updatePalette(); 
}

function selectOption(key, event) {
    if (mode === 'practice' && userAnswers[currentQuestions[currentIndex].id]) return;

    const qId = currentQuestions[currentIndex].id; 
    userAnswers[qId] = key; 
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected')); 
    event.currentTarget.classList.add('selected'); 
    
    if (mode === 'practice') { 
        loadQuestion(); // Reloads to show colors and explanation 
    } 
}

function showExplanation(q) {
    const box = document.getElementById('explanation-box');
    box.classList.remove('hidden');
    document.getElementById('exp-correct').innerText = q.correctOption;
    document.getElementById('exp-detail').innerText = q.explanation || "N/A";
    document.getElementById('exp-ncert').innerText = q.ncertLine || "N/A";
    document.getElementById('exp-wrong').innerText = q.whyOthersWrong || "N/A";
    document.getElementById('exp-trick').innerText = q.memoryTrick || "N/A";
    document.getElementById('exp-mistake').innerText = q.commonMistake || "N/A";
    document.getElementById('exp-pyq').innerText = q.pyqSimilarity || "N/A";
    document.getElementById('exp-prob').innerText = q.neetProbability || "N/A";
}

// Navigation Controls
document.getElementById('next-btn').onclick = () => {
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        if(confirm("Submit Test?")) submitQuiz();
    }
};

document.getElementById('prev-btn').onclick = () => {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
    }
};

document.getElementById('skip-btn').onclick = () => {
    const qId = currentQuestions[currentIndex].id;
    if(!userAnswers[qId]) userAnswers[qId] = null; // Mark as skipped explicitly
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        loadQuestion();
    }
};

document.getElementById('mark-review-btn').onclick = () => {
    const qId = currentQuestions[currentIndex].id;
    if (markedForReview.has(qId)) markedForReview.delete(qId);
    else markedForReview.add(qId);
    updatePalette();
};

document.getElementById('submit-quiz-btn').onclick = () => {
    if(confirm("Are you sure you want to submit?")) submitQuiz();
};

// Palette Generation
function generatePalette() {
    const grid = document.getElementById('question-palette');
    grid.innerHTML = '';
    currentQuestions.forEach((q, index) => {
        const btn = document.createElement('button');
        btn.className = 'pal-btn';
        btn.innerText = index + 1;
        btn.id = `pal-${q.id}`;
        btn.onclick = () => {
            currentIndex = index;
            loadQuestion();
        };
        grid.appendChild(btn);
    });
}

function updatePalette() {
    currentQuestions.forEach(q => {
        const btn = document.getElementById(`pal-${q.id}`);
        if (btn) {
            btn.className = 'pal-btn';
            if (markedForReview.has(q.id)) btn.classList.add('review');
            else if (userAnswers[q.id]) btn.classList.add('answered');
            else if (userAnswers[q.id] === null) btn.classList.add('skipped');
        }
    });
}

function updateNavigation() {
    document.getElementById('prev-btn').disabled = currentIndex === 0;
    const nextBtn = document.getElementById('next-btn');
    if (currentIndex === currentQuestions.length - 1) {
        nextBtn.innerText = "Submit";
        nextBtn.classList.add('danger-btn');
    } else {
        nextBtn.innerText = "Save & Next";
        nextBtn.classList.remove('danger-btn');
    }
}

// Submission and Analytics
function submitQuiz() {
    clearInterval(timerInterval);
    switchView('results-view');
    calculateResults();
}

function calculateResults() {
    let score = 0;
    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;
    let topics = {};

    currentQuestions.forEach(q => { 
        if (!topics[q.topic]) topics[q.topic] = { total: 0, correct: 0 }; 
        topics[q.topic].total++; 
        
        if (userAnswers[q.id] === q.correctOption) { 
            score += 4; 
            correct++; 
            topics[q.topic].correct++; 
        } else if (userAnswers[q.id] && userAnswers[q.id] !== null) { 
            score -= 1; 
            incorrect++; 
        } else { 
            unattempted++; 
        } 
    }); 
    
    const maxScore = currentQuestions.length * 4; 
    document.getElementById('total-score').innerText = score; 
    document.getElementById('max-score').innerText = maxScore; 
    
    // AIR prediction based on percentage 
    const percent = (score / maxScore) * 100; 
    let air = "> 1,00,000"; 
    if(percent > 95) air = "1 - 500"; 
    else if(percent > 85) air = "500 - 5,000"; 
    else if(percent > 70) air = "5,000 - 25,000"; 
    
    document.getElementById('air-pred').innerText = air; 
    renderCharts(correct, incorrect, unattempted, topics); 
}

function renderCharts(correct, incorrect, unattempted, topics) {
    const accCtx = document.getElementById('accuracyChart').getContext('2d');
    new Chart(accCtx, {
        type: 'pie',
        data: {
            labels: ['Correct (+4)', 'Incorrect (-1)', 'Unattempted (0)'],
            datasets: [{
                data: [correct, incorrect, unattempted],
                backgroundColor: ['#28a745', '#dc3545', '#e9ecef']
            }]
        },
        options: { plugins: { title: { display: true, text: 'Accuracy Breakdown' } } }
    });

    const topicCtx = document.getElementById('topicChart').getContext('2d'); 
    const topicLabels = Object.keys(topics); 
    const topicData = topicLabels.map(t => (topics[t].correct / topics[t].total) * 100); 
    
    new Chart(topicCtx, { 
        type: 'bar', 
        data: { 
            labels: topicLabels, 
            datasets: [{ 
                label: 'Accuracy % by Topic', 
                data: topicData, 
                backgroundColor: '#007bff' 
            }] 
        }, 
        options: { scales: { y: { beginAtZero: true, max: 100 } } } 
    }); 
}

function retryWrong() {
    const wrongQuestions = currentQuestions.filter(q => userAnswers[q.id] && userAnswers[q.id] !== q.correctOption);
    if(wrongQuestions.length === 0) {
        alert("No wrong questions to retry!");
        return;
    }
    currentQuestions = wrongQuestions;
    currentIndex = 0;
    userAnswers = {};
    switchView('quiz-view');
    loadQuestion();
    generatePalette();
}

function exportPDF() {
    window.print();
}

function exportCSV() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Question ID,Topic,Difficulty,Your Answer,Correct Answer,Status\n";

    currentQuestions.forEach(q => { 
        let uAns = userAnswers[q.id] || "Skipped"; 
        let status = (uAns === q.correctOption) ? "Correct" : (uAns === "Skipped" ? "Skipped" : "Wrong"); 
        csvContent += `${q.id},"${q.topic}",${q.difficulty},${uAns},${q.correctOption},${status}\n`; 
    }); 
    
    const encodedUri = encodeURI(csvContent); 
    const link = document.createElement("a"); 
    link.setAttribute("href", encodedUri); 
    link.setAttribute("download", "NEET_Report.csv"); 
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 
}

// PWA Installation Logic
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('install-banner').classList.remove('hidden');
});

document.getElementById('install-btn').addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            document.getElementById('install-banner').classList.add('hidden');
        }
        deferredPrompt = null;
    }
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js');
    });
}

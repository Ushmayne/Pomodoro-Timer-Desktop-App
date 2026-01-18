import './index.css';

const WORK_DURATION = 25 * 60; 
const BREAK_DURATION = 5 * 60; 

let timeLeft = WORK_DURATION;//declaring variables
let isRunning = false;
let isWorkSession = true;
let sessionsCompleted = 0;
let timerInterval = null;
let currentAudio = null;

const timerDisplay = document.getElementById('timer');
const phaseDisplay = document.getElementById('phase');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const sessionsDisplay = document.getElementById('sessions');

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateDisplay() {
  timerDisplay.textContent = formatTime(timeLeft);
  phaseDisplay.textContent = isWorkSession ? 'Work Session' : 'Break Time';
  
  // Change background color based on phase
  if (isWorkSession) {
    document.body.classList.remove('break');
  } else {
    document.body.classList.add('break');
  }
}

function startTimer() {
  if (isRunning) return;
  
  isRunning = true;
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  
  timerInterval = setInterval(() => {
    timeLeft--;
    updateDisplay();
    
    if (timeLeft === 0) {
      playAudio();
      clearInterval(timerInterval);
      isRunning = false;
      sessionsCompleted++;
      sessionsDisplay.textContent = sessionsCompleted;
      
      // Switch between work and break
      isWorkSession = !isWorkSession;
      timeLeft = isWorkSession ? WORK_DURATION : BREAK_DURATION;
      
      // Show notification
      
      
      
      updateDisplay();
      startBtn.disabled = false;
      pauseBtn.disabled = true;
    }
  }, 1000);
}


function playAudio(){
  if (currentAudio) {
    currentAudio.pause();
  }
  currentAudio = new Audio('/alarm.wav');
  currentAudio.play();
}

function pauseTimer() {
  isRunning = false;
  clearInterval(timerInterval);
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  isWorkSession = true;
  timeLeft = WORK_DURATION;
  sessionsCompleted = 0;
  
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  
  sessionsDisplay.textContent = sessionsCompleted;
  updateDisplay();
}

// Event listeners
startBtn.addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
  }
  startTimer();
});

pauseBtn.addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
  }
  pauseTimer();
});

resetBtn.addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
  }
  resetTimer();
});

// Initial display
updateDisplay();

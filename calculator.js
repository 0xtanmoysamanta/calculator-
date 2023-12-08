  let displayValue = '0';

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function appendValue(value) {
  if (displayValue === '0') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
  vibrate();
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
  vibrate();
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  if (displayValue === '') {
    displayValue = '0';
  }
  updateDisplay();
  vibrate();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
  vibrate();
}

function vibrate() {
  // Check if the Vibration API is supported
  if ('vibrate' in navigator) {
    navigator.vibrate(50); // Vibrate for 50 milliseconds
  }
}

document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (!isNaN(key) || key === '.' || key === '/' || key === '*' || key === '-' || key === '+') {
    appendValue(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});

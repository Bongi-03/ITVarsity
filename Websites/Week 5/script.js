let firstOperand = null;
let operator = null;

// Select the display element
const display = document.getElementById('display');

// Select all number buttons
const numberButtons = document.querySelectorAll('.number');

// Select all operator buttons
const operatorButtons = document.querySelectorAll('.operator');

// Select other buttons
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
const decimalButton = document.querySelector('.decimal');

// Current display text
let currentDisplay = '0';

// Update display function
function updateDisplay() {
  display.textContent = currentDisplay;
}

// Number button click handler
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.dataset.number;
    // Prevent multiple leading zeros
    if (currentDisplay === '0') {
      currentDisplay = number;
    } else {
      currentDisplay += number;
    }
    updateDisplay();
  });
});

// Decimal button click handler
decimalButton.addEventListener('click', () => {
  if (!currentDisplay.includes('.')) {
    currentDisplay += '.';
    updateDisplay();
  }
});

// AC button click handler
clearButton.addEventListener('click', () => {
  currentDisplay = '0';
  firstOperand = null;
  operator = null;
  updateDisplay();
});

// Operator button click handler
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (operator !== null && firstOperand !== null) {
      // If operator is already set, calculate first
      equalsButton.click();
    }
    firstOperand = currentDisplay;
    operator = button.dataset.operator;
    currentDisplay = '0'; // Clear display for next number
    updateDisplay();
  });
});

// Equals button click handler
equalsButton.addEventListener('click', () => {
  if (firstOperand === null || operator === null) {
    return; // Do nothing if no operator selected
  }

  const secondOperand = currentDisplay;
  let result;

  // Perform calculation based on operator
  switch (operator) {
    case '+':
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case '-':
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case '*':
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case '/':
      result = parseFloat(secondOperand) === 0 ? 'Error' : parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    default:
      result = 'Error';
  }

  currentDisplay = result.toString();
  updateDisplay();

  // Reset operands and operator for new calculation
  firstOperand = null;
  operator = null;
});

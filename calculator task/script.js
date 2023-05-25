// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Create the calculator container div
  const calculatorContainer = document.createElement('div');
  calculatorContainer.classList.add('container');
  const calculatorDiv = document.createElement('div');
  calculatorDiv.classList.add('calculator');

  // Create the display input element
  const displayInput = document.createElement('input');
  displayInput.setAttribute('type', 'text');
  displayInput.setAttribute('id', 'display');
  displayInput.setAttribute('readonly', 'readonly');

  // Append the display input to the calculator div
  calculatorDiv.appendChild(displayInput);

  // Create the buttons div
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons');

  // Create number buttons (0-9)
  for (let i = 9; i >= 0; i--) {
    const numberButton = document.createElement('button');
    numberButton.classList.add('number');
    numberButton.textContent = i;
    buttonsDiv.appendChild(numberButton);
  }

  // Create operator buttons (+, -, *, /, %)
  const operators = ['+', '-', '*', '/', '%'];
  operators.forEach(operator => {
    const operatorButton = document.createElement('button');
    operatorButton.classList.add('operator');
    operatorButton.textContent = operator;
    buttonsDiv.appendChild(operatorButton);
  });

  // Create equals button (=)
  const equalsButton = document.createElement('button');
  equalsButton.setAttribute('id', 'equals');
  equalsButton.textContent = '=';
  buttonsDiv.appendChild(equalsButton);

  // Create clear button (C)
  const clearButton = document.createElement('button');
  clearButton.setAttribute('id', 'clear');
  clearButton.textContent = 'C';
  buttonsDiv.appendChild(clearButton);

  // Append the buttons div to the calculator div
  calculatorDiv.appendChild(buttonsDiv);

  // Append the calculator div to the calculator container div
  calculatorContainer.appendChild(calculatorDiv);

  // Append the calculator container div to the document body
  document.body.appendChild(calculatorContainer);

  // Get the display element
  const display = document.getElementById('display');

  // Get all number buttons
  const numberButtons = document.querySelectorAll('.number');

  // Get all operator buttons
  const operatorButtons = document.querySelectorAll('.operator');

  // Add event listener to each number button
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      display.value += button.textContent;
    });
  });

  // Add event listener to each operator button
  operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
      display.value += button.textContent;
    });
  });

  // Add event listener to equals button
  document.getElementById('equals').addEventListener('click', () => {
    try {
      const result = eval(display.value); // Evaluate the expression
      display.value = result; // Update the display with the result
    } catch (error) {
      display.value = 'Error'; // Display an error message if evaluation fails
    }
  });

  // Add event listener to clear button
  document.getElementById('clear').addEventListener('click', () => {
    display.value = ''; // Clear the display
  });

  // Add event listener for keyboard events
  document.addEventListener('keydown', event => {
    const key = event.key;
    if (/[0-9/*%+-]/.test(key)) {
      display.value += key;
    } else {
      alert('Only numbers are allowed');
    }
  });
});

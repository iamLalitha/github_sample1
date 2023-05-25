// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
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
  
// Function to append clicked value to display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Function to delete the last entered value
  function deleteLast() {
    const currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
  }
  
  // Function to calculate the result
  function calculateResult() {
    const expression = document.getElementById('display').value;
    try {
      const result = eval(expression);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  
// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character in the display
function deleteLastCharacter() {
    var currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

// Function to append a value to the display
function appendValue(value) {
    document.getElementById('display').value += value;
}

// Function to append an operator to the display
function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

// Function to calculate and display the result
function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

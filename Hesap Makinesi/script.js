const display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += ` ${operator} `;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        const expression = display.value.replace('^', '**');
        display.value = eval(expression);
    } catch (error) {
        alert('Invalid Expression');
        clearDisplay();
    }
}
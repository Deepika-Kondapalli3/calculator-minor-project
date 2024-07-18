function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastCharacter() {
    let display = document.getElementById('display');
    display.value = display.value.toString().slice(0, -1);
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        let value = display.value.replace('%', '/100'); 
        value = eval(value);
        if (typeof value === 'number') {
            display.value = !Number.isInteger(value) ? value.toFixed(2) : value;
        }
    } catch (e) {
        display.value = 'Error';
    }
}

function switchTheme() {
    const theme = document.getElementById('theme').value;
    document.body.className = theme;
    document.querySelector('.header').className = `header ${theme}`;
    document.querySelector('.container').className = `container ${theme}`;
    document.querySelector('.calculator').className = `calculator ${theme}`;
    document.querySelector('.display input').className = `display ${theme}`;
    const buttons = document.querySelectorAll('.calculator input[type="button"]');
    buttons.forEach(button => {
        if (button.classList.contains('operator') || button.classList.contains('equal')) {
            button.className = `operator ${theme}`;
        } else {
            button.className = `${theme}`;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    switchTheme();
});
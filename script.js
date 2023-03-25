let firstDigits = '';
let secondDigits = '';
let operator = '';

const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const currentButton = buttons[index];
    const value = currentButton.textContent.trim();
    
    if (value === "+" || value === "-" || value === "/" || value === "X") {
        operator = value;
        console.log( operator);
    } else {
        if (!operator) {
          firstDigits = firstDigits + value;
          console.log( firstDigits);
        } else if (value === "=") {
            console.log( value);
            let total = calculate(firstDigits, operator, secondDigits);
            
        } else {
          secondDigits = secondDigits + value;
          console.log( secondDigits);
        }
    }
  });
});

function calculate(first, operator, second) {
    
    let total = null;
    
    
    if (operator === '+') {
        total = parseFloat(first) + parseFloat(second);
        console.log(total);
    
    } else if (operator === '-') {
        total = parseFloat(first) - parseFloat(second);
        console.log(total);
    
    
    } else if (operator === 'X') {
        total = parseFloat(first) * parseFloat(second);
        console.log(total);
    
    
    } else if (operator === '/') {
        total = parseFloat(first) / parseFloat(second);
        console.log(total);
    }
    
    
    return total;
}

let firstDigits = '';
let secondDigits = '';
let operator = '';
let all=''

const result = document.querySelector('#variables');
const input = document.querySelector('#input')
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const currentButton = buttons[index];
    const value = currentButton.textContent.trim();
    
    if (value === "+" || value === "-" || value === "/" || value === "X") {
        
      operator = value;
      console.log( operator);
      all+=operator;
    
      } else {
        if (!operator) {
          
          firstDigits = firstDigits + value;
          console.log( firstDigits);
          
          input.textContent = firstDigits
          all+=firstDigits

        
        } else if (value === "=") {
            console.log( value);
            all+=value
            let total = calculate(firstDigits, operator, secondDigits,all);
            
        } else {
          secondDigits = secondDigits + value;
          console.log( secondDigits);
        }
    }
  });
  result.textContent = all
});

function calculate(first, operator, second,all) {
    
    let total = null;
    
    
    if (operator === '+') {
        total = parseFloat(first) + parseFloat(second);
        console.log(total);
        all+=all
    
    } else if (operator === '-') {
        total = parseFloat(first) - parseFloat(second);
        console.log(total);
        all+=all
    
    
    } else if (operator === 'X') {
        total = parseFloat(first) * parseFloat(second);
        console.log(total);
    all+=all
    
    } else if (operator === '/') {
        total = parseFloat(first) / parseFloat(second);
        console.log(total);
        all+=all
    }
    
    
    return total;
}

let firstDigits=''
let secondDigits=''
let operator=''
let alarm



const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.btn');






buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const currentButton = buttons[index];  // stores the reference to the button
    const value = currentButton.textContent.trim(); // retrieves the text content of the button and stores it 
    
    // check for button operator
    if(value==="X" || value==="+" || value==="-" || value==="/"){
        operator=checkOperator(operator,value)
        return;
    }

    if (!operator) {
    firstDigits= firstDigits+ value;
    console.log(firstDigits);
    }
    else{
        secondDigits= secondDigits + value
        console.log(secondDigits)
    }



  });
});






function checkOperator(operator,value){
    if (!operator) {
        operator=operator+value;
        console.log(operator)
        return operator;
    }
    else{
        operator='';
        operator=operator+value;
        console.log(operator);
        return operator;
    }
}















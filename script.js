function add(a,b){
  return parseFloat(a) + parseFloat(b)
}

function subtract(a,b){
  return parseFloat(a) - parseFloat(b)
}

function multiply(a,b){
  return parseFloat(a) * parseFloat(b)
}

function divide(a,b){
  if (b != '0'){
  return parseFloat(a) / parseFloat(b)
  } else {
      alert("Division by zero is not possible!");
      clearBtn.click();
  }
}



function operate(operator, firstArg, secondArg){
  switch (operator){
      case '+':
          return add(firstArg,secondArg);
          break;
      case '-':
          return subtract(firstArg,secondArg);
          break;
      case 'X':
          return multiply(firstArg,secondArg);
          break;
      
      case '/':
          return divide(firstArg,secondArg);
          break;
      }
  }

  
  const displayZone = document.getElementsByClassName('result');
  const inputZone = document.getElementById('input');
  const answerZone = document.getElementById('answer');

  
  

  document.querySelectorAll('.btn').forEach(item => {
      item.addEventListener('click', event => {
          updateOperands(item.textContent)
      })
  })

  const firstOperandSpan = document.getElementById('firstOperand');
  const operatorSpan = document.getElementById('operator');
  const secondOperandSpan = document.getElementById('secondOperand');

  
  
  function updateOperands(value){
      if (operatorSpan.textContent == ''){
          firstOperandSpan.textContent += value;
          
      } else {
          secondOperandSpan.textContent += value;
          
      }
  }

  document.querySelectorAll('.btnOp').forEach(item => {
      item.addEventListener('click', event => {
          updateOperator(item.textContent)
      })
  })

  
  
  function updateOperator(value){
      if (firstOperandSpan.textContent != '' && secondOperandSpan.textContent == ''){
      operatorSpan.textContent = value;
      } else if (firstOperandSpan.textContent != '' && secondOperandSpan.textContent != ''){
          let meanwhile = roundTo5decimalsMax(operate(operatorSpan.textContent, firstOperandSpan.textContent, secondOperandSpan.textContent));
          firstOperandSpan.textContent = meanwhile;
          answerZone.textContent = meanwhile;
          operatorSpan.textContent = value;
          secondOperandSpan.textContent = '';
          answerZone.textContent = meanwhile;

          
      } else if (firstOperandSpan.textContent == '' && answerZone.textContent != ''){
          firstOperandSpan.textContent = answerZone.textContent;
          operatorSpan.textContent = value;
          
      }
   }

 

  function roundTo5decimalsMax(halfProduct){
      halfProduct *= 100000;
      halfProduct = Math.round(halfProduct)
      return halfProduct / 100000
  }

  
  const eqlBtn = document.getElementById('equals');
  
  
  eqlBtn.onclick = function(){
      if (firstOperandSpan.textContent != '' && operatorSpan.textContent != '' && secondOperandSpan.textContent != ''){
          let answer = roundTo5decimalsMax(operate(operatorSpan.textContent, firstOperandSpan.textContent, secondOperandSpan.textContent));
          answerZone.textContent = answer;
          firstOperandSpan.textContent = '';
          operatorSpan.textContent = '';
          secondOperandSpan.textContent = '';
      }
      else{
        console.log('hello there')
      }
  }

  const clearBtn = document.getElementById('clear');

  clearBtn.onclick = function(){                  
      firstOperandSpan.textContent = '';   
      operatorSpan.textContent = '';          
      secondOperandSpan.textContent = '';
      answerZone.textContent = '';
      
  }

  


  const dotBtn = document.getElementById('dot');
  dotBtn.onclick = function(){
      if (firstOperandSpan.textContent == ''){
          firstOperandSpan.textContent += '0.';
      } else if (firstOperandSpan.textContent != '' && operatorSpan.textContent == ''){
          let sanityCheck = firstOperandSpan.textContent.split('');
          if (!sanityCheck.includes('.')){
              
              firstOperandSpan.textContent += '.';
          }  
      } else if (operatorSpan.textContent != '' && secondOperandSpan.textContent == ''){
          secondOperandSpan.textContent += '0.';
      } else {
          let sanityCheck = secondOperandSpan.textContent.split('');
          if (!sanityCheck.includes('.')) {
              secondOperandSpan.textContent += '.'
          }
      }   
  }

  
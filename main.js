(function(){
  'use strict';

// selects all elements with class name
var input = document.querySelectorAll(".input");
var clear = document.querySelector(".clear");
var entry = document.querySelector(".calculation");
var operator = document.querySelectorAll(".operator");
// var divide = document.querySelectorAll(".divide");
// var multiply = document.querySelectorAll(".multiply");
// var subtract = document.querySelectorAll(".subtract");
// var add = document.querySelectorAll(".add");
var decimal = document.querySelector(".decimal");
var equal = document.querySelector(".equal");

for(var i = 0; i < input.length; i++){
  input[i].addEventListener('click', myfunction);
}

var numOne = '', numTwo = '', operatorInput = '', decimalInput = false;

function myfunction(event) {
  // var inputValue = this.textContent;
  var userInput = event.target;
  var inputValue = event.target.textContent;

  if(operatorInput.length === 0 && userInput.classList.contains('number')) {
    numOne += inputValue;
    entry.textContent = numOne;
    // console.log('numOne', numOne);
  } else if(userInput.classList.contains('operator')) {
    operatorInput = inputValue;
    // console.log('operatorInput', operatorInput);
  } else if (operatorInput.length !== 0 && userInput.classList.contains('number')) {
    numTwo += inputValue;
    entry.textContent = numTwo;
    // console.log('numTwo', numTwo);
  } else if (userInput.classList.contains('decimal') && decimalInput === false) {
    decimalInput = true;
    if(operatorInput.length === 0) {
      numOne += inputValue;
      entry.textContent = numOne;
    } else {
      numTwo += inputValue;
      entry.textContent = numTwo;
    }
  } else if (inputValue === 'C'){
    console.log('you clicked the clear button');
    // clear out numOne numTwo and operatorInput & reset decimmalInput
    entry.textContent = '';
  } else if (inputValue === '=') {
    //console.log('clicked the equal button');
    var result;
    switch(operatorInput) {
      case '/':
        result = Number(numOne) / Number(numTwo);
        break;
      case '*':
        result = Number(numOne) * Number(numTwo);
        break;
      case '+':
        result = Number(numOne) + Number(numTwo);
        break;
      case '-':
        result = Number(numOne) - Number(numTwo);
        break;
      default:
        break;
    }
    entry.textContent = result;
  }
}







clear.addEventListener('click', function() {

});

// function operatorInput(event) {
//   var value = event.target.textContent;
//   // if(value == '+')
// };
// }

// for(var x = 0; x < entry.length; x++) {
//     operator[x].addEventListener('click', function(event) {
//       var value = this.textContent;
//       entry.textContent = 5;
//     });
//
// }


// myButton.addEventListener('click', function(event) {
//   console.log(event.target.textContent);
// });


}());

// var num1, num2, operator;
// var value = num1 operator num2

// if(operator === '/') {
//   return num1 / num2
// } else if (operator === '*') {
//   return num1 / num2
// }

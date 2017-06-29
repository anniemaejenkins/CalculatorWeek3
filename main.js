(function(){
  'use strict';

// selects all elements with class name
var number = document.querySelectorAll(".number");
var clear = document.querySelector(".clear");
var entry = document.querySelectorAll(".calculation");
var operator = document.querySelectorAll(".operator");
// var divide = document.querySelectorAll(".divide");
// var multiply = document.querySelectorAll(".multiply");
// var subtract = document.querySelectorAll(".subtract");
// var add = document.querySelectorAll(".add");
var decimal = document.querySelector(".decimal");
var equal = document.querySelector(".equal");

for(var i = 0; i < number.length; i++){
  number[i].addEventListener('click', myfunction);
}

clear.addEventListener('click', function() {

});

// function operatorInput(event) {
//   var value = event.target.textContent;
//   // if(value == '+')
// };
// }
for(var i = 0; i < entry.length. i++) {
    entry[i].addEventListener('click', function(event) {
      var value = this.textContent;
      entry.textContent += value;
    }
    });
};

function myfunction(event) {
  event.preventDefault();
  console.log(this.textContent);
}
// myButton.addEventListener('click', function(event) {
//   console.log(event.target.textContent);
// });


}());

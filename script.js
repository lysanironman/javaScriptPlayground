console.log("Fundamentals Part I")
let num1 = 10;
let num2 = 50;
console.log("Multiplying with a let variable:" + (9 * num1));
console.log("Raising a variable by the power of 3:" + (num1 ** 3));
console.log("Dividing num2(50) by num1(10):" + (num2 / num1));
let num3 = 77;
console.log("Building complex computations with a number and three variables:"+((4+num1+num2)/num3));
console.log("Further Examples for FPtI");
let a = 10;
console.log(9 * a);
let b = 7 * a;
console.log(b);
//You should be getting the hang of this by now… try this sequence
let max = 57
let actual = max - 13
let percentage = actual / max
console.log(percentage);
console.log("Fundamentals Part II");
const button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('What is your name?');
  alert('Hello ' + name + ', welcome to the JavaScript Playground!');
}
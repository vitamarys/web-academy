// 1 input data
// 2 calculations
// 3 print|output
let trigger = document.querySelector("button.trigger");
let result = 0; // глобальные переменные!
function getOperand(message) {
  // message - параметр
  let operand = parseInt(prompt(message));
  while (isNaN(operand)) {
    operand = parseInt(prompt(message));
  }
  return operand;
}
function calculate(a, b) {
  console.log("PARAMS IN CALCULATE", a, b);
  let operator;
  do {
    operator = prompt("Eneter operator");
    if (operator === "+" || operator === "-") {
      break;
    }
  } while (true);
  if (operator === "+") {
    result = a + b;
  } else if (operator === "-") {
    result = a - b;
  }
}
function output() {
  alert("RESULT IS: " + result);
}
// manager
function calculator() {
  let a = getOperand("Enter A");
  let b = getOperand("Enetr B"); // local перемнные
  let data = calculate(a, b); // вызов функции
  output(data);
}
trigger.addEventListener("click", calculator);

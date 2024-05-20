
var a = document.getElementById("display");
function appendToDisplay(value) {
  a.value += value;
}
function clearDisplay() {
  a.value = "";
}
function backspace() {
  a.value = a.value.substring(0, a.value.length - 1);
}
function calculate(value) {
  a.value = eval(a.value);
}

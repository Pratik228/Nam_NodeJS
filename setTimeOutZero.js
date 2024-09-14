console.log("hello World");

setTimeout(() => {
  console.log("Timeout for 0 seconds");
}, 0);

setTimeout(() => {
  console.log("Timeout for 5 seconds");
}, 5000);

var a = 14824294;
var b = 234626246;

function multiply(a, b) {
  const result = a * b;
  return result;
}

var c = multiply(a, b);

console.log("result it:", c);

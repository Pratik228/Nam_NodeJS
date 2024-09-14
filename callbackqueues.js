const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf8", () => {
  console.log("File reading CB");
});

setTimeout(() => console.log("Timer expired"), 0);

setImmediate(() => console.log("setImmediate2"));

function printA() {
  console.log("a=", a);
}

printA();
console.log("last line of the file");

// a 100, last line of the file, timer expired, File reading CB, setImmediate

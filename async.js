const fs = require("fs");

const https = require("https");
const crypto = require("crypto");

console.log("hello World");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched data");
});

setTimeout(() => {
  console.log("Timeout for 5 seconds");
}, 5000);

fs.readFileSync("./file.txt", "utf-8", (err, data) => {
  console.log("sync call");
});

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("Fetched file content", data);
  if (err) {
    console.log("Error:", err);
  }
});

crypto.pbkdf2Sync("password", "salt", 50000000, 50, "sha512");
console.log("First Key is generated");

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("Key is generated");
});

var a = 14824294;
var b = 234626246;

function multiply(a, b) {
  const result = a * b;
  return result;
}

var c = multiply(a, b);

console.log("result it:", c);

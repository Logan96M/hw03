// DOM elements
const resultEL = document.getElementById(`result`);
const lengthEL = document.getElementById(`length`);
const uppercaseEL = document.getElementById(`uppercase`);
const lowercaseEL = document.getElementById(`lowercase`);
const numbersEL = document.getElementById(`numbers`);
const symbolsEL = document.getElementById(`symbols`);
var generateEL = document.getElementById(`generate`);
const clipboardEL = document.getElementById(`clipboard`);


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}; // Generator functions http://www.net-comber.com/charset.html


generateEL.addEventListener
('click', () => { 
  const length = lengthEL.value;

  console.log(length);}
);

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
} // 26 letters in the alphabet. 97ASCII characters  a

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
} // 26 letters in the alphabet. 65 ASCII characters A

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
} // 0-9 # 0 & ASCII 48 is character 0

function getRandomSymbol() {
  const symbols = '!@#$%[]^&*()_+-={}';
  //return symbols [0] // Returns first char
  return symbols[Math.floor(Math.random() * symbols.length)];
  //returns value of [math.random * symbols length]
}


// console.log(getRandomLower());
// console.log(getRandomUpper());
// console.log(getRandomNumber());
// console.log(getRandomSymbol());




// console.log(String.fromCharCode(98))
// obtains specific characters based on their ASCII code(b)


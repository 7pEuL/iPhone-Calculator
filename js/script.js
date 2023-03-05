// DOM Elements
const numbers = document.querySelectorAll(".numbers");
const result = document.querySelector(".result");
const signs = document.querySelectorAll(".sign");
const clear = document.querySelector(".clear");
const negative = document.querySelector(".negative");
const equals = document.querySelector(".equals");
const percent = document.querySelector(".percent");
const zero = document.querySelector(".unitZero");

// Variables
let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

// Functions
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    let atr = e.target.getAttribute("value");
    if (isFirstValue === false) {
      getFirstValue(atr);
    }
    if (isSecondValue === false) {
      getSecondValue(atr);
    }
  });
}

function getFirstValue(el) {
  result.innerHTML = "";
  firstValue += el;
  result.innerHTML = firstValue;
  firstValue = +firstValue;
}

function getSecondValue(el) {
  if (firstValue != "" && sign != "") {
    secondValue += el;
    result.innerHTML = secondValue;
    secondValue = +secondValue;
  }
}

function getSign() {
  for (let i = 0; i < signs.length; i++) {
    signs[i].addEventListener("click", (e) => {
      sign = e.target.getAttribute("value");
      isFirstValue = true;
    });
  }
}
getSign();

equals.addEventListener("click", () => {
  result.innerHTML = "";
  if (sign === "+") {
    resultValue = firstValue + secondValue;
  } else if (sign === "-") {
    resultValue = firstValue - secondValue;
  } else if (sign === "x") {
    resultValue = firstValue * secondValue;
  } else if (sign === "/") {
    resultValue = firstValue / secondValue;
  }
  result.innerHTML = resultValue;
  firstValue = resultValue;
  secondValue = "";
});

function CheckResultLength() {
  resultValue = JSON.stringify(resultValue);

  if (resultValue.length >= 8) {
    resultValue = JSON.parse(resultValue);
    result.innerHTML = resultValue.toFixed(5);
  }
}

// Add Event Listeners to functions
// Add event listeners to operators
// Add Event Listeners to numbers and decimal
negative.addEventListener("click", () => {
  result.innerHTML = "";
  if (firstValue != "") {
    resultValue = -firstValue;
    firstValue = resultValue;
  }
  if (firstValue != "" && secondValue != "" && sign != "") {
    resultValue = -firstValue;
  }
  result.innerHTML = resultValue;
});

percent.addEventListener("click", () => {
  result.innerHTML = "";
  if (firstValue != "") {
    resultValue = firstValue / 100;
    firstValue = resultValue;
  }
  if (firstValue != "" && secondValue != "" && sign != "") {
    resultValue = firstValue / 100;
  }
  result.innerHTML = resultValue;
});

clear.addEventListener("click", () => {
  result.innerHTML = 0;

  firstValue = "";
  isFirstValue = false;
  secondValue = "";
  isSecondValue = false;
  sign = "";
  resultValue = 0;
});

// console.log(new Date().toUTCString().slice(17, 22));

// Set up the time
// DOM Elements
const digital = document.querySelector(".digitalClock");

// Functions
const updateTime = () => {
  const currentTime = new Date();
  let digitalClock = currentTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  digital.textContent = digitalClock;
};
setInterval(updateTime, 1000);
updateTime();

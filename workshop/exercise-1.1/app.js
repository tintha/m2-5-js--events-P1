// Exercise 1.1
// ------------
console.log("exercise 1.1");

let body = document.getElementsByTagName("body");
let headline = document.createElement("h1");
headline.style.fontFamily = "Georgia, Times New Roman, Times, Serif";
headline.style.textAlign = "center";
headline.style.padding = "20px";
headline.innerText = "Be a quicker clicker!";
document.body.prepend(headline);
let result = document.getElementById("result");
result.style.textAlign = "center";

let clicked = false;

document.body.addEventListener("click", () => {
  clicked = true;
});

let clickTimeOut = setTimeout(() => {
  if (clicked == true) {
    clearTimeout(clickTimeOut);
    result.innerText = "You WON!";
    console.log("YOU WON!");
  } else {
    console.log("YOU LOST!");
    result.innerText = "You LOST!";
  }
}, 1000);

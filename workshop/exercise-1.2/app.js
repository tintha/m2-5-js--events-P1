// Exercise 1.2
// ------------
console.log("exercise 1.2");

let body = document.getElementsByTagName("body");

let clicked = false;

let randomNum = Math.floor(Math.random() * 5) + 1;
console.log(`${randomNum} sec`);

let displayTime = document.getElementById("time");
displayTime.style.color = "red";
displayTime.style.fontWeight = "bold";
displayTime.innerHTML = randomNum;

let p1 = document.querySelector(".time-text");
p1.style.fontSize = "2rem";

let p2 = document.querySelector("#result");
p2.style.fontSize = "2rem";
p2.style.color = "blue";

function clickGame() {
  let result = document.getElementById("result");
  const timeOut = setTimeout(() => {
    if (clicked == true) {
      result.innerText = "You WIN!";
      console.log("You win!");
      clearTimeout(timeOut);
    } else {
      result.innerText = "You LOST!";
      console.log("You lost!");
    }
  }, randomNum * 1000);
}

clickGame();

document.body.addEventListener("click", () => {
  clicked = true;
});

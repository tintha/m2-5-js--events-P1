// Exercise 2.4
//
//- on load, there is only a 'Start' button
//- clicking on the start button
//  - deletes the button
//  - creates a random number of buttons on the screen.
//- These buttons need to all be clicked within a given amount of time.
// If the user is successful, show a congratulatory message! They've won the game!!
// ### Note
//- Once the user clicks all of the buttons, the game ends.
//- Once the game ends, the buttons no longer change change color (remove the event listeners).
// ### B-E-A-U-TIFUL
//Don't forget to take some time to make it pretty.

console.log("Exercise 2.4");

let main = document.getElementById("main");
main.style.textAlign = "center";
main.style.padding = "20px";

// window dimensions
let intViewportWidth = window.innerWidth - 100;
let intViewportHeight = window.innerHeight - 100;

let topDiv = document.createElement("div");
main.appendChild(topDiv);

let startButton = document.createElement("button");
startButton.style.outline = "none";
startButton.style.border = "none";
startButton.style.backgroundColor = "#5c5d5e";
startButton.style.color = "white";
startButton.style.padding = "20px";
startButton.style.borderRadius = "5px";
startButton.style.fontSize = "3rem";
startButton.style.fontFamily = "'Poppins', sans-serif";
startButton.style.fontWeight = "bold";
startButton.innerText = "Start";
topDiv.appendChild(startButton);

let gameInfo = document.createElement("div");
let gameInfoText = document.createElement("p");
gameInfoText.style.fontSize = "2rem";
gameInfoText.style.fontFamily = "'Poppins', sans-serif";
gameInfoText.style.position = "absolute";
gameInfoText.style.zIndex = "1000";
gameInfoText.style.backgroundColor = "#white";
gameInfoText.style.borderRadius = "3px";
gameInfoText.style.color = "#5c0010";
gameInfo.appendChild(gameInfoText);
main.appendChild(gameInfo);

startButton.addEventListener("click", () => {
  console.log("Start button clicked");
  startButton.style.display = "none";
  generateRandomButtons();
});

function generateRandomButtons() {
  // random timeout 1 to 10 seconds
  let randomTimeOut = Math.floor(Math.random() * 10) + 1;
  console.log(`TimeOut ${randomTimeOut} sec`);

  // generate number between 1 and 20
  let randomNumButtons = Math.floor(Math.random() * (21 - 1) + 1);
  console.log(randomNumButtons);

  // display timeout and number of buttons
  let addS = "s";
  if (randomTimeOut == 1) {
    addS = "";
  }
  gameInfoText.innerHTML = `${randomTimeOut} second${addS}`;

  // the loop that will generate the buttons
  for (let i = 1; i <= randomNumButtons; i++) {
    let redButton = document.createElement("button");
    redButton.className = "red-buttons";
    redButton.style.backgroundColor = "red";
    redButton.style.left = `${Math.random() * intViewportWidth}px`;
    redButton.style.top = `${Math.random() * intViewportHeight}px`;
    redButton.style.position = "absolute";
    redButton.style.width = "100px";
    redButton.style.height = "100px";
    redButton.style.borderRadius = "50%";
    redButton.style.outline = "none";
    redButton.style.color = "white";
    redButton.style.fontSize = "3rem";
    redButton.style.border = "none";
    redButton.style.cursor = "pointer";
    redButton.id = i;

    // add number inside the buttons
    redButton.innerText = i;

    //add event listener
    redButton.addEventListener("click", greenBackground);

    // append the buttons to the gaming board
    gameInfo.appendChild(redButton);
  }

  // timeout
  const timeOut = setTimeout(function () {
    let gameOver = false;
    let buttonList = document.querySelectorAll(".red-buttons");
    let buttonArray = [...buttonList];

    if (
      buttonArray.every((button) => button.style.backgroundColor == "green")
    ) {
      console.log("You WON");

      gameInfoText.innerText = "CONGRATULATIONS!!! YOU WON!!!";
      for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].removeEventListener("click", greenBackground);
      }

      clearTimeout(timeOut);
    } else {
      gameInfoText.innerText = "YOU LOST";
      console.log("You LOST");
      for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].removeEventListener("click", greenBackground);
      }
    }
  }, randomTimeOut * 1000);
}

function greenBackground() {
  this.style.backgroundColor = "green";
  console.log(this.id);
}

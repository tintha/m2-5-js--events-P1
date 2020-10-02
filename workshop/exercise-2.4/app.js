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
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.flexDirection = "column";
main.style.alignItems = "center";

let topDiv = document.createElement("div");
topDiv.style.height = "100px";
main.appendChild(topDiv);

let startButton = document.createElement("button");
startButton.style.outline = "none";
startButton.style.border = "none";
startButton.style.backgroundColor = "#5c5d5e";
startButton.style.color = "white";
startButton.style.padding = "20px";
startButton.style.marginTop = "10px";
startButton.style.borderRadius = "5px";
startButton.style.fontSize = "2rem";
startButton.style.fontWeight = "bold";
startButton.innerText = "Start";
topDiv.appendChild(startButton);

let gameInfoText = document.createElement("button");
gameInfoText.style.outline = "none";
gameInfoText.style.border = "none";
gameInfoText.style.backgroundColor = "#5c5d5e";
gameInfoText.style.color = "white";
gameInfoText.style.padding = "20px";
gameInfoText.style.marginTop = "10px";
gameInfoText.style.borderRadius = "5px";
gameInfoText.style.fontSize = "2rem";
gameInfoText.style.fontWeight = "bold";
gameInfoText.style.display = "none";
topDiv.appendChild(gameInfoText);

let gameBox = document.createElement("div");
gameBox.style.width = "800px";
gameBox.style.height = "500px";
gameBox.style.backgroundColor = "#F8F8FF";
gameBox.style.position = "relative";
gameBox.style.borderRadius = "5px";
gameBox.style.border = "1px solid #708090";
main.appendChild(gameBox);

startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  gameInfoText.style.display = "block";
  generateRandomButtons();
});

function generateRandomButtons() {
  // random timeout 1 to 10 seconds
  let randomTimeOut = Math.floor(Math.random() * 10) + 1;
  console.log(`TimeOut is ${randomTimeOut} sec`);

  // countdown
  const countdown = setInterval(function () {
    gameInfoText.innerText = `sec`;
    let secs = (randomTimeOut -= 1);
    gameInfoText.innerText = `${secs}`;
    if (secs <= 0) {
      clearInterval(countdown);
    }
  }, 1000);

  gameInfoText.innerText = randomTimeOut;
  // generate number between 1 and 20
  let randomNumButtons = Math.floor(Math.random() * (21 - 1) + 1);
  console.log(`${randomNumButtons} buttons`);

  // the loop that will generate the buttons
  for (let i = 1; i <= randomNumButtons; i++) {
    let redButton = document.createElement("button");
    redButton.className = "red-buttons";
    redButton.style.backgroundColor = "red";
    redButton.style.left = `${Math.random() * 700}px`;
    redButton.style.top = `${Math.random() * 400}px`;
    redButton.style.position = "absolute";
    redButton.style.width = "60px";
    redButton.style.height = "60px";
    redButton.style.borderRadius = "50%";
    redButton.style.outline = "none";
    redButton.style.color = "white";
    redButton.style.fontSize = "1rem";
    redButton.style.border = "none";
    redButton.style.cursor = "pointer";
    redButton.id = i;

    // add number inside the buttons
    redButton.innerText = i;

    //add event listener
    redButton.addEventListener("click", greenBackground);

    // append the buttons to the gaming board
    gameBox.appendChild(redButton);
  }

  // timeout
  const timeOut = setTimeout(function () {
    let gameOver = false;
    let buttonList = document.querySelectorAll(".red-buttons");
    let buttonArray = [...buttonList];

    if (
      buttonArray.every((button) => button.style.backgroundColor == "green")
    ) {
      console.log("WON");
      gameInfoText.style.backgroundColor = "green";
      gameInfoText.innerText = "CONGRATULATIONS!!! YOU WIN!!!";
      for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].removeEventListener("click", greenBackground);
      }

      clearTimeout(timeOut);
    } else {
      gameInfoText.style.backgroundColor = "red";
      gameInfoText.innerText = "SORRY, YOU LOSE!";
      console.log("LOST");
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

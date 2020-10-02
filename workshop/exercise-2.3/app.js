// Exercise 2.3
// Place 20 random buttons that toggle from red to green
// Place them at random positions on the screen
// HINT: you can use position: absolute, top, and left
// HINT: you can use inline styles (eg. node.style.position = 'absolute')
console.log("Exercise 2.3");

// get window dimensions
let intViewportWidth = window.innerWidth - 100;
let intViewportHeight = window.innerHeight - 100;

// container for the main div
let main = document.getElementById("main");

// create 20 circles
for (let i = 1; i <= 20; i++) {
  let circle = document.createElement("button");
  circle.className = "red-circles";
  circle.style.backgroundColor = "red";
  circle.style.height = "60px";
  circle.style.width = "60px";
  circle.style.borderRadius = "50%";
  circle.style.position = "absolute";
  circle.style.left = `${Math.random() * intViewportWidth}px`;
  circle.style.top = `${Math.random() * intViewportHeight}px`;
  circle.style.color = "white";
  circle.style.border = "1px white solid";
  circle.style.outline = "none";
  circle.innerText = i;
  main.appendChild(circle);
}

// click handlers
let circleList = document.querySelectorAll(".red-circles");
for (let j = 0; j < circleList.length; j++) {
  circleList[j].addEventListener("click", () => {
    if (circleList[j].style.backgroundColor == "red") {
      circleList[j].style.backgroundColor = "green";
    } else {
      circleList[j].style.backgroundColor = "red";
    }
  });
}

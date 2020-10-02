// exercise 2.2
// Write an app that generates 20 red buttons.
// When the user clicks a red button it shoul become green and vice versa.
console.log("Exercise 2.2");

let main = document.getElementById("main");
main.style.display = "flex";
main.style.flexFlow = "wrap";
main.style.justifyContent = "center";

for (let i = 1; i <= 20; i++) {
  let square = document.createElement("button");
  square.id = i;
  square.className = "red-square";
  square.style.backgroundColor = "red";
  square.style.height = "100px";
  square.style.width = "100px";
  square.style.border = "1px solid white";
  square.style.outline = "none";
  square.style.fontWeight = "bold";
  square.style.fontSize = "2rem";
  square.style.color = "white";
  square.innerText = i;
  main.appendChild(square);
}

// click handlers
let squareList = document.querySelectorAll(".red-square");
for (let j = 0; j < squareList.length; j++) {
  squareList[j].addEventListener("click", () => {
    if (squareList[j].style.backgroundColor == "red") {
      squareList[j].style.backgroundColor = "green";
    } else {
      squareList[j].style.backgroundColor = "red";
    }
  });
}

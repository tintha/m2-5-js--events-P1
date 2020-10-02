// exercise 2.1
// Write an app that generates 20 red buttons.
// When the user clicks a button it shoul become green.
console.log("Exercise 2.1");

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
  square.style.outline = "none";
  square.style.border = "1px solid white";
  square.style.color = "white";
  square.style.fontSize = "1.5rem";
  square.style.fontWeight = "bold";
  square.innerText = i;
  main.appendChild(square);
}

// click handler for each square
let squareList = document.querySelectorAll(".red-square");
for (let j = 0; j < squareList.length; j++) {
  squareList[j].addEventListener("click", () => {
    squareList[j].style.backgroundColor = "green";
  });
}

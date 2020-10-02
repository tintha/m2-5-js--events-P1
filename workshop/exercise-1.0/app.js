// Exercise 1.0
// ------------
console.log("exercise-1");

let body = document.getElementsByTagName("body");
let main = document.getElementById("main");
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.marginTop = "200px";
let helloMessage = document.createElement("h1");
main.appendChild(helloMessage);

document.body.addEventListener("click", function () {
  helloMessage.innerText = "Oh, hello!";
});

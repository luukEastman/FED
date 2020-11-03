// JavaScript Document
console.log("hallo");
var deButton = document.querySelector("button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  document.body.classList.toggle("toonMenu");
  if(body.class=="toonmenu"){
    deButton.textContent = "X";
  }
}

var allButtons = document.querySelectorAll(".drum");

for (i = 0; i < allButtons.length; i += 1) {
  allButtons[i].addEventListener("click", handleClick);
}

function handleClick() {
  var audio = new Audio("./sounds/tom-1.mp3");
  audio.play();
}

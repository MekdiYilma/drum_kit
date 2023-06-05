var allButtons = document.querySelectorAll(".drum");

for (i = 0; i < allButtons.length; i += 1) {
  allButtons[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

var soundDict = {
  w: "crash",
  a: "kick",
  s: "snare",
  d: "tom-1",
  j: "tom-2",
  k: "tom-3",
  l: "tom-4",
};

function makeSound(key) {
  var sound = soundDict[key];
  var audio = new Audio("./sounds/" + sound + ".mp3");
  audio.play();
}

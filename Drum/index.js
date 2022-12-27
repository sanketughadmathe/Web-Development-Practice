var audio = new Audio('sounds/crash.mp3');
audio.play();

for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
  const element = document.querySelectorAll(".drum")[index];
  document.querySelectorAll(".drum")[index].addEventListener("click", function () {
    audio.play();
  })
}
let box = document.querySelectorAll(".box");
let announce = document.querySelector(".announcement");
let newgame = document.getElementById("new-game");
let resetgame = document.getElementById("reset-game");
let music = document.getElementById("music");
console.log(music);
window.addEventListener("load", songFunction);

// music.addEventListener("load", songFunction );
let bgmusic = new Audio("JKL83NH-video-game-win.mp3");
function songFunction() {
  console.log("Music is loaded");
  bgmusic.play();
  bgmusic.loop = true;
}

let winMusic = new Audio("Winning_Message.mp3");
let turnMusic = new Audio("Turn_Music.wav");
let turn = "X";

box.forEach((elm) => {
  elm.addEventListener("click", function () {
    console.log("Box is clicked");
    if (turn === "X") {
      elm.innerText = "X";
      turn = "O";
      elm.disabled = true;
    } else {
      elm.innerText = "O";
      turn = "X";
      elm.disabled = true;
    }
    checkWinner();
    turnMusic.play();
  });
});

let winningsPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const checkWinner = () => {
  for (let pattern of winningsPatterns) {
    // Process
    /*console.log(pattern[0],pattern[1],pattern[2]);
        console.log(box[pattern[0]],box[pattern[1]],box[pattern[2]]);
        console.log(box[pattern[0]].innerText,box[pattern[1]].innerText,box[pattern[2]].innerText);*/

    let posVal1 = box[pattern[0]].innerText;
    let posVal2 = box[pattern[1]].innerText;
    let posVal3 = box[pattern[2]].innerText;

    // console.log(posVal1,posVal2,posVal3);

    if (posVal1 !== "" && posVal2 !== "" && posVal3 !== "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        console.log("Winner");
        announce.innerHTML = `Congratulations! Winner is ${posVal1}`;
        announce.classList.remove("hide");
        disabledButton();
        winMusic.play();
        bgmusic.pause();
      }
    }
  }
};
const disabledButton = () => {
  box.forEach((elm) => {
    elm.disabled = true;
  });
};
const resetGame = () => {
  turn = "X";
  box.forEach((elm) => {
    elm.disabled = false;
    elm.innerText = "";
  });
  announce.classList.add("hide");
  bgmusic.play();
};

resetgame.addEventListener("click", resetGame);
newgame.addEventListener("click", resetGame);

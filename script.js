// perya color

const colors = ["yellow", "white", "pink", "blue", "red", "green"];

const peryaGame = () => {
  appendRandomColor();
};

const ropeBtn = document.querySelector(".rope");

ropeBtn.addEventListener("click", peryaGame);

const appendRandomColor = () => {
  const random1 = Math.floor(Math.random() * colors.length);
  const random2 = Math.floor(Math.random() * colors.length);
  const random3 = Math.floor(Math.random() * colors.length);

  const box1 = document.querySelector("#box-one");
  const box2 = document.querySelector("#box-two");
  const box3 = document.querySelector("#box-three");
  // adding the color-shuffling animation to the three box
  box1.classList.add(`shuffle1`);
  box2.classList.add(`shuffle2`);
  box3.classList.add(`shuffle3`);

  setTimeout(() => {
    box1.classList.remove(`shuffle1`);
    box2.classList.remove(`shuffle2`);
    box3.classList.remove(`shuffle3`);
    box1.classList.add(`color-${colors[random1]}`);
    box2.classList.add(`color-${colors[random2]}`);
    box3.classList.add(`color-${colors[random3]}`);
  }, 2000);

  setTimeout(() => {
    box1.classList.remove(`color-${colors[random1]}`);
    box2.classList.remove(`color-${colors[random2]}`);
    box3.classList.remove(`color-${colors[random3]}`);
  }, 4500);
  // console.log(colors[random1], colors[random2], colors[random3]);

  // appending the text value for text-result container h2
  setTimeout(() => {
    const val1 = document.querySelector("#val1");
    const val2 = document.querySelector("#val2");
    const val3 = document.querySelector("#val3");

    val1.textContent = colors[random1];
    val2.textContent = colors[random2];
    val3.textContent = colors[random3];
    val1.style.backgroundColor = colors[random1];
    val2.style.backgroundColor = colors[random2];
    val3.style.backgroundColor = colors[random3];
  }, 2200);
};

// Function for handling bets and updating credits
const creditComputation = () => {
  const credit = document.querySelector("#credit");
  const boards = document.querySelectorAll(".color-board");
  let creditAmount = 100;

  // auidios
  const soundY = document.querySelector("#sound-yellow");
  const soundW = document.querySelector("#sound-white");
  const soundP = document.querySelector("#sound-pink");
  const soundB = document.querySelector("#sound-blue");
  const soundR = document.querySelector("#sound-red");
  const soundG = document.querySelector("#sound-green");

  let bets = { y: 0, w: 0, p: 0, b: 0, r: 0, g: 0 }; // Object to track bets on each board

  boards.forEach((board) => {
    board.addEventListener("click", () => {
      if (board.id == "yellow") {
        soundY.currentTime = 0; // Rewind to start
        soundY.play();
      } else if (board.id == "white") {
        soundW.currentTime = 0; // Rewind to start
        soundW.play();
      } else if (board.id == "pink") {
        soundP.currentTime = 0; // Rewind to start
        soundP.play();
      } else if (board.id == "blue") {
        soundB.currentTime = 0; // Rewind to start
        soundB.play();
      } else if (board.id == "red") {
        soundR.currentTime = 0; // Rewind to start
        soundR.play();
      } else {
        soundG.currentTime = 0; // Rewind to start
        soundG.play();
      }
    });
  });
  credit.textContent = creditAmount;
};
creditComputation();

// for my sound button
const onSoundBtn = document.querySelector(".vol");
let counterSound = 0;

onSoundBtn.addEventListener("click", () => {
  let bgAudio = document.querySelector("#bg-audio");
  if (counterSound % 2 == 0) {
    onSoundBtn.style.backgroundColor = "#4fec4f";
    bgAudio.play();
    counterSound++;
  } else {
    onSoundBtn.style.backgroundColor = "#d5dad5";
    bgAudio.pause();
    counterSound++;
  }
});

// boards.forEach((board) => {
//   board.addEventListener("click", () => {
//     const color = board.style.backgroundColor;
//     if (creditAmount > 0) {
//       bets[color] = (bets[color] || 0) + 5;

//       let betDisplay = board.querySelector(".bet-display");
//       if (!betDisplay) {
//         betDisplay = document.createElement("span");
//         betDisplay.classList.add("bet-display");
//         board.appendChild(betDisplay);
//       }
//       betDisplay.textContent = bets[color];

//       creditAmount -= 5;
//       credit.textContent = creditAmount;
//     } else {
//       alert("ZERO CREDIT");
//     }
//   });
// });
// console.log(bets);

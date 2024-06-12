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
  const boardUnclick = document.querySelector(".div-unclick");

  // let onBet = 0;
  let bets = { y: 0, w: 0, p: 0, b: 0, r: 0, g: 0 };
  let by = 0;
  let bw = 0;
  let bp = 0;
  let bb = 0;
  let br = 0;
  let bg = 0;

  boards.forEach((board) => {
    let creditAmount = 100;

    board.addEventListener("click", () => {
      if (board.id == "yellow") {
        by = bets.y += 5;
        board.textContent = bets.y;
        by += bets.y + 5;
      } else if (board.id == "white") {
        bw = bets.w += 5;
        board.textContent = bets.w;
        bw += bets.w + 5;
      } else if (board.id == "pink") {
        bp = bets.p += 5;
        board.textContent = bets.p;
        bp += bets.p + 5;
      } else if (board.id == "blue") {
        bb = bets.b += 5;
        board.textContent = bets.b;
        bb += bets.b + 5;
      } else if (board.id == "red") {
        br = bets.r += 5;
        board.textContent = bets.r;
        br += bets.r + 5;
      } else {
        bg = bets.g += 5;
        board.textContent = bets.g;
        bg += bets.g + 5;
      }

      const sum = Object.values(bets).reduce(
        (total, value) => total + value,
        0
      );

      credit.textContent = creditAmount - sum;
      if (credit.textContent == 0) {
        alert("paload ka muna!");
        boardUnclick.style.display = "flex";
      } else {
        boardUnclick.style.display = "none";
      }
    });
  });
};

creditComputation();

// for my sound button
const onSoundBtn = document.querySelector(".vol");
let counterSound = 0;

onSoundBtn.addEventListener("click", () => {
  let bgAudio = document.querySelector("#bg-audio");
  if (counterSound % 2 == 0) {
    onSoundBtn.style.backgroundColor = "#4fec4f";
    bgAudio.currentTime = 0; // Rewind to start
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

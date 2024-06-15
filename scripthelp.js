const colors = ["yellow", "white", "pink", "blue", "red", "green"];
const credit = document.querySelector("#credit");
const boardUnclick = document.querySelector(".div-unclick");
let creditAmount = 100;

const peryaGame = () => {
  appendRandomColor();

  const betsComputations = () => {
    // Select the elements containing the results and boards
    const colorValues = document.querySelectorAll(".val");
    const boards = document.querySelectorAll(".color-board");

    // Array to store the winning colors
    let winningColors = [];
    let totalWin = [];
    const plussWinnings = document.querySelector(".pluss-winning");

    // Collect the winning colors
    colorValues.forEach((val) => {
      setTimeout(() => {
        winningColors.push(val.textContent.toLowerCase());
      }, 2300);
    });

    setTimeout(() => {
      // Count occurrences of each winning color
      let colorCounts = winningColors.reduce((acc, color) => {
        acc[color] = (acc[color] || 0) + 1;
        return acc;
      }, {});

      // Iterate through the boards to calculate winnings
      boards.forEach((board) => {
        const boardColor = board.id;
        if (colorCounts[boardColor]) {
          const betValue = parseInt(board.textContent) || 0;
          const winAmount = betValue * colorCounts[boardColor];
          totalWin.push(winAmount);
        }
      });

      // Resetting the board
      setTimeout(() => {
        boards.forEach((board) => {
          board.textContent = "";
        });
      }, 2500);

      // Sum up the total winnings
      let totalSum = totalWin.reduce((a, b) => a + b, 0);
      if (totalSum > 0) {
        plussWinnings.style.display = "flex";
        plussWinnings.textContent = `+ ${totalSum}`;
      } else {
        plussWinnings.style.display = "none";
      }

      setTimeout(() => {
        plussWinnings.style.display = "none";
      }, 2400);

      // Update the credit points
      creditAmount += totalSum;
      credit.textContent = creditAmount;
      totalWin = []; // Reset totalWin for next round
    }, 2400);
  };

  setTimeout(() => {
    if (credit.textContent > 0) {
      boardUnclick.style.display = "none";
    }
  }, 2500);

  betsComputations();
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
  const boards = document.querySelectorAll(".color-board");

  // Bets object to store the current bet values
  let bets = { y: 0, w: 0, p: 0, b: 0, r: 0, g: 0 };

  boards.forEach((board) => {
    board.addEventListener("click", () => {
      if (creditAmount >= 5) {
        // Check if sufficient credit is available
        let boardId = board.id;
        bets[boardId[0]] += 5; // Add 5 to the respective color bet
        board.textContent = bets[boardId[0]];

        const sum = Object.values(bets).reduce(
          (total, value) => total + value,
          0
        );

        creditAmount -= 5; // Deduct 5 from credit for each click
        credit.textContent = creditAmount;

        if (creditAmount > 0) {
          boardUnclick.style.display = "none";
        } else {
          alert("paload ka muna!");
          boardUnclick.style.display = "flex";
        }
      } else {
        alert("Insufficient credit!");
      }
    });
  });
};

creditComputation();

const playSound = () => {
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
};

playSound();

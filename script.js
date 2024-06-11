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

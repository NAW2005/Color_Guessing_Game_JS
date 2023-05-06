const colorName = document.querySelector(".colorName");
const colors = [];
const squares = document.querySelectorAll(".square");
const playAgainbtn = document.querySelector(".playAgainbtn");

for (let i = 0; i < 9; i++) {
  colors.push(
    `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )} , ${Math.floor(Math.random() * 256)})`
  );
}

squares.forEach((square, i) => {
  square.style.backgroundColor = colors[i];
  square.setAttribute("color", colors[i]);
});

const valueForGuess = colors[Math.floor(Math.random() * 9)];
colorName.textContent = valueForGuess;

squares.forEach((square) => {
  square.addEventListener("click", (event) => {
    const squareColor = event.target.getAttribute("color");

    if (squareColor === valueForGuess) {
      squares.forEach(
        (square) => (square.style.backgroundColor = valueForGuess)
      );
    } else {
      square.style.backgroundColor = "#0C1722";
    }
  });
});

playAgainbtn.addEventListener("click", () => {
  location.reload();
});

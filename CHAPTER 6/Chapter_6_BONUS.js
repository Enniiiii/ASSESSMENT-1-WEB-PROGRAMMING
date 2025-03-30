const rgbValueElement = document.getElementById("rgb-value");
const optionsContainer = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const livesElement = document.getElementById("lives");
const replayButton = document.getElementById("replay");

let score = 0;
let lives = 3;

// Generate a random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b };
}

// Start a new round
function startRound() {
  feedbackElement.textContent = "";
  const correctColor = getRandomColor();
  rgbValueElement.textContent = `RGB(${correctColor.r}, ${correctColor.g}, ${correctColor.b})`;

  // Generate three color options
  const options = [correctColor];
  while (options.length < 3) {
    const randomColor = getRandomColor();
    if (
      !options.some(
        (color) =>
          color.r === randomColor.r &&
          color.g === randomColor.g &&
          color.b === randomColor.b
      )
    ) {
      options.push(randomColor);
    }
  }

  // Shuffle the options
  options.sort(() => Math.random() - 0.5);

  // Display the options
  optionsContainer.innerHTML = "";
  options.forEach((color) => {
    const button = document.createElement("button");
    button.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
    button.addEventListener("click", () => handleGuess(color, correctColor));
    optionsContainer.appendChild(button);
  });
}

// Handle the user's guess
function handleGuess(selectedColor, correctColor) {
  if (
    selectedColor.r === correctColor.r &&
    selectedColor.g === correctColor.g &&
    selectedColor.b === correctColor.b
  ) {
    feedbackElement.textContent = "Correct!";
    feedbackElement.style.color = "green";
    score++;
    scoreElement.textContent = score;
  } else {
    feedbackElement.textContent = "Wrong!";
    feedbackElement.style.color = "red";
    lives--;
    livesElement.textContent = lives;
    if (lives === 0) {
      endGame();
      return;
    }
  }
  startRound();
}

// End the game
function endGame() {
  feedbackElement.textContent = `Game Over! Final Score: ${score}`;
  feedbackElement.style.color = "White";
  optionsContainer.innerHTML = "";
  replayButton.style.display = "block";
}

// Replay the game
replayButton.addEventListener("click", () => {
  score = 0;
  lives = 3;
  scoreElement.textContent = score;
  livesElement.textContent = lives;
  replayButton.style.display = "none";
  startRound();
});

// Start the first round
startRound();

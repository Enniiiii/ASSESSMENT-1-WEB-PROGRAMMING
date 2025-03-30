const buttons = document.querySelectorAll(".sound-btn");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const soundBoard1 = document.getElementById("btn-wrapper");
const soundBoard2 = document.getElementById("btn-wrapper-2");
const soundFiles = [
  "ah-ha",
  "back-of-the-net",
  "bangoutoforder",
  "dan",
  "emailoftheevening",
  "hellopartridge",
  "iateascotchegg",
  "imconfused",
  "Bruh sound effect",
  "Wiwiwi Cat meme",
  "Flint and Steel",
  "Frog Laughing",
  "Yippee",
  "Bad To The Bone Riff",
  "Wooo Baby",
  "Android",
  "Huh",
  "Run",
];

soundFiles.forEach((sound, index) => {
  const audio = new Audio(`../Audio/${sound}.mp3`);
  buttons[index].addEventListener("click", () => {
    audio.currentTime = 0; // Reset audio to start
    audio.play();
  });
});

function leftButton() {
  soundBoard1.style.display = "flex"; // hide the first soundboard page
  soundBoard2.style.display = "none"; // show the first soundboard page
  leftBtn.style.display = "none"; // show the left button
  rightBtn.style.display = "block"; // hide the right button
}
function rightButton() {
  soundBoard1.style.display = "none"; // hide the first soundboard page
  soundBoard2.style.display = "flex"; // show the first soundboard page
  leftBtn.style.display = "block"; // show the left button
  rightBtn.style.display = "none"; // hide the right button
}

function speak() {
  let textarea = document.getElementById("tts-textarea");
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance(textarea.value);

  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[1]; // Choose a specific voice

  // Speak the text
  speechSynthesis.speak(utterance);
}

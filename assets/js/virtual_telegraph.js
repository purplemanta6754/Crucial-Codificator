const DOT_SOUND_PATH = "../assets/snds/soundDot.mp3";
const DASH_SOUND_PATH = "../assets/snds/soundDash.mp3";

const keyInput = document.getElementById("key");
const messageInput = document.getElementById("message");
const playButton = document.getElementById("playButton");
const dotButton = document.getElementById("dotButton");
const dashButton = document.getElementById("dashButton");

function openTelegraph() {
  const width = window.screen.width;
  const height = window.screen.height;
  window.open(
    "telegrafo-virtual/index.html",
    "telegraphWindow",
    `width=400, height=285, top=${(height - 285) / 2}, left=${
      (width - 400) / 2
    }`
  );
  console.log(
    "Se ha abierto una nueva ventana para mostrar el telegrafo virtual"
  );
}

let currentSymbol = "."; // By default, we begin with a dot

dotButton.addEventListener("click", () => {
  currentSymbol = ".";
  messageInput.value += currentSymbol;
  playSound(currentSymbol);
});

dashButton.addEventListener("click", () => {
  currentSymbol = "-";
  messageInput.value += currentSymbol;
  playSound(currentSymbol);
});

playButton.addEventListener("click", () => {
  const morseCode = messageInput.value;
  playMorseCodeSound(morseCode);
});

// Adding a "change" event to the key input element
keyInput.addEventListener("change", updateKey);

// Function for updating the key and resetting the current message and symbol
function updateKey() {
  const newKey = keyInput.value;
  currentSymbol = ".";
  messageInput.value = "";
  playSound(currentSymbol);
}

// Restore key and message on page load
window.addEventListener("load", updateKey);

// Function to play pre-recorded sounds of dots and dashes
function playSound(symbol) {
  const soundPath = symbol === "." ? DOT_SOUND_PATH : DASH_SOUND_PATH;
  const sound = new Audio(soundPath);
  sound.play();
}

// Function for playing pre-recorded Morse code sounds
function playMorseCodeSound(code) {
  const timeUnit = 600; // Tiempo en milisegundos para una unidad de tiempo básica
  const dashDuration = 1200; // Duración en milisegundos del sonido del guion
  const silenceDuration = 4; // Duración en milisegundos del silencio entre sonidos

  const morseSounds = [];

  code.split("").forEach((char) => {
    if (char === ".") {
      morseSounds.push({
        symbol: ".",
        duration: timeUnit,
      });
    } else if (char === "-") {
      morseSounds.push({
        symbol: "-",
        duration: dashDuration,
      });
    }
  });

  // Recursive function to play sounds with silence in between them
  function playNextSound(index) {
    if (index < morseSounds.length) {
      const sound = morseSounds[index];
      playSound(sound.symbol);

      setTimeout(() => {
        playNextSound(index + 1);
      }, sound.duration + silenceDuration);
    }
  }
  playNextSound(0);
}

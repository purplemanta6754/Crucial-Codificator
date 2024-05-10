const morseDictionary = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  "#": "#",
  "¿": "..-.-",
  "¡": "--...-",
  "?": "..--..",
  "!": "-.-.--",
  "\xbf": ".-..-.",
  "(": ".-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ",": "--..--",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  $: "...-..-",
  "@": ".--.-.",
  Á: ".--.-",
  É: "..-..",
  Í: "..",
  Ó: "---.",
  Ú: "..--",
  Ñ: "--.--",
  Ü: "..--",
  "/": "\u0020\u0020\u0020",
  "\u0020": "/",
};

function encodeTextToMorse() {
  const inputText = document
    .getElementById("inputTextArea")
    .value.toUpperCase();
  let resultText = "";

  if (!inputText) {
    resultText = "Error: No text to be encoded.";
  } else {
    for (let i = 0; i < inputText.length; i++) {
      const character = inputText[i];
      if (character === " ") {
        resultText += " ";
      } else if (character in morseDictionary) {
        resultText += morseDictionary[character] + " ";
      } else {
        resultText = `Error: The character '${character}' cannot be encoded to Morse.`;
        break;
      }
    }
  }

  document.getElementById("resultText").textContent = resultText;
}

function encodeMorseToText() {
  const inputText = document.getElementById("inputTextArea").value;
  const morseTextArray = inputText.split(" ");
  let resultText = "";

  if (!inputText) {
    resultText = "Error: No Morse code to decode.";
  } else {
    for (let i = 0; i < morseTextArray.length; i++) {
      const code = morseTextArray[i];
      let found = false;
      for (let letra in morseDictionary) {
        if (morseDictionary[letra] === code) {
          resultText += letra;
          found = true;
          break;
        }
      }
      if (!found) {
        resultText = `Error: The code '${code}' cannot be decoded to text.`;
        break;
      }
      if (i < morseTextArray.length - 1) {
        resultText += " ";
      }
    }
  }

  document.getElementById("resultText").textContent = resultText;
}

const copyButtonText =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\
  <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>\
</svg>&nbsp;&nbsp;\
Copy result';

document.addEventListener("DOMContentLoaded", function () {
  const copyButton = document.getElementById("copyButton");
  copyButton.addEventListener("click", function () {
    const resultText = document.getElementById("resultText").textContent;

    navigator.clipboard.writeText(resultText).then(
      function () {
        copyButton.innerHTML = "Successfully copied!";
        setTimeout(function () {
          copyButton.innerHTML = copyButtonText;
        }, 2000);
      },
      function (err) {
        console.error("Error copying text: ", err);
      }
    );
  });
});

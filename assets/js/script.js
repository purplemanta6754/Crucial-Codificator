// Mapear las letras al código
const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.'
};

// Convierte el texto a morse
function convertToMorse() {
    const inputText = document.getElementById('text').value.toUpperCase();
    let morseCode = '';

    for (let char of inputText) {
        if (char === ' ') {
            morseCode += ' ';
        } else if (morseCodeMap[char]) {
            morseCode += morseCodeMap[char] + ' ';
        }
    }

    document.getElementById('morse').textContent = morseCode;
}
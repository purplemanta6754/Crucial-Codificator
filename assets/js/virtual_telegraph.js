const key = document.getElementById('key');
const messageInput = document.getElementById('message');
const playButton = document.getElementById('playButton');
const dotButton = document.getElementById('dotButton');
const dashButton = document.getElementById('dashButton');
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

let currentSymbol = '.'; // Por defecto, iniciamos con un punto

dotButton.addEventListener('click', () => {
    currentSymbol = '.';
    messageInput.value += currentSymbol;
    playTelegraphSound(currentSymbol);
});

dashButton.addEventListener('click', () => {
    currentSymbol = '-';
    messageInput.value += currentSymbol;
    playTelegraphSound(currentSymbol);
});

playButton.addEventListener('click', () => {
    const morseCode = messageInput.value;
    playMorseCodeSound(morseCode);
});

messageInput.addEventListener('input', () => {
    const morseCode = messageInput.value;
    playMorseCodeSound(morseCode);
});

function playTelegraphSound(symbol) {
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
   
    if (symbol === '.') {
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
    } else if (symbol === '-') {
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
    }
   
    oscillator.connect(audioContext.destination);
   
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.1);
}

function playMorseCodeSound(code) {
    const timeUnit = 600; // Tiempo en milisegundos para una unidad de tiempo básica
   
    code.split('').forEach((char, index) => {
        setTimeout(() => {
            if (char === '.') {
                playTelegraphSound('.');
            } else if (char === '-') {
                playTelegraphSound('-');
            }
        }, index * timeUnit);
    });
}
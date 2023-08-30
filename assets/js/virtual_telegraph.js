const keyInput = document.getElementById('key');
const messageInput = document.getElementById('message');
const playButton = document.getElementById('playButton');
const dotButton = document.getElementById('dotButton');
const dashButton = document.getElementById('dashButton');

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

// Agregar un evento 'change' al elemento de entrada de clave
keyInput.addEventListener('change', () => {
    updateKey();
});

// Función para actualizar la clave y restablecer el mensaje y símbolo actual
function updateKey() {
    const newKey = keyInput.value;
    currentSymbol = '.';
    messageInput.value = '';
    playTelegraphSound(currentSymbol);
}

// Restaurar la clave y el mensaje al cargar la página
window.addEventListener('load', () => {
    updateKey();
});

// Restaurar la clave y el mensaje al hacer clic en el botón 'Restablecer'
resetButton.addEventListener('click', () => {
    updateKey();
});

// Función para reproducir sonidos pregrabados de puntos y rayas
function playTelegraphSound(symbol) {
    const soundPath = symbol === '.' ? '../assets/snds/soundDot.mp3' : '../assets/snds/soundDash.mp3';
    const sound = new Audio(soundPath);
    sound.play();
}

// Función para reproducir sonidos pregrabados de código Morse
function playMorseCodeSound(code) {
    const timeUnit = 600; // Tiempo en milisegundos para una unidad de tiempo básica
    const dashDuration = 1200; // Duración en milisegundos del sonido del guion
    const silenceDuration = 4; // Duración en milisegundos del silencio entre sonidos

    const morseSounds = [];

    code.split('').forEach((char) => {
        if (char === '.') {
            morseSounds.push({ symbol: '.', duration: timeUnit });
        } else if (char === '-') {
            morseSounds.push({ symbol: '-', duration: dashDuration });
        }
    });

    // Función recursiva para reproducir los sonidos con el silencio entre ellos
    function playNextSound(index) {
        if (index < morseSounds.length) {
            const sound = morseSounds[index];
            playTelegraphSound(sound.symbol);

            setTimeout(() => {
                playNextSound(index + 1);
            }, sound.duration + silenceDuration);
        }
    }

    playNextSound(0);
}

let currentOscillator = null;

function stopSound() {
    if (currentOscillator) {
        currentOscillator.stop();
        currentOscillator.disconnect();
        currentOscillator = null;
    }
}

const stopButton = document.getElementById('stopButton');

stopButton.addEventListener('click', () => {
    stopSound();
});

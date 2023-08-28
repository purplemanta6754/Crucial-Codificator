const key = document.querySelector('.key');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('sendButton');

let isPressed = false;

key.addEventListener('mousedown', () => {
    isPressed = true;
    sendMessage();
});

key.addEventListener('mouseup', () => {
    isPressed = false;
});

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    const message = messageInput.value;
    const morseCode = convertToMorseCode(message);
    if (morseCode) {
        simulateMorseCode(morseCode);
    }
}

function convertToMorseCode(text) {
    // Para simplificar, nos limitaremos a devolver un patrón básico
    return ".- -... -.-.";
}

function simulateMorseCode(code) {
    const timeUnit = 300; // Tiempo en milisegundos para una unidad de tiempo básica
    const delay = timeUnit * 3; // Retraso entre caracteres
    
    code.split('').forEach((char, index) => {
        setTimeout(() => {
            if (char === '.') {
                key.style.backgroundColor = '#999';
                setTimeout(() => key.style.backgroundColor = '#333', timeUnit);
            } else if (char === '-') {
                key.style.backgroundColor = '#999';
                setTimeout(() => key.style.backgroundColor = '#333', timeUnit * 3);
            }
        }, index * delay);
    });
}

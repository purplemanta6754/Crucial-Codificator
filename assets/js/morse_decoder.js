const diccionarioMorse = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
    'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
    '3': '...--', '4': '....-', '5': '.....', '6': '-....',
    '7': '--...', '8': '---..', '9': '----.', '#': '#', '¿': '..-.-',
    '¡': '--...-', '?': '..--..', '!': '-.-.--', '"': '.-..-.',
    '(': '.-.--.', ')': '-.--.-', '&': '.-...', ':': '---...',
    ',': '--..--', ';': '-.-.-.', '=': '-...-', '+': '.-.-.',
    '-': '-....-', '_': '..--.-', '$': '...-..-', '@': '.--.-.',
    'Á': '.--.-', 'É': '..-..', 'Í': '..', 'Ó': '---.', 'Ú': '..--',
    'Ñ': '--.--', 'Ü': '..--',
    ' ': '/'
};



function convertirTextoACodigo() {
    const entrada = document.getElementById('entrada').value.toUpperCase();
    let resultado = '';

    for (let i = 0; i < entrada.length; i++) {
        const caracter = entrada[i];
        if (caracter === ' ') {
            resultado += ' ';
        } else if (caracter in diccionarioMorse) {
            resultado += diccionarioMorse[caracter] + ' ';
        }
    }

    document.getElementById('resultado').textContent = resultado;
}

function convertirCodigoATexto() {
    const entrada = document.getElementById('entrada').value;
    const codigoMorseArray = entrada.split(' ');
    let resultado = '';

    for (let i = 0; i < codigoMorseArray.length; i++) {
        const código = codigoMorseArray[i];
        for (let letra in diccionarioMorse) {
            if (diccionarioMorse[letra] === código) {
                resultado += letra;
                break;
            }
        }
        if (i < codigoMorseArray.length - 1) {
            resultado += ' ';
        }
    }

    document.getElementById('resultado').textContent = resultado;
}

document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.getElementById('copyButton');
    copyButton.addEventListener('click', function () {
        const variableValueElement = document.getElementById('resultado');
        const tempInput = document.createElement('input');
        tempInput.value = variableValueElement.innerText;
        document.body.appendChild(tempInput);

        tempInput.select();
        tempInput.setSelectionRange(0, 99999);

        document.execCommand('copy');

        document.body.removeChild(tempInput);

        copyButton.innerHTML = '¡Copiado!';
        setTimeout(function () {
            copyButton.innerHTML = 'Copiar resultado';
        }, 2000);
    });
});

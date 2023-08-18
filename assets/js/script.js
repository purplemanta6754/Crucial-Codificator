const audioElement = document.getElementById('audio');

function reproducirSonido() {
    audioElement.play();
}

const diccionarioMorse = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
    'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
    '3': '...--', '4': '....-', '5': '.....', '6': '-....',
    '7': '--...', '8': '---..', '9': '----.'
};

function convertirTextoACodigo() {
    const entrada = document.getElementById('entrada').value.toUpperCase();
    let resultado = '';

    for (let i = 0; i < entrada.length; i++) {
        if (entrada[i] === ' ') {
            resultado += ' ';
        } else if (entrada[i] in diccionarioMorse) {
            resultado += diccionarioMorse[entrada[i]] + ' ';
        }
    }

    document.getElementById('resultado').textContent = resultado;

    reproducirSonido();
}

function convertirCodigoATexto() {
    const entrada = document.getElementById('entrada').value;
    const codigoMorseArray = entrada.split(' ');
    let resultado = '';

    for (let i = 0; i < codigoMorseArray.length; i++) {
        for (let letra in diccionarioMorse) {
            if (diccionarioMorse[letra] === codigoMorseArray[i]) {
                resultado += letra;
                break;
            }
        }
    }

    document.getElementById('resultado').textContent = resultado;

    reproducirSonido();
}
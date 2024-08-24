const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const space = '**********';

function decode(expr) {
    let string = '';
    let char;
    let charMorse;
    for (let i = 0; i < expr.length; i+=10) {
        charMorse = '';
        char = expr.slice(i, i+10);
        if (char === space) {
            string += ' ';
            continue;
        }
        char = char.slice(char.indexOf('1'));
        for (let j = 0; j < char.length; j+=2) {
            charMorse += char.slice(j, j+2) === '10' ? '.' : '-';
        }
        string += MORSE_TABLE[charMorse];
    }

    return string;
    
}

module.exports = {
    decode
}
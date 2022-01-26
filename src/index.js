const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = [];
    let arrayCode = [];
    let codeArray = Object.entries(MORSE_TABLE);
    let count = 0;

    for (let i = 0; i < expr.length; i++) {
        arrayCode[count] = expr.substr(i, 10);
        i = i + 9;
        count++;
    }

    count = 0;
    arrayCode = arrayCode.map(element => {
        if (element !== "**********") {
            let arrayPre = new Array(5);
            for (let i = 0; i < 10; i++) {
                arrayPre[count] = element.substr(i, 2);
                count++;
                i++;
            }
            count = 0;
            return arrayPre;
        } else {
            return element;
        }
    })

    arrayCode = arrayCode.map(element => {
        if (element !== "**********") {
            element = element.map(element2 => {
                if (element2 === "00") {
                    return '';
                } else if (element2 === "10") {
                    return '.';
                } else if (element2 === "11") {
                    return '-';
                }
            });
            return element;
        } else {
            return " ";
        }
    })

    arrayCode = arrayCode.map(element => {
        if (element !== ' ') {
            element = element.join('').replace(/,/g, '');
            return element;
        } else {
            return element;
        }
    })

    result = arrayCode.map(element => {
        if (element !== ' ') {
            codeArray.forEach(element2 => {
                if (element2[0] === element) {
                    element = element2[1];
                }
            });
            return element;
        } else {
            return element;
        }
    })
    return result.join('');
}

module.exports = {
    decode
}

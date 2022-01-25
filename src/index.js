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
    let tempStr = expr.toLowerCase();
    let codeArray = Object.entries(MORSE_TABLE);
    let result = [];
    let preResult = [];
    let resultStr = '';
    let count = 0;

    tempStr.split('').forEach(element => {
        let countIntro = 0;
        codeArray.forEach(element2 => {
            if (element === element2[1]) {
                preResult = preResult.concat(element2[0]);
            } else if (element === ' ' && countIntro === 0) {
                preResult = preResult.concat('**********');
                countIntro++;
            }
        });
    });

    preResult.forEach(element => {
        let tempStr = '';

        for (let i = 0; i < element.length; i++) {
            if (element[i] === '.') {
                tempStr = tempStr + "10";
            } else if (element[i] === '-') {
                tempStr = tempStr + "11";
            } else {
                tempStr = tempStr + "*"
            }
        }
        result[count] = tempStr;
        count++;
    });

    result.forEach(element => {
        if (element.length !== 10) {
            let str = "0000000000";
            let count = str.length - element.length;
            str = str.substr(0, count).concat(element);
            resultStr = resultStr + str;
        } else {
            resultStr = resultStr + element;
        }
    })
    return resultStr
}

console.log(decode("aaaa aaaaa aaaa aaaa"));

module.exports = {
    decode
}

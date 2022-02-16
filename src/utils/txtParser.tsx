export const txtParser = (text, linesToRemove, lineDelimiter) => {
    // Remove n lines from the text file and add delimiter at end of each line
    let textWithoutHeader = text.split('\n').slice(linesToRemove).join(lineDelimiter);

    // Count lines in text
    var lines = textWithoutHeader.split('\n');
    let lineCount = lines.length - 1;

    // Store each line to array
    let dataArray = [];
    for (let line = 0; line < lineCount; line++) {
        dataArray.push(lines[line].split('|'));
    }

    let data = [];

    for (let array = 0; array < dataArray.length; array++) {
        let rateFloat = dataArray[array][4].replace(/,/, '.');
        let obj = {
            ['countryName']: dataArray[array][0],
            ['currencyName']: dataArray[array][1],
            ['amount']: parseFloat(dataArray[array][2]),
            ['currencyISO']: dataArray[array][3],
            ['rate']: parseFloat(rateFloat),
        };

        data.push(obj);
    }

    return data;
};

export const getTimestamp = () => {
    function leadingZero(num) {
        if (num < 10) {
            num = '0' + num;
        }
        return num;
    }

    const date = new Date();

    // Date
    let dateDay = date.getDate();
    let dateMonth = date.getMonth();
    let dateYear = date.getFullYear();

    let fullDate = dateDay + '. ' + dateMonth + ' ' + dateYear;

    // Time
    let dateHours = leadingZero(date.getHours());
    let dateMinutes = leadingZero(date.getMinutes());
    let dateSeconds = leadingZero(date.getSeconds());

    let time = dateHours + ':' + dateMinutes + ':' + dateSeconds;

    let timestamp = fullDate + ' ' + time;

    return timestamp;
};

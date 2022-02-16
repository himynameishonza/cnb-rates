export const arrayToObject = (array, customKey) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
        return {
            ...obj,
            [item[customKey]]: item,
        };
    }, initialValue);
};

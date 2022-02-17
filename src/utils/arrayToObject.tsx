export const arrayToObject = (array: [], customKey: string) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
        return {
            ...obj,
            [item[customKey]]: item,
        };
    }, initialValue);
};

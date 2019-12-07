/**
 * @description generate uid
 * @returns {string}
 */
const generateUID = () => (([1e1] + 1e8).toString()).replace(/[018]/g, val => (
    (
        val ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (val / 4)))
    ).toString(16)
));

export {generateUID}
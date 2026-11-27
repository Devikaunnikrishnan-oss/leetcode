/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {

    for (let i = 0; i < 26; i++) {

        let letter = String.fromCharCode(97 + i);

        if (!sentence.includes(letter)) {
            return false;
        }
    }

    return true;
};
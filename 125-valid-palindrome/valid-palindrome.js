/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    s = s.toLowerCase();

    s = s.replace(/[^a-zA-Z0-9]/g, "");

    let reversed = s.split("").reverse().join("");

    return s === reversed;
};
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    let words=s.split(" ")

    let reverse = words.map(word=>{
        return word.split("").reverse().join("")
    })
    return reverse.join(" ")
};
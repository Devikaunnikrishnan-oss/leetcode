/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {

    let words = s.split(" ")

    let result = []

    for (let i = 0; i<words.length; i++){

    let word = words[i]

    let position = Number(word[word.length-1])
    
    let ogWord = word.slice(0,-1)

    result[position-1]= ogWord
    }
    return result.join(" ")
};
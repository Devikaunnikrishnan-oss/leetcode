/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    let res = [words[0]]
    for(let i = 1; i < words.length; i++){
        let sortedStr = words[i].split('').sort().join('');
        let last = words[i-1].split('').sort().join('');
        if(sortedStr != last){
            res.push(words[i])
        }
    }
    return res
};
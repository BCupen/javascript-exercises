const palindromes = function (word) {
    const processedWord = word.toLowerCase().replace(/[^a-z]/g, "");

    return (
        processedWord.split("")
        .reverse()
        .join("") === processedWord
    )
};

// Do not edit below this line
module.exports = palindromes;

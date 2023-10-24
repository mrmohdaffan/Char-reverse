function reverseWordsInSentence() {
    // Prompt the user for input
    var inputSentence = prompt("Enter a sentence:");

    // Check if the user canceled the prompt or entered an empty string
    if (inputSentence === null || inputSentence.trim() === "") {
        alert("You must enter a valid sentence.");
        return;
    }

    // Split the sentence into words
    var words = inputSentence.split(' ');

    // Reverse each word and store it in an array
    var reversedWords = words.map(function(word) {
        return word.split('').reverse().join('');
    });

    // Join the reversed words back into a sentence
    var reversedSentence = reversedWords.join(' ');

    // Display the reversed sentence
    alert("Reversed Sentence: " + reversedSentence);
}

// Call the function to get user input and reverse the sentence
reverseWordsInSentence();
                    
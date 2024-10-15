const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
Create a function that simulates a simple word guessing game. The function will take in a secret word and a user's guess as parameters. It will then compare the user's guess to the secret word.

- If the user's guess matches the secret word exactly, display "Correct! You've guessed the word!"
- If the user's guess does not match, display "Incorrect! Try again."

BONUS DIFFICULTY!!!
- If the user's guess shares the first letter with the secret word, display "You got the first letter right!"
- If the user's guess shares the first and last letter with the secret word, display "Almost Correct!"


BONUS DIFFICULTY2!!!
- If the user's secret word has less than 5 letters or more than 10 letters, the user will be asked to remake the secret word
- This means you need to write a function to intervene before the 2nd readline question to make sure the secret word follows a rule
*/

//determine a proper parameter variable name
function WordGuess(paramGuess, secret) {
if(paramGuess === secret){
  console.log("Correct! You guessed right!")
}else if(paramGuess !== secret){
  console.log("Wrong! Try again!")
}
  // ==============try this code out first before attempting the BONUS DIFFICULTY!!!
  //let testWord = "abcde";
  //console.log("the number of letters---", testWord.length);
  //first letter starts at 0
 // console.log("each letter of testWord---", testWord[0], testWord[1], testWord[2], testWord[3], testWord[4]); 
  //console.log("first and last letter of testword---", testWord[0], testWord[testWord.length-1]);

}


//determine a proper question to ask and the proper variable name for the answer
readline.question("Please choose a word for the secret code.", (Secret) => {

  //make an infinite recall for guessing question
  function StartGame() {

    //determine a proper question to ask and the proper variable name for the user to guess
    readline.question("What's the secret code?", (Guess) => {
      const result = WordGuess(Guess, Secret);
      console.log(result);
      //call your function here

      if (Guess === "quit") {
        readline.close();
      } else {
        StartGame();
      }
    });
  }

  StartGame();
});

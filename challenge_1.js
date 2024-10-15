const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*

Create a function that simulates a simple math quiz game. The function will take in two numbers and an operator (+, -, *, /) as parameters. 
It will then calculate the correct answer and compare it to the user's guess.

- If the user's guess is correct, display "Correct!"
- If the user's guess is incorrect, display "Incorrect!" and provide the correct answer.

BONUS:
- If the user's guess is within 5 of the correct answer, display "Very Close!"
- If the user's guess is within 2 of the correct answer, display "Almost Correct!"

BONUS 2x DIFFICULTY:
- Set a variable outside the function to limit the number of attempts allowed.
- Track the number of attempts made with a variable starting at 0.
- Each time the function runs, increment the number of attempts made.
- If the number of attempts made reaches the limit, display "No more attempts left!" and end the game.

*/

//determine a proper parameter variable name
function MathGame(paramNumber1, paramNumber2, paramOperator, paramGuess) {
  console.log("Write your code here!");
}


//determine a proper question to ask and the proper variable name for the answer
readline.question("the question for number 1", (_variableNameNumber1) => {
  readline.question("the question for number 1", (_variableNameNumber2) => {
    readline.question("the question for operator such as +-*/ ", (_variableNameOperator) => {
      //make an infinite recall for guessing question
      function StartGame() {
    
        //determine a proper question to ask and the proper variable name for the user to guess
        readline.question("the question for guessing ", (_variableNameGuess) => {
          
          //call your function here
    
          if (_variableNameGuess === "quit") {
            readline.close();
          } else {
            StartGame();
          }
        });
      }
    
      StartGame();
    })
  })
});

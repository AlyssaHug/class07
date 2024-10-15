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
function MathGame(paramNumber1, paramNumber2, paramOperator, ParamGuess) {
  let correctAnswer;
  switch (paramOperator) {
    case '+':
        correctAnswer = paramNumber1 + paramNumber2;
        break;
    case '-':
        correctAnswer = paramNumber1 - paramNumber2;
        break;
    case '*':
        correctAnswer = paramNumber1 * paramNumber2;
        break;
    case '/':
        correctAnswer = paramNumber1 / paramNumber2;
        break;
    default:
        return 'Invalid operator';
  }if(ParamGuess === correctAnswer){
    return 'Correct! You got it!';
  }else if(ParamGuess !== correctAnswer){
    return 'Sorry, you got it wrong! The right answer is '+correctAnswer+'.'
  }
}


//determine a proper question to ask and the proper variable name for the answer
readline.question("Give me a number", (Number1) => {
  readline.question("Give me a second number", (Number2) => {
    readline.question("What is the operator?", (Operator) => {
      //make an infinite recall for guessing question
      function StartGame() {
    
        //determine a proper question to ask and the proper variable name for the user to guess
        readline.question("What is your guess?", (Guess) => {
          const result = MathGame(
            parseFloat(Number1),
            parseFloat(Number2),
            Operator,
            parseFloat(Guess)
          );
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
    })
  })
});

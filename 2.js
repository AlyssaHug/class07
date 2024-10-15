const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Create a function that determines the type of movie ticket a person should purchase based on their age.
- If the person is under 5, they should be given a "free" ticket.
- If they are between 5 and 12, they should be given a "child" ticket.
- If they are between 13 and 17, they should be given a "teen" ticket.
- If they are between 18 and 64, they should be given an "adult" ticket.
- If they are 65 or older, they should be given a "senior" ticket.
*/

//determine a proper parameter variable name
function DetermineTicketType(age){

  console.log("Write your code here!");
}

function StartApp(){
  readline.question('question? ', _variableName => {

    //call your function here.
    
    // readline.close();
    if(_variableName !== "quit"){
      StartApp();
    } else {
      readline.close();
    }
  });
}

StartApp();
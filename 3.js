const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Create a function that determines the appropriate message for a person based on their age regarding gym membership options.

- If the person is under 12, they should be told "too young for membership".
- If they are between 12 and 15, they should be told "eligible for junior membership".
- If they are between 16 and 59, they should be told "eligible for standard membership".
- If they are 60 or older, they should be told "eligible for senior membership".

*/
//determine a proper parameter variable name
function CheckGymMembershipEligibility(age){

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
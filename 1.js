const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Create a function that determines the appropriate message for a person based on their age regarding driving privileges.

- If the person is under 16, they should be told "too young to drive".
- If they are between 16 and 17, they should be told "can drive with supervision".
- If they are between 18 and 70, they should be told "can drive freely".
- If they are over 70, they should be advised to "consider a driving assessment".
*/

//determine a proper parameter variable name
function CheckDrivingAge(paramAge){

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
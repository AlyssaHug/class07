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
  if(paramAge < 16) {
    console.log("You're way too young!");
  } else if(paramAge >= 16 && paramAge <= 17){
    console.log('You can drive, but make sure you have an adult with you!');
  } else if(paramAge >= 18 && paramAge <= 70){
    console.log('You can drive all you want!');
  } else if(paramAge > 70){
    console.log('Be safe! Consider getting a driving assessment before going out!')
  } 
}


function StartApp(){
  readline.question("I see you're wanting to take this car. Please tell me how old you are.", age => {
    CheckDrivingAge(Number(age));
    //call your function here.
    
    // readline.close();
    if(age !== "exit"){
      StartApp();
    } else{
      readline.close();
    }
  });
}

StartApp();
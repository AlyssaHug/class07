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
if(age < 12){
  console.log("You're too young for a membership, sorry.")
}else if(age >= 12 && age <= 15){
  console.log("You can get a junior membership!")
}else if(age > 15 && age <= 59){
  console.log("You can get a standard membership!")
}else if(age > 59){
  console.log("You can get a senior membership!")
}
}

function StartApp(){
  readline.question('I see you want to apply for our gym membership, how old are you?', age => {
    CheckGymMembershipEligibility(Number(age));
    //call your function here.
    
    // readline.close();
    if(age !== "quit"){
      StartApp();
    } else {
      readline.close();
    }
  });
}

StartApp();
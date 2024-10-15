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
if (age < 5){
  console.log("You get a free ticket!")
} else if(age >= 5 && age <= 12){
  console.log("You will need a child ticket.")
}else if(age >=13 && age <= 17){
  console.log("You need a teen ticket.")
}else if(age >= 18 && age <= 64){
  console.log("You will need an adult ticket.")
}else if(age >= 65){
  console.log("You will need a senior ticket.")
}
}

function StartApp(){
  readline.question("Your age will determine what ticket you'll need for this movie. How old are you?", age => {
    DetermineTicketType(Number(age));
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
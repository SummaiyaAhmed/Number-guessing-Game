#! /usr/bin/env node


import inquirer from "inquirer"

//const randomNumber =13;//FIX NUMBER
//const randomNumber = Math.random(); //THIS WILL AUTOGENERATE NUMBER FROM 0 TO 1
//const randomNumber = Math.floor(Math.random()); //THIS WILL AUTOGENERATE  0 always 
// const randomNumber = Math.floor(Math.random() *10); this will generate number from0 to 9
//console.log(randomNumber); 
const randomNumber = Math.floor(Math.random() *10 +1) ; //THIS WILL AUTOGENERATE NUMBER FROM 1 TO 10


const answer = await inquirer.prompt([
{

    name:"userGuessNumber",
    type:"number",
    message:"Enter your guess number from 1 to 10: "

}

]);
if(answer.userGuessNumber === randomNumber){
    console.log("you won! your guess is correct");
}
else{
     console.log("ops!sorry your guess is wrong");
}
// computer will generate  a random number
// user will guess the number
// computer will tell you if your guess is too high or too low
//compare the user guess with the computer generated number


#! /usr/bin/env node  
import inquirer from "inquirer";

//computer will generate a number                                   done
//User input for guessing number                                    done
//tell user if the guessing number is right or wrong                done
//Contine the program till the guess number is not right            

const randomNumber = Math.floor(Math.random() *10 + 1) ;
const answers = await inquirer.prompt([
  { message: "Guess any Number b/w 1-10:", type: "number", name: "userguessnumber" },
]);


if (answers.userguessnumber === randomNumber) {
  console.log("Congratulation you guessed the right number");
} else {
  console.log("Sorry you Guessed the wrong num");
}

console.log(`The right number was ${randomNumber}`);
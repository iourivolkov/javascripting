// Write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice.

const arg = process.argv;
const numberOfRolls = arg.splice(2);

const diceRoller = function (numberOfRolls){
  for(let i = 0; i < numberOfRolls; i++){
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
  }
}
diceRoller(numberOfRolls);





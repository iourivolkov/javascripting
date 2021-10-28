// CHALLENGE
 const raisinAlarm = (cookies) => {
   let output = "All good!"; // set default output if cookies array has chocolate only 

  for(let element of cookies){ // use for of loop to iterate over elements in cookies array
     if(element === "🍇"){ // check if raisins are present in cookies array
       output = "Raisin alert!"; 
    }
   }
   return output; 
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

// STRETCH
const raisinAlarmArray = (cookies) => {
  let output = []; // initialize empty output array

  for(let element of cookies){ // use for of loop to iterate over elements in cookies array
    if(element.includes("🍇")){ // use includes method to test whether an array contains any raisins
      output.push("Raisin alert!");
    } else {
      output.push("All good!"); 
    }
  }
  return output; 
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));


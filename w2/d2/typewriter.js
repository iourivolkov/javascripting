// need each char to appear after 50 ms 

// start from first char, call callback function which will loop over the next char in the string after n + 50 ms
// --> n starts at 50 ms
// needs to stop once finished loop through sentence



const sentence = "hello there from lighthouse labs\n";

let delay = 50;

for(let i = 0; i < sentence.length; i++){
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, delay);
    delay += 50;
  };






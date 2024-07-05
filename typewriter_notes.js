// const sentence = "hello hello hi hi"
// for (const char of sentence) {
//   console.log(char)
// }
//console.log will add a new line character (\n) to the end of the string. However, in Node we can use process.stdout.write instead to have more control and avoid automatically adding an extra "newline character" at the end each time.

// Instruction
// Replace the console.log with process.stdout.write and confirm our results.

const sentence = "hello there from lighthouse labs";
// wrap it in a function

function printer(sentence) {
  //set the delay to start at 0
  let delay = 0;
  // let output = '';
  // declare an empty string to hold the string values as the loop iterates through the sentence
  // removed this because it doesn't work properly if using process.stdout.write

  //using the original example style loop (for, of)
  for (const char of sentence) {
    setTimeout(() => {
      // add the normal timer
      // output will get one character at a time
      // output += char;
      // console.log(output);
      // removed all this because it's not what the instructions said to actually do, but saving for reference.
      process.stdout.write(char);
      // console.log the output
    }, delay);
    // the way this works is it adds the delay time to the original delay.
    // you can't just set it as a static number in the function because it will just display the whole string after that amount of time.
    delay += 50;
  } // the code finished correctly, now, we need to add one blank line to space it out.
  // console.log("nothing")
  //adding a console.log("nothing") does not work, because it runs before any scheduled process, like timeOut.
  // a workaround could be to schedule it to its own timeOut so it runs after the first one.
  setTimeout(() => {
  // console.log("\n nothing")
    process.stdout.write('\n');
  }, delay);
}
printer(sentence);
// defined function for setTimeout
function logMessage() {
  console.log("yo");
}
setTimeout(logMessage, 3000);

// anonymous function for setTimeout
setTimeout(function() {
  console.log("hi");
}, 3000);

// anonymous function for setTimeoue using arrow
setTimeout(() => {
  console.log("hello");
}, 3000);

// nested function to print 3 words one second apart

setTimeout(() => {
  console.log("word 1, ");
  setTimeout(() => {
    console.log('word 2, ');
    setTimeout(() => {
      console.log('word 3.');
    }, 1000);
  }, 1000);
}, 1000);

//using an array instead of nesting functions
const words = ['array1, ', 'array2, ', 'array3.'];
function wordTimer(words, delay) {
  // just put the normal timout thing here
  setTimeout(() => {
    console.log(words);
  }, delay);
}
for (let i = 0; i < words.length; i++) {
  wordTimer(words[i], (i + 1) * 1000);
}


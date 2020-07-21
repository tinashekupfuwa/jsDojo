function say(something) {
  console.log(something);
}

function exec(func, arg) {
  func(arg);
}


setTimeout((word) => {
  console.log(word);
}, 5000, 'Hello Friend');
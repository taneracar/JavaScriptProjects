const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attemts = 0;
let guess;
let running = true;
while (running) {
  guess = Number(window.prompt(`Guess a number between ${minNum}-${maxNum}`));

  if (guess < minNum || guess > 100) {
    window.alert("Please enter a valid number");
  } else if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  } else {
    attemts++;
    if (guess < answer) {
      window.alert("Your guess is TOO LOW try again..");
    } else if (guess > answer) {
      window.alert("Your guess is TOO HIGH try again..");
    } else {
      window.alert(`Your guess is correct. The number was ${guess}
      and you found it at ${attemts} trying`);
      running = false;
    }
  }
}

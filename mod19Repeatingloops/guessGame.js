let max = parseInt(prompt("Enter Max Number:"));
while (!max) {
    max = parseInt(prompt("Enter Max Number:"));
}
let num = Math.floor(Math.random() * max) + 1;
console.log(num);
let guess = prompt("Enter Your Guess:");
let i = 0;
while (num != guess) {
    if (guess === 'q') {
        break;
    }
    if (parseInt(guess) < num) {
        guess = prompt("Enter Your Guess:Higher");
        i++;
    } else if (parseInt(guess) > num) {
        guess = prompt("Enter Your Guess:Lower");
        i++;
    }
    else
        guess = prompt("Enter Your Guess:Valid");
}
if (guess != 'q') {
    console.log(`You Win : Needed ${i + 1} guesses`);
}

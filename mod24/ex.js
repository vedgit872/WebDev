const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOUR CODE GOES HERE:
const spans = document.querySelectorAll("Span");
let j = 0;
for (let i of spans) {
    i.style.color = colors[j++];
}

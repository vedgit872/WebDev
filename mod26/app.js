const p1 = {
    score: 0,
    button: document.querySelector('.p1b'),
    display: document.querySelector('.p1sc')
}
const p2 = {
    score: 0,
    button: document.querySelector('.p2b'),
    display: document.querySelector('.p2sc')
}
const win = document.querySelector("#win");
const reset = document.querySelector(".reset");
let val = parseInt(win.value);
let winning = false;
console.dir(p1);

p1.button.addEventListener("click", () => {
    if (!winning) {
        p1.score += 1;
        p1.display.innerText = `${p1.score}`;
        if (p1.score >= val && p1.score - p2.score > 1) {
            winning = true;
            p1.display.classList.toggle("green");
            p2.display.classList.toggle("red");
        }
    }
});
p2.button.addEventListener("click", () => {
    if (!winning) {
        p2.score += 1;
        p2.display.innerText = `${p2.score}`;
        if (p2.score >= val && p2.score - p1.score > 1) {
            winning = true;
            p2.display.classList.toggle("green");
            p1.display.classList.toggle("red");
        }
    }
});
reset.addEventListener("click", () => {
    p1.score = 0;
    p1.display.innerText = `${p1.score}`;
    p2.score = 0;
    p2.display.innerText = `${p2.score}`;
    winning = false;
    p1.display.classList.remove("green", "red");
    p2.display.classList.remove("green", "red");
})
win.addEventListener("change", () => {
    p1.score = 0;
    p1.display.innerText = `${p1.score}`;
    p2.score = 0;
    p2.display.innerText = `${p2.score}`;
    winning = false;
    val = parseInt(win.value);
    p1.display.classList.remove("green", "red");
    p2.display.classList.remove("green", "red");
})






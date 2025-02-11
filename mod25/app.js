const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let rnd1 = Math.floor(Math.random() * 255);
    let rnd2 = Math.floor(Math.random() * 255);
    let rnd3 = Math.floor(Math.random() * 255);
    if (rnd1 + rnd2 + rnd3 < 200) {
        document.querySelector("h1").style.color = 'white';
    }
    document.body.style.backgroundColor = `rgb(${rnd1},${rnd2},${rnd3})`;
    document.querySelector("h1").innerText = `rgb(${rnd1},${rnd2},${rnd3})`;
});
document.body.style.textAlign = "center";
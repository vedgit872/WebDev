const btn = document.querySelector("button");
const form = document.querySelector("form");
const inp = document.querySelector("input");

function removeImg() {
    const imgs = document.querySelectorAll("img");
    if (imgs) {
        for (let img of imgs) {
            img.remove();
        }
    }
}
function ImageP(tv) {
    for (let sh of tv) {
        if (sh.show.image) {
            const img = document.createElement("img");
            img.src = sh.show.image.medium;
            document.body.append(img);
        }
    }
}


form.addEventListener("submit", async function (st) {
    st.preventDefault();
    const searcht = inp.value;
    const config = { params: { q: searcht } };
    const showss = await axios.get(" https://api.tvmaze.com/search/shows", config);
    removeImg();
    ImageP(showss.data);
    inp.value = "";
});
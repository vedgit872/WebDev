

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = tweetForm.children[0].value;
    const tweet = tweetForm.children[1].value;
    const btag = document.createElement("b");
    btag.append(user);
    const li = document.createElement("li");
    li.append(btag, " - ", tweet);
    tweetsContainer.appendChild(li);
    user.innerText = '';
    tweet.innerText = '';
});

tweetsContainer.addEventListener("click", (e) => {
    if (e.target.nodeName === "LI") {
        e.target.remove();
    }

})
const express = require("express");
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log(path.join(__dirname, "views"));
const comments = [
    {
        id: 1,
        username: "john_doe",
        comment: "This is an amazing post!"
    },
    {
        id: 2,
        username: "alice_wonder",
        comment: "I totally agree with you!"
    },
    {
        id: 3,
        username: "bob_smith",
        comment: "Thanks for sharing this information."
    },
    {
        id: 4,
        username: "emily_rose",
        comment: "Great insights, keep posting!"
    },
    {
        id: 5,
        username: "charlie_99",
        comment: "Loved reading this, well done!"
    }
];

app.get("/comments", (req, res) => {
    res.render("comments/index.ejs", { comments });
})
app.post("/comments", (req, res) => {
    const id = comments.length + 1;
    const { username, comment } = req.body;
    comments.push({ id, username, comment });
    res.redirect("comments");
})

app.get("/comments/new", (req, res) => {
    res.render("comments/new.ejs");
});
app.get("/burger", (req, res) => {
    const { burger, qty } = req.query;
    res.send(`Here are your ${qty} ${burger} burger`);
});

app.post("/burger", (req, res) => {
    const { burger, qty } = req.body;
    res.send(`Here are your ${qty} ${burger} burger`);
});

app.listen(3000, () => {
    console.log("on 3000")
})
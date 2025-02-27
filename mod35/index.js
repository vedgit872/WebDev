const express = require("express");
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
var methodOverride = require('method-override')

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))
console.log(path.join(__dirname, "views"));
const comments = [
    {
        id: uuid(),
        username: "john_doe",
        comment: "This is an amazing post!"
    },
    {
        id: uuid(),
        username: "alice_wonder",
        comment: "I totally agree with you!"
    },
    {
        id: uuid(),
        username: "bob_smith",
        comment: "Thanks for sharing this information."
    },
    {
        id: uuid(),
        username: "emily_rose",
        comment: "Great insights, keep posting!"
    },
    {
        id: uuid(),
        username: "charlie_99",
        comment: "Loved reading this, well done!"
    }
];

app.get("/comments", (req, res) => {
    res.render("comments/index.ejs", { comments });
})
app.post("/comments", (req, res) => {
    const { username, comment } = req.body;
    comments.push({ id: uuid(), username, comment });
    res.redirect("/comments");
})
app.get("/comments/:id/edit", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/edit.ejs", { comment });
})
app.get("/comments/new", (req, res) => {
    res.render("comments/new.ejs");
});
app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/show.ejs", { comment });
})
app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    const text = req.body.comment;
    comment.comment = text;
    res.redirect("/comments");
})
app.delete("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    comments.pop(comment);
    res.redirect("/comments");
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
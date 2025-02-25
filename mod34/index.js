const express = require("express");
const app = express();
const path = require("path");
const data = require("./data.json");
// console.log(data)
app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home");
})
app.get("/rand", (req, res) => {
    const num = Math.floor(Math.random() * 100) + 1;
    res.render("rand", { num });
})
app.get("/cats", (req, res) => {
    const cats = ["milli ", "Billie", "killie", "sache"]
    res.render("cats", { cats });
})
app.get("/r/:search", (req, res) => {
    let { search } = req.params;

    if (search in data) {
        const d = data[search]; // Extract data for search term
        console.log(d);
        console.log("Request reached:", search);
        res.render("search", { search, ...d });
    } else {
        res.send("<h1>Not Found</h1>");
    }
});

app.listen(3000, () => {
    console.log("i am listning");
})
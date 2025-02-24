const express = require("express");
const app = express();

// Middleware to parse JSON body
app.use(express.json());
// app.get(/(.*)/, (req, res) => {
//     res.send("hi baby");
// })
app.get("/r/:sub/:pstID", (req, res) => {
    const { sub, pstID } = req.params;
    res.send(`<h1>we are surfing ${sub} and on post id${pstID}</h1>`);
})
app.get("/cats", (req, res) => {
    res.send("<h1>meow</h1>");
});

app.get("/dogs", (req, res) => {
    res.send("<h1>hoof</h1>");
});

app.get("/data", (req, res) => {
    const name = req.query.name; // Access query parameter from URL
    const age = req.query.age;
    res.send(`Received Name: ${name}, Age: ${age}`);
});

app.post("/data", (req, res) => {
    const { name, age } = req.body; // Extract from JSON body
    res.send(`Received Name: ${name}, Age: ${age}`);
});

app.post("/dogs", (req, res) => {
    res.send("<h1>hoof of post</h1>");
});

app.post("/cats", (req, res) => {
    res.send("<h1>meow of post</h1>");
});

// Catch-all middleware for 404 errors
app.use((req, res) => {
    console.log("New request received but no matching route found.");
    res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

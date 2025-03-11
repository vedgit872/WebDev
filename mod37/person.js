//to understand virtuals in the mongoose 
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/productshop")
    .then(() => {
        console.log("no problem");
    })
    .catch(() => {
        console.log("problem");
    })

const personscheema = new mongoose.Schema({
    first: String,
    last: String
})
personscheema.virtual("fullname").get(function () {
    return `${this.first} ${this.last}`;
})
    .set(function (name) {
        let str = name.trim();
        this.first = str.substring(0, str.indexOf(' '));
        this.last = str.substring(str.indexOf(' ') + 1);
    })
//middle ware return function or accept parameter next run next() on last line of the function for smooth running of the code 
personscheema.pre('save', async function () {
    console.log("before saving");
});
personscheema.post('save', async function () {
    console.log("after saving");
});
const Person = mongoose.model("Person", personscheema);
const p = new Person({ first: "harshit", last: "vats" });
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("mongoose running");
    })
    .catch(() => {
        console.log("mongoose Problem");
    });

const base = [
    { "name": "Apple", "price": 3, "categories": "fruit" },
    { "name": "Banana", "price": 1, "categories": "fruit" },
    { "name": "Carrot", "price": 2, "categories": "vegetables" },
    { "name": "Milk", "price": 4, "categories": "dairy" }
];

const Product = require("./models/products");

Product.insertMany(base)//in insert many if anything does not pass validation nothing is inserted
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
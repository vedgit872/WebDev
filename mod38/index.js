const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
var methodOverride = require('method-override')

const Product = require("./models/products");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))

const categories = ["fruit", "vegetables", "dairy"];

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("mongoose running");
    })
    .catch(() => {
        console.log("mongoose Problem");
    });
app.get("/products/new", (req, res) => {
    res.render("products/new.ejs", { categories });
});
app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/show.ejs", { product });
});
app.get("/products/:id/edit", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/edit.ejs", { product, categories });
})
app.post("/products", async (req, res) => {
    let newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
});
app.put("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    res.redirect(`/products/${product._id}`);
})
app.delete("/products/:id", async (req, res) => {
    const { id } = req.params;
    const deleted = await Product.findByIdAndDelete(id);
    res.redirect('/products')
})
app.get("/products", async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ categories: category });
        res.render("products/index.ejs", { products, category });
    } else {
        const products = await Product.find({});
        res.render("products/index.ejs", { products, category: "All" });
    }

});
app.listen(3000, () => {
    console.log("on 3000")
});
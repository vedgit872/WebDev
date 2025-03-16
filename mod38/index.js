const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const AppError = require("./appErrors");
var methodOverride = require('method-override')

const Product = require("./models/products");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))

const categories = ["fruit", "vegetables", "dairy"];

function Wrapasync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e));
    }
}//important as it cleans up the code
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
app.get("/products/:id", Wrapasync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new AppError("Not Found", 404);
    }
    res.render("products/show.ejs", { product });
}));
app.get("/products/:id/edit", async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            throw new AppError("Not Found", 404);
        }
        res.render("products/edit.ejs", { product, categories });
    } catch (e) {
        next(e);
    }
})
app.post("/products", async (req, res, next) => {
    try {
        let newProduct = new Product(req.body);
        await newProduct.save();
        res.redirect(`/products/${newProduct._id}`)
    }
    catch (e) {
        next(e);//if name not there as validators needed
    }
});
app.put("/products/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        res.redirect(`/products/${product._id}`);
    }
    catch (e) {
        next(e);
    }
})
app.delete("/products/:id", async (req, res) => {
    const { id } = req.params;
    const deleted = await Product.findByIdAndDelete(id);
    res.redirect('/products')
})
app.get("/products", async (req, res, next) => {
    try {
        const { category } = req.query;
        if (category) {
            const products = await Product.find({ categories: category });
            res.render("products/index.ejs", { products, category });
        } else {
            const products = await Product.find({});
            res.render("products/index.ejs", { products, category: "All" });
        }

    } catch (e) {
        next(e);
    }
});
app.use((err, req, res, next) => {
    const { status = 500, message = "error" } = err;
    res.status(status).send(message);
})
app.listen(3000, () => {
    console.log("on 3000")
});
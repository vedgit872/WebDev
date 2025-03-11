const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/productshop")
    .then(() => {
        console.log("no problem");
    })
    .catch(() => {
        console.log("problem");
    })
//code buffering there in mongoose
const productscheema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, "price should be greater than 0 idiot"]
    }
});

productscheema.methods.greet = function () {
    console.log("hi -", this.name)
}

productscheema.statics.firesale = function () {
    return this.updateMany({}, { price: 0 });
}

const Products = mongoose.model("Product", productscheema);
async function greet1() {
    const bike = await Products.findOne({ name: "Mountain bike" });//to await for the finding function
    bike.greet();
}
async function fire() {
    const p = await Products.firesale();
    console.log(p);
}
greet1()
fire()


// const bike = new Products({ name: "Mountain bike", price: "599" });
// const bike = new Products({ name: "Mountain bike", price: "599" ,type: "gear" }); //no error  but type not stored
// const bike = new Products({ name: "Mountain bike", type: "gear" }); //error as the price is required complusarily but type not stored
// bike.save()
//     .then(() => {
//         console.log("problem is not there");
//     })
//     .catch(() => {
//         console.log("problem is there")
//     })




// Products.findOneAndUpdate({ name: "Mountain bike" }, { price: -99 })//does not show problem
// Products.findOneAndUpdate({ name: "Mountain bike" }, { price: -99 }, { new: true, runValidators: true })//shows problem as price min is 0
//     .then((res) => {
//         console.log("problem is not there", res);
//     })
//     .catch((err) => {
//         console.log("problem is there:", err.errors.price.message)
//     })
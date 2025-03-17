const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => {
        console.log("mongoose running");
    })
    .catch(() => {
        console.log("mongoose Problem");
    });
const productSchema = new mongoose.Schema({
    name: String,
    price: {
        type: Number,
        min: 0
    },
    season: {
        type: String,
        enum: ['Fall', 'Spring', 'Winter', 'Summer']

    }
});

const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});
const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);
// Product.insertMany([
//     { name: 'Goddess Melon', price: 4.99, season: 'Summer' },
//     { name: 'Sugar Baby Watermelon', price: 4.99, season: 'Summer' },
//     { name: 'Asparagus', price: 3.99, season: 'Spring' },
// ]);


const makeFarm = async () => {
    const farm = new Farm({ name: 'Full Belly Farms', city: 'Guinda, CA' });
    const melon = await Product.findOne({ name: 'Goddess Melon' });
    farm.products.push(melon)
    await farm.save()
    console.log(farm);
}
// makeFarm();
const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Full Belly Farms' });
    const watermelon = await Product.findOne({ name: 'Sugar Baby Watermelon' });
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm);
}
// addProduct();
Farm.findOne({ name: 'Full Belly Farms' }).populate('products').then(farm => {   //to populate or show ythe actual products in it and  not just the object id 
    console.log(farm);
})
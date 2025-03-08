const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/movieapp')//to create a movieapp database
    .then(() => {
        console.log("connection sucessful");
    })
    .catch(err => {
        console.log("the error is", err);
    });


const moviescheema = new mongoose.Schema({
    name: String,
    year: Number,
    score: Number,
    rating: String,
})
const Movies = mongoose.model("Movies", moviescheema);
const amadeus = new Movies({ name: "Amadeus", year: 1986, score: 9.2, rating: 'r-16' });//creates the new amades instance of movie class of moviesschema


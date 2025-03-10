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
// const amadeus = new Movies({ name: "Amadeus", year: 1986, score: 9.2, rating: 'r-16' });//creates the new amades instance of movie class of moviesschema
Movies.insertMany([
    { name: "Amadeus", year: 1986, score: 9.2, rating: 'r-16' },
    {
        name: "The Godfather",
        year: 1972,
        score: 9.1,
        rating: "r-18"
    },
    {
        name: "Forrest Gump",
        year: 1994,
        score: 8.8,
        rating: "pg-13"
    },
    {
        name: "The Dark Knight",
        year: 2008,
        score: 9.0,
        rating: "r-13"
    },
    {
        name: "Pulp Fiction",
        year: 1994,
        score: 8.9,
        rating: "r-18"
    }])
    .then(() => {
        console.log("many succesful");
    })
    .catch(() => {
        console.log("error");
    })

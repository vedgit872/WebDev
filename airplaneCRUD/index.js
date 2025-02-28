const { v4: uuid } = require('uuid');
const flights = [
    {
        id: uuid(),
        airline: "Air India",
        flightNumber: "AI202",
        origin: "Delhi (DEL)",
        destination: "Mumbai (BOM)",
        departureTime: "10:30 AM",
        arrivalTime: "12:45 PM",
        status: "On Time"
    },
    {
        id: uuid(),
        airline: "IndiGo",
        flightNumber: "6E501",
        origin: "Bangalore (BLR)",
        destination: "Hyderabad (HYD)",
        departureTime: "08:00 AM",
        arrivalTime: "09:15 AM",
        status: "Delayed"
    },
    {
        id: uuid(),
        airline: "Emirates",
        flightNumber: "EK501",
        origin: "Mumbai (BOM)",
        destination: "Dubai (DXB)",
        departureTime: "02:00 PM",
        arrivalTime: "04:30 PM",
        status: "On Time"
    },
    {
        id: uuid(),
        airline: "Vistara",
        flightNumber: "UK303",
        origin: "Chennai (MAA)",
        destination: "Kolkata (CCU)",
        departureTime: "06:45 PM",
        arrivalTime: "09:00 PM",
        status: "Cancelled"
    },
    {
        id: uuid(),
        airline: "Qatar Airways",
        flightNumber: "QR571",
        origin: "Delhi (DEL)",
        destination: "Doha (DOH)",
        departureTime: "11:30 PM",
        arrivalTime: "03:15 AM",
        status: "On Time"
    }
];



const express = require("express");
const app = express();
const path = require('path');
var methodOverride = require('method-override')

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.get("/flights/chart", (req, res) => {
    res.render("index.ejs", { flights });
});
app.get("/flights/create", (req, res) => {
    res.render("create.ejs");
});
app.get("/flights/:id", (req, res) => {
    const { id } = req.params;
    const flight = flights.find(c => c.id === id);
    res.render("details.ejs", { flight });
})
app.post("/flights/:id", (req, res) => {
    const { id } = req.params;
    const flight = flights.find(c => c.id === id);
    const { airline, flightNumber, origin, destination, departureTime, arrivalTime, status } = req.body;
    flight.airline = airline;
    flight.flightNumber = flightNumber;
    flight.origin = origin;
    flight.destination = destination;
    flight.departureTime = departureTime;
    flight.arrivalTime = arrivalTime;
    flight.status = status;
    res.redirect("/flights/chart");
});
app.delete("/flights/:id", (req, res) => {
    const { id } = req.params;
    const flight = flights.find(c => c.id === id);
    flights.pop(flight);
    res.redirect("/flights/chart");
});
app.patch("/flights/create", (req, res) => {
    const { airline, flightNumber, origin, destination, departureTime, arrivalTime, status } = req.body;
    flights.push({ id: uuid(), airline, flightNumber, origin, destination, departureTime, arrivalTime, status })
    res.redirect("/flights/chart");
});
app.get("/flights/:id/edit", (req, res) => {
    const { id } = req.params;
    const flight = flights.find(c => c.id === id);
    res.render("edit.ejs", { flight });
})

app.listen(3000, () => {
    console.log(" listning 3000")
})

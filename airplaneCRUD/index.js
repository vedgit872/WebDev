const { v4: uuid } = require('uuid'); // Importing uuid library to generate unique IDs for flights

// Array containing flight data objects
const flights = [
    {
        id: uuid(), // Unique ID for the flight
        airline: "Air India", // Airline name
        flightNumber: "AI202", // Flight number
        origin: "Delhi (DEL)", // Origin airport
        destination: "Mumbai (BOM)", // Destination airport
        departureTime: "10:30 AM", // Departure time
        arrivalTime: "12:45 PM", // Arrival time
        status: "On Time" // Flight status
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

const express = require("express"); // Importing Express framework
const app = express(); // Creating an Express application instance
const path = require('path'); // Importing path module to work with file paths
var methodOverride = require('method-override'); // Importing method-override to support PUT & DELETE in forms

app.set("view engine", "ejs"); // Setting EJS as the templating engine
app.set("views", path.join(__dirname, "views")); // Setting views directory for EJS templates

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies (form data)
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(methodOverride('_method')); // Middleware to support method override via query string (for DELETE, PATCH)

app.get("/flights/chart", (req, res) => { // Route to display flight chart page
    res.render("index.ejs", { flights }); // Render index.ejs and pass flights array
});

app.get("/flights/create", (req, res) => { // Route to display flight creation form
    res.render("create.ejs"); // Render create.ejs
});

app.get("/flights/:id", (req, res) => { // Route to show flight details
    const { id } = req.params; // Extract flight ID from URL parameter
    const flight = flights.find(c => c.id === id); // Find flight by ID
    res.render("details.ejs", { flight }); // Render details.ejs with flight data
});

app.post("/flights/:id", (req, res) => { // Route to handle flight edit form submission (POST)
    const { id } = req.params; // Extract flight ID from URL parameter
    const flight = flights.find(c => c.id === id); // Find flight by ID
    const { airline, flightNumber, origin, destination, departureTime, arrivalTime, status } = req.body; // Extract form data from request body
    flight.airline = airline; // Update flight properties
    flight.flightNumber = flightNumber;
    flight.origin = origin;
    flight.destination = destination;
    flight.departureTime = departureTime;
    flight.arrivalTime = arrivalTime;
    flight.status = status;
    res.redirect("/flights/chart"); // Redirect to flight chart page after editing
});

app.delete("/flights/:id", (req, res) => { // Route to handle flight deletion (DELETE)
    const { id } = req.params; // Extract flight ID from URL parameter
    const flight = flights.find(c => c.id === id); // Find flight by ID
    flights.pop(flight); // Remove the flight (note: pop is wrong here, ideally use filter)
    res.redirect("/flights/chart"); // Redirect to flight chart page after deletion
});

app.patch("/flights/create", (req, res) => { // Route to handle new flight creation (PATCH)
    const { airline, flightNumber, origin, destination, departureTime, arrivalTime, status } = req.body; // Extract flight data from form
    flights.push({ id: uuid(), airline, flightNumber, origin, destination, departureTime, arrivalTime, status }); // Add new flight to array
    res.redirect("/flights/chart"); // Redirect to flight chart page after creation
});

app.get("/flights/:id/edit", (req, res) => { // Route to show flight edit form
    const { id } = req.params; // Extract flight ID from URL parameter
    const flight = flights.find(c => c.id === id); // Find flight by ID
    res.render("edit.ejs", { flight }); // Render edit.ejs with flight data
});

app.listen(3000, () => { // Start server on port 3000
    console.log("listning 3000"); // Log message when server starts
});

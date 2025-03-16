const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./appErrors');

app.use(morgan('dev'));
// app.use((req, res, next) => {
//     console.log('THis is my first middleware');
//     next();
// });
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});
//password on secret
//applies everywhere
// app.use((req, res, next) => {
//     const { password } = req.query;
//     if (password === "secret") {
//         next();
//     }
//     else {
//         res.send("Need a correct password");
//     }
// });
const passwordAuthentication = (req, res, next) => {
    const { password } = req.query;
    if (password === "secret") {
        next();
    }
    else {
        throw new AppError("password needed", 401);
    }
};
app.get('/', (req, res) => {
    console.log("rquest time", req.requestTime);
    res.send('home');
});
//to protect a route specifically instead of generalizing thwe query string for all routes using app.use
app.get('/secret', passwordAuthentication, (req, res) => {
    res.send('my secret is that the problem of my anger eruption is fast and cooldown is also fasssssst');
})

app.get('/dogs', (req, res) => {
    console.log("rquest time", req.requestTime);
    res.send("woof");
})
// if our app.use on line 10 is defined here the request time will show undefined 
app.get('/admin', (res, req) => {
    throw new AppError('you are not a admin', 403);
})
//for setting status or not found status
app.use((err, req, res, next) => {
    const { status = 500, message = "error!!!!!!!" } = err;//default message ,status so that if an error is not an AppError the status will not be defined as undefined  normal error does not have status property
    res.status(status).send(message);
});

app.listen(3000, () => {
    console.log('listning');
});

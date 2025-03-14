const express = require('express');
const app = express();
const morgan = require('morgan');

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
        res.send("Need a correct password");
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

//for setting status or not found status
app.use((req, res) => {
    res.status(404).send("Not Found");
});

app.listen(3000, () => {
    console.log('listning');
});

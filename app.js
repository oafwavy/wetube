import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
//const express = require('express');
const app = express()

const PORT = 4000;

const handleListening = () => console.log(`Listening in: http://localhost:${PORT}`);
const handleHome = (req, res) => res.send('Welcom Wetube');
const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json({}));


app.use(helmet());
app.use(morgan("dev"));



app.get('/', handleHome);
app.get('/profile', handleProfile);

app.listen(PORT, handleListening);



// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// const betweenHome = (req, res, next) => {
//   console.log('middleware');
//   next();
// }




// function handleListening() {
//   console.log(`Listening in: http://localhost:${PORT}`);
// }

// function handleHome(req, res) {
//   console.log('welcome wetube');
//   res.send('Welcom Wetube');
// }

// function handleProfile(req, res) {
//   res.send("You are on my profile");
// }



// app.use(betweenHome);
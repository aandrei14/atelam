const express = require('express');
const session = require('express-session');

const app = express();

const dotenv = require('dotenv');
dotenv.config({path: './.env'});

app.use(session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 7000 },
    saveUninitialized: false
}));

module.exports = app; 
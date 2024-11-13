"use strict";

const dataBase = require('./dataBase');

const express = require('express');
const app = express();

const path = require('path');

const dotenv = require('dotenv');
dotenv.config({path: './.env'});

const session = require('express-session');
app.use(session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 7000 },
    resave: true,
    saveUninitialized: true
}));

dataBase.connect( (err) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('Wow! MYSQL Connected');
    }
});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

//Parse URL-encoded bodies sent by the HTML forms.
app.use(express.urlencoded({ extended: false }));
//Parse JSON bodies sent by the API clients.
app.use(express.json());

app.set('view engine', 'hbs');

app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

app.listen(5000, () => {
    console.log('Server on 5000!');
});
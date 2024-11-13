const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dataBase = require('../dataBase');

const express = require('express');
const app = express();
const session = require('express-session');
app.use(session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 7000 },
    resave: true,
    saveUninitialized: true
}));

exports.createAccount = (req, res) => {
    const {name, username, password, passwordConfirm} = req.body;

    const sql = 'SELECT username FROM users WHERE username = ?';
     
    dataBase.query(sql, [username], async (err, result) => {
        if(err){
            console.log(err);
        }
        
        if (result.length > 0){
            return res.render('create_account', {
                message: 'This username is already in use.'
            });
        } else if (password !== passwordConfirm){
            return res.render('create_account', {
                message: 'The two passwords do not match.'
            });
        }

        let hashedPassword = await bcrypt.hash(password, 8);
        
        dataBase.query('INSERT INTO users SET ?', {name: name, username:username, password: hashedPassword}, (err, result) => {
            if(err){
                console.log(err);
            }
            else{
                return res.render('create_account', {
                    message: 'Account created!'
                });
            }
        });
    });
}

exports.login = (req, res) => {
    console.log(req.body);

    const {username, password} = req.body;

    const sql = 'SELECT username, password FROM users WHERE username = ?';

    req.sessionID

    dataBase.query(sql, [username], async (err, result) => {        
        if(err){
            console.log(err);
        }
            console.log('SessionID ' + req);
            if(result[0].username.length > 0 && await bcrypt.compare(password, result[0].password)){
                return res.render('login', {
                    message: 'Logged in (FINNALY)!'
                });
            }
            else{
                return res.render('login', {
                    message: 'Could not log in'
                });
            }
        });            
    
};

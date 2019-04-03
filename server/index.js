require('dotenv').config()
const express = require('express'),
    bodyParser = require('body-parser'),
    sessions = require('express-session'),
    massive = require('massive'),
    ctrl = require('./controllers/controller'),

const app = express()
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

app.use(bodyParser.json())
    massive(CONNECTION_STRING).then(db => {
        app.set('db', db)
        console.log("connected to db")
    })

app.use(sessions({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 1000000000000}
}))


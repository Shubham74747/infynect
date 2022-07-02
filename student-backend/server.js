const express = require('express');
const { createStudent, getStudent } = require('./db');
const app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.send("server is running...");
});

app.post('/student', function (req, res) {
    console.log('create student!');
    const student = req.body;
    createStudent(student);
    res.send();
})

app.get('/students', function (req, res) {
    console.log('get studnent list');
    getStudent(function (data) {
        res.send(data);
    })
})

app.listen(5000, function () {
    console.log('server started....', 5000);
})

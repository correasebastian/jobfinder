var express = require("express");
var mongoose = require("mongoose")
var jobModel = require('./models/Job');
var jobsData = require("./jobs-data")
var conString = 'mongodb://devky:devky@ds061954.mongolab.com:61954/jobfinder';
var app = express();

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'))


app.get('/api/jobs', function(req, res) {
    jobsData.findJobs()
        .then(function(collection) {
            res.send(collection)
        })
})

app.get('*', function(req, res) {
    res.render('index');
})


jobsData.mConnect(conString)
    .then(function() {
        console.log('connected to mongo successfully')
        jobsData.seedJobs();
    })



app.listen(process.env.PORT, process.env.IP)
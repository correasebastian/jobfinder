var express = require("express");
var mongoose= require("mongoose")
var app = express();

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'))
app.get('*', function(req, res) {
    res.render('index');
})
mongoose.connect('mongodb://localhost/jobfinder')

var con =mongoose.connection;

con.once('open', function () {
    console.log('connected to mongo successfully')
})


app.listen(process.env.PORT, process.env.IP)
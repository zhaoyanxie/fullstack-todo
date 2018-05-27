var express = require("express"),
    app     = express(),
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static('public'));


app.get('/', function(req, res){
    res.sendFile("index.html");
});

app.get('/', function(req, res){
    res.json("This is the root route!");
});

app.use('/api/todos/', todoRoutes);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
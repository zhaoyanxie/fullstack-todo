var express = require("express"),
    app     = express(),
    port    = process.env.PORT || 3001,
    bodyParser = require('body-parser'),
    cors = require('cors'); //ADD CODE HERE

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static('public'));

app.use(cors()); //ADD CODE HERE

app.get('/', function(req, res){
    res.sendFile("index.html");
});

app.get('/', function(req, res){
    res.json("This is the root route!");
});

app.use('/api/todos/', todoRoutes);

app.listen(port, () => console.log('App is listening on port ' + port +'!'))
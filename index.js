var express = require("express"),
    app     = express();

var todoRoutes = require('./routes/todos');

app.get("/", function(req, res){
    res.json("This is the root route!");
});

app.use("/api/todos/", todoRoutes);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
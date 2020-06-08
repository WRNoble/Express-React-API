const express = require('express');
const app = express();
const Emperor = require("./models/emperor-schema");
const bodyParser = require("body-parser");

app.use(express.json());
app.use("./routes/index");

app.get('/', function(req, res ,next){
    next()
}) 

app.get('/name', function(req, res ,next){
    next()
})

app.post('/name', function(req, res, next){
    next()
})


app.delete('/name', function(req, res, next){
    next()
})



app.get('/name/name:', function(req, res, next) {

})

//catch 404 errors
app.use(function(req, res, next){
    let err = new Error("not found");
    err.status = 404;
    next(err);
});

//error handler
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    })
});

app.listen(27017, ()=> console.log("listening on port 27017"));
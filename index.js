const express = require('express');
const app = express();
const Emperor = require("./models/emperor-schema");
const router = require("./routes/emperor.js");

app.use(express.json());
app.use(router);

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

app.listen(4000, ()=> console.log("listening on port 4000"));
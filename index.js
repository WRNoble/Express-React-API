const express = require('express');
const app = express();
const routes = require("./routes");

app.use("/roman-emperors", routes);

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
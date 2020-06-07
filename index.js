const express = require('express');
const app = express();
const Emperor = require("./models/Emperor");

app.use(express.json());
app.use("./routes/index");

// //catch 404 errors
// app.use(function(req, res, next){
//     let err = new Error("not found");
//     err.status = 404;
//     next(err);
// });

// //error handler
// app.use(function(err, req, res, next){
//     res.status(err.status || 500);
//     res.json({
//         error: {
//             message: err.message
//         }
//     })
// });

app.listen(27017, ()=> console.log("listening on port 27017"));
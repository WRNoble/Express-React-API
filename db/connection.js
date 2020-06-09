const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/emperors", {useNewUrlParser: true, useUnifiedTopology: true })
    .then(instance => {
        console.log(`Connected to db: ${instance.connections[0].name}`)
    })
    .catch(err => console.log("Sorry, we failed to connect properly", err));

module.exports = mongoose;

/**
 * @api {mongoose} Mongoose connection allows for the user to use mongoose
 * @api {connection} localhost is used and both useNewUrlParser and UseUnified Topology are passed.
 * @api {connection} 
 */
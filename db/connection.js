const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/emperors", {useNewUrlParser: true});

mongoose.connection.on("open", function() {
    console.log("Connected");
});

mongoose.connection.on("error", function() {
    console.log("Error");
});

module.exports = mongoose;
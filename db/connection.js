const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/emperors", {useNewUrlParser: true});

module.exports = mongoose;
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:5000/emperors", {useNewUrlParser: true});

module.exports = mongoose;
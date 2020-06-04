const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:3001/emperors", {useNewUrlParser: true});

module.exports = mongoose;
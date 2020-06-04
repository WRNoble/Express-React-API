const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const emperorSchema = new Schema({
    name: String,
    reignStart: String,
    birth: String,
    birthProvidence: String,
    rise: String,
    dynasty: String,
    causeOfDeath: String
});

const Emperor = mongoose.model("Emperor", emperorSchema);
module.exports = Emperor;
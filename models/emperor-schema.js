const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const emperorSchema = new Schema({
    name: String,
    birth: String,
    birthProvidence: String,
    rise: String,
    reignStart: String,
    dynasty: String,
    causeOfDeath: String,
});

const Emperor = mongoose.model("Emperor", emperorSchema);
module.exports = Emperor;
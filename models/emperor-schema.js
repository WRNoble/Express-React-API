const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Emperor = new Schema({
  name: String,
  birth: String,
  birthProvidence: String,
  rise: String,
  reignStart: String,
  dynasty: String,
  causeOfDeath: String,
});

module.exports = mongoose.model("Emperor", Emperor);
/**
 * @api {model} creates a model of the emperor schema requiring Mongoose and exporting the new Emperor Schema.
 */

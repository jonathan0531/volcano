const mongoose = require("mongoose");

//Modeling the Volcano Schema. Note: Validation is done on the forms
const Schema = mongoose.Schema;
const volcanoSchema = new Schema({
  name: String,
  description: String,
  image: String,
  location: String,
  status: String,
  elevation: Number,
  price: Number,
});

const Volcano = mongoose.model("volcano", volcanoSchema);
module.exports = Volcano;

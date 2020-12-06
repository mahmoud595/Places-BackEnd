const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placesSchema = new Schema({
  hostname: {
    type: String,
    required: true,
    // validate: [validate({ message: "Name cannot be blank" }, "notEmpty")],
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

const Client = mongoose.model("Place", placesSchema);

module.exports = Client;

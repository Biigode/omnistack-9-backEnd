const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  usuario: {
    type: mongoose.Types.ObjectId,
    ref: "Usuario"
  },
  spot: {
    type: mongoose.Types.ObjectId,
    ref: "Spot"
  }
});

module.exports = mongoose.model("Booking", BookingSchema);

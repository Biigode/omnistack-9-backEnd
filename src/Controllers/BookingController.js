const Booking = require("../models/Booking");
module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { data } = req.body;

    const booking = await Booking.create({
      usuario: user_id,
      spot: spot_id,
      data
    });
    await booking
      .populate("Usuario")
      .populate("Spot")
      .execPopulate();
    return res.status(200).json(booking);
  }
};

const Spot = require("../models/Spot");
module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;
    const spot = await Spot.find({ usuario: user_id });
    return res.status(200).json(spot);
  }
};

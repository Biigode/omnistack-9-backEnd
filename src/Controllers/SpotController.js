const Spot = require("../models/Spot");
const User = require("../models/Usuario");
module.exports = {
  async index(req, res) {
    const { tech } = req.query;
    const spots = await Spot.find({ techs: tech });
    return res.status(200).json(spots);
  },
  async store(req, res) {
    const { filename } = req.file;
    const { company, techs, price } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);
    if (!user) return res.status(404).json({ error: "Usuario não encontrado" });
    const spot = await Spot.create({
      thumbnail: filename,
      company,
      techs: techs.split(",").map(item => item.trim()),
      price,
      usuario: user_id
    });
    return res.status(200).json(spot);
  }
};

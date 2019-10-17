const Usuario = require("../models/Usuario");
module.exports = {
  async store(req, res) {
    const { email } = req.body;
    var user;
    user = await Usuario.findOne({ email });
    if (!user) user = await Usuario.create({ email });

    return res.status(201).json(user);
  }
};

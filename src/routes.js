const express = require("express");
const multer = require("multer");
const routes = express.Router();
const session = require("./Controllers/SessionController");
const spot = require("./Controllers/SpotController");
const config = require("./config/Multer");
const dashboard = require("./Controllers/DashBoardsController");
const booking = require("./Controllers/BookingController");

const upload = multer(config);
routes.post("/usuarios", session.store);

routes.post("/spot", upload.single("thumbnail"), spot.store);
routes.get("/spot", spot.index);
routes.get("/dashboard", dashboard.show);
routes.post("/spots/:spot_id/bookings", booking.store);
module.exports = routes;

// ===== routes/bookingRoutes.js =====
const express = require("express");
const router = express.Router();
const {
  createBooking,
  getBookings,
} = require("../controllers/bookingController");
const auth = require("../middleware/auth");

router.use(auth);
router.post("/", createBooking);
router.get("/", getBookings);

module.exports = router;

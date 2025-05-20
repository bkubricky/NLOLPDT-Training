// ===== controllers/bookingController.js =====
const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  try {
    const { date, time } = req.body;
    const existing = await Booking.findOne({ date, time });
    if (existing)
      return res.status(400).json({ message: "Time slot already booked" });
    const booking = new Booking({ user: req.user.id, date, time });
    await booking.save();
    res.status(201).json({ message: "Booking successful" });
  } catch (err) {
    res.status(400).json({ message: "Booking failed", error: err.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id });
    res.json(bookings);
  } catch (err) {
    res.status(400).json({ message: "Failed to fetch bookings" });
  }
};

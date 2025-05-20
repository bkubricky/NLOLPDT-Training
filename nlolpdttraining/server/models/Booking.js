// ===== models/Booking.js =====
const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
});

module.exports = mongoose.model("Booking", bookingSchema);

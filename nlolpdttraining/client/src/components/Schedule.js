import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const timeBlocks = [
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "1:00 PM - 2:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
];

function Schedule() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [message, setMessage] = useState("");
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Placeholder for future fetchBookings() from server
    setBookings([]);
  }, []);

  const handleBook = () => {
    if (!selectedDate) {
      setMessage("Please select a date.");
      return;
    }

    if (!selectedTime) {
      setMessage("Please select a time.");
      return;
    }

    const formattedDate = selectedDate.toISOString().split("T")[0];
    setMessage(`You booked ${formattedDate} at ${selectedTime}`);
    // Here you’d make an API call to store the booking
  };

  return (
    <section id="schedule" data-aos="fade-up" className="my-5 container">
      <h2 className="text-center mb-3">Schedule a Session</h2>
      <p className="text-center mb-4">
        Select a date and time to book your 1-hour private session.
      </p>

      <div className="d-flex flex-column align-items-center">
        <div style={{ maxWidth: 400 }}>
          <Calendar onChange={setSelectedDate} value={selectedDate} />
        </div>

        {selectedDate && (
          <>
            <h4 className="mt-4">
              Available Times for {selectedDate.toDateString()}
            </h4>
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-2">
              {timeBlocks.map((block) => (
                <button
                  key={block}
                  className={`btn ${
                    selectedTime === block ? "btn-success" : "btn-primary"
                  }`}
                  onClick={() => setSelectedTime(block)}
                >
                  {block}
                </button>
              ))}
            </div>
            <button className="btn btn-dark mt-3" onClick={handleBook}>
              Book Session
            </button>
          </>
        )}

        {message && <p className="mt-3 text-info">{message}</p>}
      </div>
    </section>
  );
}

export default Schedule;

const db = require('../config/db');

exports.createBooking = async (client, bookingId, showId, status) => {
  await client.query(
    `INSERT INTO bookings(id, show_id, status) VALUES($1,$2,$3)`,
    [bookingId, showId, status]
  );
};

exports.mapSeats = async (client, bookingId, seatId) => {
  await client.query(
    `INSERT INTO booking_seats(booking_id, seat_id) VALUES($1,$2)`,
    [bookingId, seatId]
  );
};
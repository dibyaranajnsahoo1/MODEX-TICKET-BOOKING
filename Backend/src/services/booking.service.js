const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');
const seatRepo = require('../repositories/seat.repo');
const bookingRepo = require('../repositories/booking.repo');

exports.bookSeats = async (showId, seatNumbers) => {
  const client = await db.connect();

  try {
    await client.query('BEGIN');

    const bookingId = uuidv4();

    const seats = await seatRepo.getSeatsForUpdate(
      client,
      showId,
      seatNumbers
    );

    // Check availability
    if (seats.some(s => s.status !== 'AVAILABLE')) {
      await client.query('ROLLBACK');
      return { status: 'FAILED', message: 'Seats not available' };
    }

    // Lock seats
    for (let s of seats) {
      await seatRepo.updateSeatStatus(client, s.id, 'LOCKED');
    }

    // Create booking
    await bookingRepo.createBooking(client, bookingId, showId, 'CONFIRMED');

    // Mark booked
    for (let s of seats) {
      await seatRepo.updateSeatStatus(client, s.id, 'BOOKED');
      await bookingRepo.mapSeats(client, bookingId, s.id);
    }

    await client.query('COMMIT');

    return { status: 'CONFIRMED', bookingId };

  } catch (err) {
    await client.query('ROLLBACK');
    return { status: 'FAILED', error: err.message };
  } finally {
    client.release();
  }
};
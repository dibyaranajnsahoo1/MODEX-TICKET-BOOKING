const db = require('../config/db');

exports.getSeatsForUpdate = async (client, showId, seatNumbers) => {
  const res = await client.query(
    `SELECT * FROM seats 
     WHERE show_id=$1 AND seat_number = ANY($2)
     FOR UPDATE`,
    [showId, seatNumbers]
  );
  return res.rows;
};

exports.updateSeatStatus = async (client, seatId, status) => {
  await client.query(
    `UPDATE seats SET status=$1, locked_at=NOW() WHERE id=$2`,
    [status, seatId]
  );
};
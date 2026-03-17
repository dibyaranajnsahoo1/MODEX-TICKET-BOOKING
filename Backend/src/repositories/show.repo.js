const db = require('../config/db');

exports.createShow = async (name, startTime, totalSeats) => {
  const result = await db.query(
    `INSERT INTO shows(name, start_time, total_seats) 
     VALUES($1,$2,$3) RETURNING *`,
    [name, startTime, totalSeats]
  );

  const showId = result.rows[0].id;

  for (let i = 1; i <= totalSeats; i++) {
    await db.query(
      `INSERT INTO seats(show_id, seat_number) VALUES($1,$2)`,
      [showId, i]
    );
  }

  return result.rows[0];
};

exports.getShows = async () => {
  const res = await db.query(`SELECT * FROM shows`);
  return res.rows;
};
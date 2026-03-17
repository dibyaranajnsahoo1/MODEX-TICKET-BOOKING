const router = require('express').Router();
const db = require('../config/db');


router.get('/:showId/seats', async (req, res) => {
  const { showId } = req.params;

  try {
    const result = await db.query(
      'SELECT seat_number, status FROM seats WHERE show_id=$1 ORDER BY seat_number',
      [showId]
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
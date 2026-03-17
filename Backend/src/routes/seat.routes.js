const router = require('express').Router();
const db = require('../config/db');

// GET seats for a show
router.get('/shows/:showId/seats', async (req, res) => {
  const { showId } = req.params;

  const result = await db.query(
    'SELECT seat_number, status FROM seats WHERE show_id=$1 ORDER BY seat_number',
    [showId]
  );

  res.json(result.rows);
});

module.exports = router;
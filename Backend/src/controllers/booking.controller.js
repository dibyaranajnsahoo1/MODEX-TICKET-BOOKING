const bookingService = require('../services/booking.service');

exports.book = async (req, res) => {
  const { show_id, seats } = req.body;

  const result = await bookingService.bookSeats(show_id, seats);

  res.json(result);
};
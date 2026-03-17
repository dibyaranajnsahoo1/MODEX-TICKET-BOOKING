const showRepo = require('../repositories/show.repo');

exports.create = async (req, res) => {
  const { name, start_time, total_seats } = req.body;
  const show = await showRepo.createShow(name, start_time, total_seats);
  res.json(show);
};

exports.getAll = async (req, res) => {
  const shows = await showRepo.getShows();
  res.json(shows);
};
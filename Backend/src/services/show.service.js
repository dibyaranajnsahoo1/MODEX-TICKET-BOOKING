const showRepo = require('../repositories/show.repo');

exports.createShow = async (data) => {
  const { name, start_time, total_seats } = data;

  if (!name || !start_time || !total_seats) {
    throw new Error('Missing required fields');
  }

  return await showRepo.createShow(name, start_time, total_seats);
};

exports.getAllShows = async () => {
  return await showRepo.getShows();
};
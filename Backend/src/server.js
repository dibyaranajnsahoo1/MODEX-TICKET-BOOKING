const app = require('./app');
require('./jobs/bookingExpiry.job');

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
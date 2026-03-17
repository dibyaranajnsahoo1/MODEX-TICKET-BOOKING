const cron = require('node-cron');
const db = require('../config/db');

cron.schedule('*/1 * * * *', async () => {
  console.log('Running expiry job...');

  await db.query(`
    UPDATE seats
    SET status='AVAILABLE'
    WHERE status='LOCKED'
    AND locked_at < NOW() - INTERVAL '2 minutes'
  `);

  await db.query(`
    UPDATE bookings
    SET status='FAILED'
    WHERE status='PENDING'
    AND created_at < NOW() - INTERVAL '2 minutes'
  `);
});
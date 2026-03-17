const express = require('express');
const cors = require('cors');

const showRoutes = require('./routes/show.routes');
const bookingRoutes = require('./routes/booking.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/shows', showRoutes);
app.use('/bookings', bookingRoutes);

module.exports = app;
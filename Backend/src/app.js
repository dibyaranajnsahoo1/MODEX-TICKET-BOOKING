const express = require('express');
const cors = require('cors');

const showRoutes = require('./routes/show.routes');
const bookingRoutes = require('./routes/booking.routes');
const seatRoutes = require('./routes/seat.routes');


const app = express();

app.use(cors());
app.use(express.json());

app.use('/shows', showRoutes);
app.use('/bookings', bookingRoutes);
app.use('/seats', seatRoutes);

module.exports = app;
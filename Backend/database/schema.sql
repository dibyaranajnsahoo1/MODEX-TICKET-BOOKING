-- SHOWS
CREATE TABLE shows (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    start_time TIMESTAMP NOT NULL,
    total_seats INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);


CREATE TABLE seats (
    id SERIAL PRIMARY KEY,
    show_id INT REFERENCES shows(id) ON DELETE CASCADE,
    seat_number INT,
    status TEXT DEFAULT 'AVAILABLE', 
    locked_at TIMESTAMP,
    UNIQUE(show_id, seat_number)
);


CREATE TABLE bookings (
    id UUID PRIMARY KEY,
    show_id INT REFERENCES shows(id),
    status TEXT, -- PENDING | CONFIRMED | FAILED
    created_at TIMESTAMP DEFAULT NOW()
);

-- BOOKING_SEATS
CREATE TABLE booking_seats (
    booking_id UUID REFERENCES bookings(id),
    seat_id INT REFERENCES seats(id)
);
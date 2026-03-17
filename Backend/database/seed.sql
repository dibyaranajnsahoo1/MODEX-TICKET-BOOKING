INSERT INTO shows (name, start_time, total_seats)
VALUES ('Avengers Show', NOW() + INTERVAL '1 hour', 40);


INSERT INTO seats (show_id, seat_number)
SELECT 1, generate_series(1,40);
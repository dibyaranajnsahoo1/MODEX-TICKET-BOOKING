import Seat from "./Seat";

export default function SeatGrid({ seats, selectedSeats, toggle }: any) {
  const seatsPerRow = 8;


  const totalRows = Math.ceil(seats.length / seatsPerRow);


  const rows = Array.from({ length: totalRows }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  return (
    <div className="main-seat">
      {rows.map((row, i) => {
        const rowSeats = seats.slice(i * seatsPerRow, (i + 1) * seatsPerRow);

        return (
          <div key={row} className="seat-row">
            <span style={{ width: 40 }}>{row}</span>

            {rowSeats.map((seat: any) => (
              <Seat
                key={seat.seat_number}
                seat={seat}
                selected={selectedSeats.includes(seat.seat_number)}
                toggle={toggle}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
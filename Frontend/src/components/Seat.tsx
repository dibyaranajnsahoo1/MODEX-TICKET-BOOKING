export default function Seat({ seat, selected, toggle }: any) {
  let cls = "seat available";

  if (seat.status === "BOOKED") cls = "seat booked";
  else if (selected) cls = "seat selected";

  const isDisabled = seat.status === "BOOKED";

  return (
    <div
      className={`seat-wrapper ${isDisabled ? "disabled" : ""}`}
      onClick={() => {
        if (!isDisabled) toggle(seat.seat_number);
      }}
    >
      <div className={cls}>
        {seat.seat_number}
      </div>

      {isDisabled && <span className="tooltip">🚫 Booked</span>}
    </div>
  );
}
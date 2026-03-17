import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/axios";
import SeatGrid from "../components/SeatGrid";
import Alert from "../components/Alert";

export default function Booking() {
  const { id } = useParams();
  const [seats, setSeats] = useState([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [status, setStatus] = useState("");

  const fetchSeats = async () => {
    const res = await api.get(`/shows/${id}/seats`);
    setSeats(res.data);
  };

  useEffect(() => {
    fetchSeats();
    const i = setInterval(fetchSeats, 3000);
    return () => clearInterval(i);
  }, [id]);

  const toggle = (seat: number) => {
    setSelected(prev =>
      prev.includes(seat)
        ? prev.filter(s => s !== seat)
        : [...prev, seat]
    );
  };

  const book = async () => {
    try {
      const res = await api.post("/bookings", {
        show_id: Number(id),
        seats: selected
      });

      setStatus(res.data.status);
      setSelected([]);
      fetchSeats();
    } catch {
      setStatus("FAILED");
    }

    setTimeout(() => setStatus(""), 2000);
  };

const availableSeats = seats.filter((s: any) => s.status === "AVAILABLE").length;



  return (
    <div className="container">
      <h2>Select Your Perfect Seats</h2>

      <div className="screen">SCREEN</div>

      <SeatGrid
        seats={seats}
        selectedSeats={selected}
        toggle={toggle}
      />

      <p>Available Seats: {availableSeats}</p>

        <p>Selected Seats: {selected.length}</p>

     <button
  className="btn"
  onClick={book}
  disabled={selected.length === 0}
>
  Confirm Booking
</button>
    <Alert status={status} context="booking" />
    </div>
  );
}
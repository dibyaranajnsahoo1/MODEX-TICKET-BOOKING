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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchSeats = async () => {
    try {
      const res = await api.get(`/shows/${id}/seats`);
      setSeats(res.data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to load seats 😢");
    } finally {
      setLoading(false);
    }
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
    if (selected.length === 0) return;

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

  const availableSeats = seats.filter(
    (s: any) => s.status === "AVAILABLE"
  ).length;

  if (error) {
    return (
      <div className="container">
        <h2>⚠️ Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  
  if (loading) {
    return (
      <div className="container loading-container">
        <h2>🎬 Loading Seats...</h2>
        <p>Please wait while we fetch seat availability</p>
        <div className="spinner"></div>
      </div>
    );
  }

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
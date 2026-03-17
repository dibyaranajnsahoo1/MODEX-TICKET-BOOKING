import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">🎟 Movie Booking</h2>

      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/admin" className="nav-link">Admin</Link>
      </div>
    </div>
  );
}
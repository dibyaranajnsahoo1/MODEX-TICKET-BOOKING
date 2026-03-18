import { useEffect, useState } from "react";
import { api } from "../api/axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const messages = [
    "Fetching shows 🎬",
    "Loading latest movies 🍿",
    "Almost ready...",
  ];
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {

    api.get("/shows")
      .then((res) => {
        setShows(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load shows 😢");
      })
      .finally(() => {
        setLoading(false);
      });

   
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);


  if (error) {
    return (
      <div className="container loading-container">
        <h1 className="title">⚠️ Error</h1>
        <p className="loading-text">{error}</p>
      </div>
    );
  }


  if (loading) {
    return (
      <div className="container loading-container">
        <h1 className="title">🎬 {messages[msgIndex]}</h1>
        <p className="loading-text">Please wait a moment...</p>

        
        <div className="spinner"></div>
      </div>
    );
  }


  return (
    <div className="container">
      <h1 className="title">🎬 Now Showing</h1>

      <div className="grid">
        {shows.map((s: any) => {
          const dateObj = new Date(s.start_time);

          const date = dateObj.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          });

          const time = dateObj.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <div key={s.id} className="card movie-card">
              <div className="poster">🎥</div>

              <h3 className="movie-title">{s.name}</h3>

              <div className="datetime">
                <span className="date">📅 {date}</span>
                <span className="time">⏰ {time}</span>
              </div>

              <Link to={`/booking/${s.id}`}>
                <button className="btn book-btn">Book Now</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
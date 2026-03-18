import { useState } from "react";
import { api } from "../api/axios";
import Alert from "../components/Alert";

export default function Admin() {
  const [form, setForm] = useState({
    name: "",
    start_time: "",
    total_seats: 40
  });

  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const submit = async () => {
    setError("");

    if (!form.name.trim()) return setError("Movie name is required");
    if (!form.start_time) return setError("Start time is required");
    if (form.total_seats <= 0) return setError("Seats must be greater than 0");

    try {
    
      const res = await api.post("/shows", form);
      console.log(res)

      setStatus("CONFIRMED");
      setForm({
        name: "",
        start_time: "",
        total_seats: 40
      });

    } catch (err: any) {
      setStatus("FAILED");
      setError(err.response?.data?.message || "Failed to create show");
    }

    setTimeout(() => setStatus(""), 2000);
  };

  return (
    <div className="container">
      <div className="form-card">
        <h2>Create Show</h2>

        {error && <p className="error">{error}</p>}

        <input
          className="input"
          placeholder="Movie Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="input"
          type="datetime-local"
          value={form.start_time} 
          onChange={e => setForm({ ...form, start_time: e.target.value })}
        />

        <input
          className="input"
          type="number"
          placeholder="Total Seats"
          value={form.total_seats} 
          onChange={e =>
            setForm({ ...form, total_seats: Number(e.target.value) })
          }
        />

        <button className="btn" onClick={submit}>
          Create Show
        </button>
      </div>

      
      <Alert status={status} context="admin" />
    </div>
  );
}
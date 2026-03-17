import { useState } from "react";
// import { api } from "../api/axios";
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

  if (!form.name) return setError("Name required");
  if (!form.start_time) return setError("Time required");
  if (form.total_seats <= 0) return setError("Seats invalid");

  try {
    // const res = await api.post("/shows", form);

    setStatus("CONFIRMED"); 
    setForm({ name: "", start_time: "", total_seats: 40 });

  } catch {
    setStatus("FAILED");     
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
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="input"
          type="datetime-local"
          onChange={e => setForm({ ...form, start_time: e.target.value })}
        />

        <input
          className="input"
          type="number"
          placeholder="Total Seats"
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
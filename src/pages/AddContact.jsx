import { useState } from "react";
import { db } from "../firebase/db";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import BackHome from "../components/BackHome";
import "../App.css";

export default function AddContact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "contacts"), form);

    navigate(`/`);
  };

  return (
  <div className="container">
    <div className="card">

      <BackHome />

      <h2 className="name">Add Contact</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          className="input"
          placeholder="First Name"
          onChange={e =>
            setForm({ ...form, firstName: e.target.value })
          }
        />

        <input
          className="input"
          placeholder="Last Name"
          onChange={e =>
            setForm({ ...form, lastName: e.target.value })
          }
        />

        <input
          className="input"
          placeholder="Email"
          onChange={e =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <button type="submit" className="save-btn">
          Save
        </button>
      </form>

    </div>
  </div>
);
}
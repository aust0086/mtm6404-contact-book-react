import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/db";
import { useEffect, useState } from "react";
import BackHome from "../components/BackHome";
import "../App.css";

export default function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  useEffect(() => {
    const fetch = async () => {
      const snap = await getDoc(doc(db, "contacts", id));
      setForm(snap.data());
    };
    fetch();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateDoc(doc(db, "contacts", id), form);

    navigate(`/contact/${id}`);
  };


    return (
  <div className="container">
    <div className="card">
      <BackHome />

      <h2 className="name">Edit Contact</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          className="input"
          value={form.firstName}
          placeholder="First name"
          onChange={e =>
            setForm({ ...form, firstName: e.target.value })
          }
        />

        <input
          className="input"
          value={form.lastName}
          placeholder="Last name"
          onChange={e =>
            setForm({ ...form, lastName: e.target.value })
          }
        />

        <input
          className="input"
          value={form.email}
          placeholder="Email"
          onChange={e =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <button type="submit" className="save-btn">
          Update
        </button>
      </form>
    </div>
  </div>
);
}
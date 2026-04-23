import { useParams, useNavigate, Link } from "react-router-dom";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/db";
import { useEffect, useState } from "react";
import BackHome from "../components/BackHome";
import "../App.css";

export default function ContactDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      const docRef = doc(db, "contacts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setContact({ id: docSnap.id, ...docSnap.data() });
      } else {
        setContact(null);
      }
    };

    fetchContact();
  }, [id]);

  const handleDelete = async () => {
    await deleteDoc(doc(db, "contacts", id));
    navigate("/");
  };

  if (!contact) return <p>Loading...</p>;

  return (
  <div className="container">
    <div className="card details-card">
      <h2 className="name">
        {contact.firstName} {contact.lastName}
      </h2>

      <p className="email">{contact.email}</p>

      <div className="details-actions">
        <Link to={`/edit/${id}`} className="edit-btn">
          Edit
        </Link>

        <button onClick={handleDelete} className="delete-btn">
          Delete
        </button>
      </div>

      <BackHome />


      {/* <Link to="/" className="back-link">
        ← Back
      </Link> */}
    </div>
  </div>
);
}
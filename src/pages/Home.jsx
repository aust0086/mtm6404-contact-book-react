import { useEffect, useState } from "react";
import { db } from "../firebase/db";
import { collection, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState(
  localStorage.getItem("search") || ""
);

  useEffect(() => {
  const unsubscribe = onSnapshot(collection(db, "contacts"), (snapshot) => {
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    data.sort((a, b) => a.lastName.localeCompare(b.lastName));
    setContacts(data);
  });

  return () => unsubscribe();
}, []);

  const filtered = contacts.filter(c =>
    `${c.firstName} ${c.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

 return (
  <div className="container">
    <div className="header">
      <h1>Contact Book</h1>

      <Link to="/add" className="add-btn">
        + Add Contact
      </Link>
    </div>

    <input
      className="search"
      placeholder="Search contacts..."
      value={search}
      onChange={e => {
        setSearch(e.target.value);
        localStorage.setItem("search", e.target.value);
      }}
    />

    <div className="list">
      {filtered.map(contact => (
        <Link
          to={`/contact/${contact.id}`}
          key={contact.id}
          className="card"
        >
          <div className="name">
            {contact.firstName} {contact.lastName}
          </div>
        </Link>
      ))}
    </div>
  </div>
);
      
}
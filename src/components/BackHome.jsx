import { Link } from "react-router-dom";
import "../App.css";

export default function BackHome() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Link class="home-btn" to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
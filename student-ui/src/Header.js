import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/student">Add Student</Link>
      </nav>
    </div>
  );
}

export default Header;

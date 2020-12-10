import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="navlinks">
        <li>About</li>
        <li>Shop</li>
      </ul>
    </nav>
  );
}

export default Nav;

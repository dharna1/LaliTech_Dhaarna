import { NavLink } from "react-router-dom";
import "../App.css";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">My Product App</h1>
      <nav>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/add">Add Product</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

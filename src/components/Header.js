import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Context";
import "./styles.css";

const Header = () => {
  const { cart } = useContext(Cart);
  return (
    <div>
      <span className="header">Understanding React ContextAPI</span>
      <ul className="nav">
        <li className="home">
          {" "}
          <Link to="/"> Home </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/cart"> MyCart 🛒 ({cart.length}) </Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Header;

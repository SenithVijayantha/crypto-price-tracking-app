import React from "react";
import "./Navbar.css";
import { MoveUpRight, Coins } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <span>CRYPTO PRICES</span>
        <Coins size={40} />
      </div>
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          Sign up
          <MoveUpRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

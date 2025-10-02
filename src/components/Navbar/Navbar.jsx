import React, { useContext } from "react";
import "./Navbar.css";
import { MoveUpRight, Coins } from "lucide-react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({
          name: "usd",
          symbol: "$",
        });
        break;
      }
      case "eur": {
        setCurrency({
          name: "eur",
          symbol: "€",
        });
        break;
      }
      case "lkr": {
        setCurrency({
          name: "lkr",
          symbol: "Rs",
        });
        break;
      }
      default: {
        setCurrency({
          name: "inr",
          symbol: "₹",
        });
      }
    }
  };

  return (
    <div className="navbar">
      <Link to={"/"} className="logo">
        <span>CRYPTO PRICES</span>
        <Coins size={40} />
      </Link>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link>
          <li>Features</li>
        </Link>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="lkr">LKR</option>
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

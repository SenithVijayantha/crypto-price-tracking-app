import React, { useState } from "react";
import "./Coin.css";
import { useParams } from "react-router";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();

  const fetchCoinData = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/bitcoin`;
    const options = {
      method: "GET",
      headers: { "x-cg-demo-api-key": import.meta.env.VITE_API_KEY },
      body: undefined,
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setAllCoins(data);
    } catch (error) {
      console.error(error);
    }
  };

  return <div>Coin {coinId}</div>;
};

export default Coin;

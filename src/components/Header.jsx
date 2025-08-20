import React from "react";
import headerBg from '../assets/header2.png';

export default function Header() {
  return (
  <header className="header" style={{ backgroundImage: `url(${headerBg})` }}>
      <div className="logo">MILLION</div>
      <nav className="menu">
        <a href="#">NEW DEVELOPMENTS</a>
        <a href="#">OUR TEAM</a>
        <a href="#">FOR SALE</a>
        <a href="#">TRANSACTIONS</a>
        <button className="sell-button">SELL YOUR UNIT</button>
      </nav>
    </header>
  );
}
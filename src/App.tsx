import React from "react";
import "./App.css";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import LeftIcon from "@material-ui/icons/ArrowBack";
import RightIcon from "@material-ui/icons/ArrowForward";
import ColorBallIcon from "@material-ui/icons/SportsBasketball";
import BuyNowIcon from "@material-ui/icons/ShoppingBasket";
import CartIcon from "@material-ui/icons/ShoppingCart";

import shoesPNG from "./assets/kobe.png";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="image-landing">
          <img src={shoesPNG} alt="shoes" />
          <div className="img-nav">
            <LeftIcon />
            <RightIcon />
          </div>
        </div>
        <div className="information">
          <div className="navbar">
            <h2>Nike x Kobe</h2>
            <div className="icons">
              <SearchIcon />
              <PersonIcon />
            </div>
          </div>
          <div className="product-info">
            <h3>Nike Rewind</h3>
            <h1>Kobe VII Aquafina</h1>
            <h2>$149.99</h2>
            <div className="sizes">
              <span>SIZE</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
              <span>11</span>
            </div>
            <div className="colors">
              <span>COLOR</span>
              <ColorBallIcon id="yellow" className="ball-color" />
              <ColorBallIcon id="blue" className="ball-color" />
              <ColorBallIcon id="red" className="ball-color" />
            </div>
            <div className="options">
              <p>
                <BuyNowIcon /> Buy it Now
              </p>
              <p>
                <CartIcon /> Add to Cart
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./Header/Header";
import React from "react";
import Product from "./Product/Product";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import { BrowserRouter, Route,Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/product" exact component={Product}/>
        <Route path="/checkout" exact component={Checkout}/>
        <Route path="/" exact component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

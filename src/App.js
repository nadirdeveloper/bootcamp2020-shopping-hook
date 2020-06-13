import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart';
import Modal from './components/Modal';
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import { Route,Switch } from "react-router-dom";
function App() {
  return (
    <div className="main-content">
      <Navbar />
      <Switch>
      <Route exact path="/" component={ProductList}/>
      <Route path="/details" component={Details}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/contactus" component={Contact}/>
      <Route  component={Default} />
      </Switch>
      <Modal />
      <Footer />
    </div>
    );
}

export default App;

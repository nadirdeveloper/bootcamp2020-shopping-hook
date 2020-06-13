import React, { Component } from 'react'
import Title from '../Title';
import CartColumns from "./CartColumns.js";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import { ProductConsumer } from "../../context";
import './../header.css'
export default class Cart extends Component {
  render() {
    return (
      <section className="cm-10">
        <ProductConsumer>
          {value =>{
            const {cart} = value;
            if(cart.length >0){
              return (
                <React.Fragment>
                <Title name="your" title="cart" />
                <CartColumns />
                <CartList value={value}></CartList>
                <CartTotal value={value}></CartTotal>
                </React.Fragment>
                
              )
            }else{
              return(
                <EmptyCart />
              )
            }
          }}
        </ProductConsumer>

      </section>
    )
  }
}

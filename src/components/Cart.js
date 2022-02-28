import React, { useContext } from "react";
import { cartContext } from "../Global/cartContext";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(cartContext);
  const handleToken = (token)  =>{
    console.log(token);
  }
  // console.log(data);
  return (
    <div className="cart-container">
      <div className="cart-details" style={{ marginTop: "100px" }}>
        {/* <h2>Your Shopping Cart</h2> */}
        {shoppingCart.length > 0
          ? shoppingCart.map((cart) => (
              <div className="cart" key={cart.id}>
                <span className="cart-image">
                  <img src={cart.image} alt="Not found" />
                </span>
                <span className="cart-product-name">{cart.name}</span>
                <span className="cart-product-price">$ {cart.price}</span>
                <span className="inc" onClick={()=>dispatch({type:'INC',id:cart.id,cart})}><i className="fas fa-plus"></i></span>
                <span className="product-quantity">{cart.qty}</span>
               <span className="dec" onClick={()=>dispatch({type:'DEC',id:cart.id,cart})}><i className="fas fa-minus"></i></span>
               <span className="product-total-price">$ {cart.price*cart.qty}</span>
               <span className="delete-product" onClick={()=>dispatch({type:'DELETE_PRODUCT',id:cart.id,cart})}><i className="fas fa-trash-alt"></i></span>
              </div>
            ))
          : "Sorry,Cart is Empty"}
      </div>
      { shoppingCart.length > 0 ? <div className="cart-summary">

        <div className="summary">
          <h3>Cart Summary</h3>
          <div className="total-items">
            <div className="items">
              Total Items 
            </div>
            <div className="items-count">{qty}</div>
          </div>
          <div className="total-price-section">
            <div className="titlejust">Total Price</div>
            <div className="items-price">$ {totalPrice}</div>
          </div>
          <div className="stripe-section">
           <StripeCheckout stripeKey="pk_test_51KWwMqSBoeCfPMYJezeTffrlJzo2tGnJB3IFMaf8xff28BqwG0YbXocXzB1nm0WQKxlVl3BqSg8Mtjo4f5sDBHZB00yaMSu43h"
          //  token={handleToken}
           billingAddress
           shippingAddress
           amount={totalPrice * 100}
           name="Products in Cart"> 
           {/* x100 to get exact price try without it once */}

           </StripeCheckout>
          </div>
        </div>
      </div> : '' }
    </div>
  );
};

export default Cart;

import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item-components";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const maptStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(maptStateToProps)(CartDropDown);

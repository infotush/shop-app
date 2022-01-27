import React from 'react';
import './checkout-item.style.scss';
import { connect } from 'react-redux';
import {
  clearItemFromCart,
  addCartItem,
  removeItem,
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({
  cartItem,
  clearItemFromCart,
  removeItem,
  addCartItem,
}) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <div className="value"> {quantity}</div>
        <div className="arrow" onClick={() => addCartItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addCartItem: (item) => dispatch(addCartItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

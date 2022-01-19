import React from 'react';
import './cart-icon.style.scss';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemCount } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingBag className="shopping-icon"></ShoppingBag>
    <span className="item-count">{itemsCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

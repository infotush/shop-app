import { CardActionTypes } from './cart.types';
import { addCartItems, removeCartItems } from './utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CardActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CardActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addCartItems(state.cartItems, action.payload),
      };
    case CardActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeCartItems(state.cartItems, action.payload),
      };
    case CardActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;

import { CardActionTypes } from './cart.types';
import { addCartItems } from './utils';

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
    default:
      return state;
  }
};

export default cartReducer;

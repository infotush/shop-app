import { CardActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
  type: CardActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addCartItem = (item) => ({
  type: CardActionTypes.ADD_ITEM,
  payload: item,
});

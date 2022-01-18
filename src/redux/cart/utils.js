export const addCartItems = (cartItems, itemToAdd) => {
  const existingCardItem = cartItems.find((cartItem) => {
    return cartItem.id === itemToAdd.id;
  });

  if (existingCardItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

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

export const removeCartItems = (cartItems, itemToRemove) => {
  const existingCardItem = cartItems.find((cartItem) => {
    return cartItem.id === itemToRemove.id;
  });
  if (existingCardItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

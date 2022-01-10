export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const removeItemFromCart = (cartItems, carItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === carItemToRemove.id
  );
  console.log("existingcaritem", existingCartItem);
  if (existingCartItem.quantity === 1) {
    console.log(
      "removeitem",
      cartItems.filter((cartItem) => cartItem.id !== carItemToRemove.id)
    );
    return cartItems.filter((cartItem) => cartItem.id !== carItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === carItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

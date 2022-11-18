import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector([selectCartReducer], (cart) => {
  return cart.cartItems;
});

export const selectIsCartOpen = createSelector([selectCartReducer], (cart) => {
  return cart.isCartOpen;
});

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    return newCartCount;
  }
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    const newCartTotal = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.price;
    }, 0);
    return newCartTotal;
  }
);

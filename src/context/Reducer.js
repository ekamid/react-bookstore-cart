export default (state, action) => {
  const { carts } = state;
  let cartIndex;

  switch (action.type) {
    case "ADD_CART":
      cartIndex = carts.findIndex(cart => cart.id === action.payload);
      if (cartIndex !== -1) {
        carts[cartIndex].quantity = carts[cartIndex].quantity + 1;
        return {
          ...state,
          carts: [...carts]
        };
      } else {
        return {
          ...state,
          carts: [...state.carts, { id: action.payload, quantity: 1 }]
        };
      }

    case "FETCH_CART":
      return {
        ...state,
        carts: [...state.carts, ...action.payload]
      };

    case "UPDATE_CART":
      cartIndex = carts.findIndex(cart => cart.id === action.payload.id);
      if (cartIndex !== -1) {
        carts[cartIndex].quantity = action.payload.quantity;
      }
      return {
        ...state,
        carts: [...carts]
      };

    case "REMOVE_CART":
      return {
        ...state,
        carts: state.carts.filter(cart => cart.id !== action.payload)
      };

    default:
      return state;
  }
};

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
    case "GET_SEARCHED_STRING":
      return {
        ...state,
        searchString: action.payload.trim() === "" ? null : action.payload
      };
    case "GET_SEARCHED_BOOKS":
      const reg = new RegExp(`${action.payload}`, "gi");
      return {
        ...state,
        searchedBooks: state.books.filter(book => book.title.match(reg))
      };

    case "CLEAR_SEARCH":
      return {
        ...state,
        searchString: null,
        searchedBooks: []
      };

    default:
      return state;
  }
};

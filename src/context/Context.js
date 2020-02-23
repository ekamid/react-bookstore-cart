import React, { createContext, useReducer, useEffect } from "react";
import books from "../data/books.json";
import reducer from "./Reducer";

const initialState = {
  books: books,
  carts: []
};

export const Context = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (localStorage.getItem("carts") !== null) {
      const fetchedCarts = JSON.parse(localStorage.getItem("carts"));
      fetchCarts(fetchedCarts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(state.carts));
  }, [state.carts]);

  //actions
  const fetchCarts = fetchedCarts => {
    dispatch({
      type: "FETCH_CART",
      payload: fetchedCarts
    });
  };

  const addCart = id => {
    dispatch({
      type: "ADD_CART",
      payload: id
    });
  };

  const updateCart = (id, quantity) => {
    dispatch({
      type: "UPDATE_CART",
      payload: { id, quantity }
    });
  };

  const removeCart = id => {
    dispatch({
      type: "REMOVE_CART",
      payload: id
    });
  };

  return (
    <Context.Provider
      value={{
        books: state.books,
        carts: state.carts,
        addCart,
        updateCart,
        removeCart
      }}
    >
      {children}
    </Context.Provider>
  );
};

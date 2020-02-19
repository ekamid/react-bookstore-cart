import React, { Component } from "react";
import booksData from "./data/books.json";
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      let { carts } = state;
      let cartIndex = carts.findIndex(cart => cart.id === action.payload);
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

    case "CHANGE_CART_QUANTITY":
      let allCarts = state.carts;
      let i = allCarts.findIndex(cart => cart.id === action.payload.id);
      if (i !== -1) {
        allCarts[i].quantity = action.payload.quantity;
      }
      return {
        ...state,
        carts: [...allCarts]
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

export class Provider extends Component {
  state = {
    books: booksData,
    carts: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    if (localStorage.getItem("carts") !== null) {
      const fetchedCarts = JSON.parse(localStorage.getItem("carts"));
      this.setState({
        carts: [...this.state.carts, ...fetchedCarts]
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("carts", JSON.stringify(this.state.carts));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

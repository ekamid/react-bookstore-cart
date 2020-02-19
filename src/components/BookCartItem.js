import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../Context";

const BookCartItem = ({ cart }) => {
  const { id, quantity } = cart;

  const [bookQuantity, setBookQuantity] = useState(quantity);

  const sendToCartState = (id, quantity, dispatch) => {
    dispatch({
      type: "CHANGE_CART_QUANTITY",
      payload: { id, quantity }
    });
  };

  const removeFromCart = (id, dispatch) => {
    dispatch({
      type: "REMOVE_CART",
      payload: id
    });
  };
  return (
    <Consumer>
      {value => {
        const { books, dispatch } = value;
        const book = books.filter(book => book.id === id);
        const { title, coverImageSrc, price, authorName, authorId } = book[0];

        return (
          <div className="book-item mt-4">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12 col-12 inline-block">
                <div className="product-cover w-50 m-auto">
                  <img className="img-fluid" src={coverImageSrc} alt="" />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                <h4>{title}</h4>
                <h6>
                  By <Link to={"/author/" + { authorId }}>{authorName}</Link>
                </h6>
                <h5>Price: ${price}</h5>
                <h5>Total Price: ${(price * bookQuantity).toFixed(2)}</h5>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-12 p-2">
                <input
                  onChange={e => {
                    if (e.target.value > 0) {
                      setBookQuantity(e.target.value);
                    }
                  }}
                  className="input-group w-25 text-center m-auto border border-info rounded-lg"
                  type="text"
                  value={bookQuantity}
                />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                <button
                  onClick={sendToCartState.bind(
                    this,
                    id,
                    bookQuantity,
                    dispatch
                  )}
                  className="btn btn-outline-info"
                >
                  Update
                </button>
                <button
                  onClick={removeFromCart.bind(this, id, dispatch)}
                  className="btn btn-outline-danger"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default BookCartItem;

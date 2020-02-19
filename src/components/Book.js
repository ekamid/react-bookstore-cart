import React from "react";
import { Consumer } from "../Context";
import { Link } from "react-router-dom";

const Book = ({ bookDetails }) => {
  const {
    id,
    title,
    coverImageSrc,
    rating,
    price,
    authorName,
    authorId
  } = bookDetails;

  const addToCart = (id, dispatch) => {
    dispatch({
      type: "ADD_CART",
      payload: id
    });
  };

  return (
    <Consumer>
      {value => {
        const { dispatch } = value;
        return (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex flex-column my-2">
            <div className="cover-img">
              <img src={coverImageSrc} alt="" />
              <div className="details">
                <div className="content">
                  <h5>
                    <Link style={{ color: "#fff" }} to={"/book/details/" + id}>
                      {title}
                    </Link>
                  </h5>
                  <h6>
                    By{" "}
                    <Link style={{ color: "#fff" }} to={"/author/" + authorId}>
                      {authorName}
                    </Link>
                  </h6>
                  <p>
                    <i className="fa fa-star"></i> {rating}
                  </p>
                  <h4>Price: ${price}</h4>
                </div>
              </div>
            </div>

            <div className="bottom">
              <Link
                className="btn btn-outline-primary"
                to={"/book/details/" + id}
              >
                Details
              </Link>
              <button
                onClick={addToCart.bind(this, id, dispatch)}
                className="btn btn-outline-primary"
              >
                Add Cart
              </button>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Book;

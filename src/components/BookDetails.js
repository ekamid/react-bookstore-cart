import React, { useContext } from "react";
import { Context } from "../context/Context";
import { useParams, Link } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const { addCart, books } = useContext(Context);

  const book = books.filter(book => book.id === id);
  const {
    title,
    coverImageSrc,
    rating,
    genre,
    price,
    description,
    authorName,
    authorId
  } = book[0];

  const handleAddCart = () => {
    addCart(id);
  };

  return (
    <div className="container">
      <h1 className="display-4 text-center">Book Details</h1>
      <div className="book-details w-75 my-4 mx-auto">
        <div className="row">
          <div className="book-img col-lg-5 col-12">
            <img className="w-100 h-60" src={coverImageSrc} alt="" />
          </div>
          <div className="contents col-lg-7 col-12">
            <h4>
              By <Link to={"/author/" + authorId}>{authorName}</Link>
            </h4>

            <h1 className="text-muted ml-0">{title}</h1>
            <p className="text-capitalize">Genre: {genre.join(", ")}</p>
            <h5>
              Goodreads Rating: <i className="fa fa-star"></i>
              {rating}
            </h5>

            <p>{description}</p>

            <h4>Price: ${price}</h4>

            <button
              style={{ fontSize: "1.3rem" }}
              className="btn btn-outline-primary px-5 py-3 m-auto"
              onClick={handleAddCart}
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

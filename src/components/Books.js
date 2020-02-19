import React from "react";
import { Consumer } from "../Context";
import Book from "./Book";

const Books = () => {
  return (
    <Consumer>
      {value => {
        return (
          <div className="container">
            <h1
              style={{ marginLeft: "20px", color: "#000" }}
              className="display-4 text-center mb-3"
            >
              All Books
            </h1>
            <div className="row">
              {value.books.map(book => {
                const { id } = book;

                return <Book key={id} bookDetails={book} />;
              })}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Books;

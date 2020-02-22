import React, { useState, useEffect } from "react";
import { Consumer } from "../Context";
import Book from "./Book";

const Books = props => {
  const [heading, setHeading] = useState("All Books");
  const [books, setBooks] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);

  const searchBooks = (books, keywords) => {
    const searchedBooks = [];

    books.forEach(book => {
      let title = book.title.toLowerCase();
      let keywordList = keywords.toLowerCase().split(" ");

      for (let i = 0; i < keywordList.length; i++) {
        var pattern = new RegExp(
          "(<=\\s|\\b)" + keywordList[i] + "(?=[]\\b|\\s|$)"
        );
        if (pattern.test(title) === true) {
          searchedBooks.push(book);
          break;
        }
      }
    });

    setSearchedBooks(searchedBooks);
  };

  useEffect(() => {
    const keywords = props.keywords;
    if (keywords !== "") {
      setHeading("Searching for '" + keywords + "'");
    }
    searchBooks(books, keywords);
  }, [props.keywords, books]);

  return (
    <Consumer>
      {value => {
        setBooks(value.books);
        return (
          <div className="container">
            <h1
              style={{ marginLeft: "20px", color: "#000" }}
              className="display-4 text-center mb-3"
            >
              {heading}
            </h1>
            <div className="row">
              {props.keywords === "" || null
                ? value.books.map(book => {
                    const { id } = book;
                    return <Book key={id} bookDetails={book} />;
                  })
                : searchedBooks.map(book => {
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

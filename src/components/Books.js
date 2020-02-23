import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/Context";
import Book from "./Book";

const Books = props => {
  const [heading, setHeading] = useState("All Books");
  const [isSearching, setIsSearching] = useState(false);
  const [searchedBooks, setSearchedBooks] = useState([]);
  const { books } = useContext(Context);

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
      setIsSearching(true);
    }
    searchBooks(books, keywords);
  }, [props.keywords, books]);

  return (
    <div className="container">
      <h1
        style={{ marginLeft: "20px", color: "#000" }}
        className="display-4 text-center mb-3"
      >
        {heading}
        {isSearching ? (
          <button
            className="btn btn-danger text-white border-0"
            onClick={() => window.location.reload()}
          >
            X
          </button>
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </h1>
      <div className="row">
        {props.keywords === "" || null
          ? books.map(book => {
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
};

export default Books;

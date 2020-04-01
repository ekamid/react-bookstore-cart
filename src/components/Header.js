import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <div className="container search-header px-3 py-3 mx-auto text-center mt-sm-5">
      <h1 className="display-4">Search Books</h1>
      <p className="lead">Search For the book using book title</p>
      <Search />
    </div>
  );
};

export default Header;

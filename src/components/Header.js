import React from "react";

const Header = () => {
  return (
    <div className="container search-header px-3 py-3 mx-auto text-center">
      <h1 className="display-4">Search Books</h1>
      <p className="lead">
        Search For the book you want buy using book title, author name or isbn
      </p>
      <form>
        <input
          style={{ width: "50%" }}
          className="form-control py-4 m-auto"
          type="search"
          placeholder="e.g. The Prophet"
        />
        <input
          style={{ fontSize: "1.3rem" }}
          className="btn btn-outline-primary my-3 px-3"
          type="button"
          value="Search"
        />
      </form>
    </div>
  );
};

export default Header;

import React, { useState } from "react";

const Header = props => {
  const [keywords, setKeywords] = useState("");
  const { getKeywords } = props;

  const handleChange = e => {
    setKeywords(e.target.value.trim());
  };

  const handleSubmit = () => {
    getKeywords(keywords);
    setKeywords("");
  };

  return (
    <div className="container search-header px-3 py-3 mx-auto text-center">
      <h1 className="display-4">Search Books</h1>
      <p className="lead">
        Search For the book you want buy using book title, author name or isbn
      </p>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          onChange={handleChange}
          style={{ width: "50%" }}
          className="form-control py-4 m-auto"
          type="search"
          placeholder="e.g. The Prophet"
          value={keywords}
        />
        <input
          onClick={e => {
            e.preventDefault();
            handleSubmit();
          }}
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

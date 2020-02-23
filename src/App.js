import React, { Fragment, useState } from "react";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Provider } from "./context/Context";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Books from "./components/Books";
import About from "./components/About";
import BookCart from "./components/BookCart";
import BookDetails from "./components/BookDetails";

function App() {
  const [keywords, setKeywords] = useState("");
  const getKeywords = keywords => {
    setKeywords(keywords);
  };

  return (
    <Provider>
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <Header getKeywords={getKeywords} />
                <Books keywords={keywords} />
              </Fragment>
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/book-cart" component={BookCart} />
          <Route path="/book/details/:id" component={BookDetails} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import MarkDown from "react-markdown";
import readmePath from "../data/README.md";

const About = () => {
  const [markDownText, setMarkDownText] = useState("");
  useEffect(() => {
    fetch(readmePath)
      .then(response => {
        return response.text();
      })
      .then(text => {
        setMarkDownText(text);
      });

    document.title = "About || React BookStore App";
  }, []);

  return (
    <div class="card container border-0">
      <div class="card-body">
        <div className="top-content text-center">
          <h1 className="display-4">Hello, Interested Peoples!</h1>
          <p className="lead">
            This is a ReactJS bookstore cart application using react router,
            context api, react hooks, bootstrap, and localStorage. The
            application is part of my react cardio session.
          </p>
          <hr className="my-4" />
        </div>
        <div className="bottom-content" style={{ fontSize: "1.2rem" }}>
          <MarkDown source={markDownText} />
        </div>
      </div>
      <div class="card-footer">
        <h5 className="display-5 text-center">
          A React Project By &copy;{" "}
          <a
            href="https://github.com/ekamid"
            rel="noopener noreferrer"
            target="_blank"
          >
            github/ekamid
          </a>
        </h5>
      </div>
    </div>
  );
};

export default About;

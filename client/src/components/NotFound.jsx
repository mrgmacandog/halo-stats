import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <React.Fragment>
      <h1>Oops! We can't seem to find the page you're looking for.</h1>
      <Link to="/">Go home</Link>
    </React.Fragment>
  );
};

export default NotFound;

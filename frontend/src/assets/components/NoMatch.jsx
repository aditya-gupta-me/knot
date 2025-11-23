import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <>
      <h1>Classic Error: 404</h1>
      <h2>Page Not Found</h2>
      <h3>
        <i>"You have found the door to heavens!"</i>
      </h3>
      <Link to="/">
        <button type="button">Homepage</button>
      </Link>
    </>
  );
}

export default NoMatch;

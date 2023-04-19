import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();

  return (
    <div>
      <h1> {`Opps! ${status} ${statusText}`}</h1>

      <Link to="/">
        <a>Click here to go back to Home Page</a>
      </Link>
    </div>
  );
};

export default Error;

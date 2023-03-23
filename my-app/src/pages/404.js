import React from "react";

const ErrorPage = () => {
  return (
    <>
      <div>
        <h1>We are sorry ,page not found</h1>
      </div>
      <div>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temprarily unavailable.
        </p>
        <a href="/">Click here to home page</a>
      </div>
    </>
  );
};

export default ErrorPage;

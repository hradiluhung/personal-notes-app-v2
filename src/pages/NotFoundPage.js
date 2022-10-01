import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1 className="not-found-page__title">Page is not found</h1>
      <Link className="not-found-page__button" to="/">
        Back to homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;

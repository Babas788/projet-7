import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <h1 className="error_code">404</h1>
      <h2 className="packshot">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to={`/`} className="indication">
        Retournez sur la page d'acceuil
      </Link>
    </div>
  );
}

export default Error;

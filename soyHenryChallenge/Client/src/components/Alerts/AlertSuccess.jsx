import React from "react";
import { Link } from "react-router-dom";

const AlertSuccess = () => {
  return (
    <div class="alert alert-success d-flex align-items-center" role="alert">
      <svg
        class="bi flex-shrink-0 me-2"
        width="24"
        height="24"
        role="img"
        aria-label="Success:"
      >
        <use xlink:href="#check-circle-fill" />
      </svg>
      <div>¡La encuesta se ha enviado exitosamente!</div>
      <Link to="/response" className="ms-auto">
        Editar Respuestas
      </Link>
    </div>
  );
};

export default AlertSuccess;

import React from "react";

const AlertFailure = () => {
  return (
    <div class="alert alert-danger d-flex align-items-center" role="alert">
      <svg
        class="bi flex-shrink-0 me-2"
        width="24"
        height="24"
        role="img"
        aria-label="Danger:"
      >
        <use xlink:href="#exclamation-triangle-fill" />
      </svg>
      <div>Ha ocurrido un problema. Por favor, vuelve a intentarlo.</div>
    </div>
  );
};

export default AlertFailure;

import React from "react";
import imagen from "../../public/img/imagen.png";

const OlvidePassword = () => {
  return (
    <>
      <div className="container items-center font-enca ">
        <h1 className="text-9xl text-white text-center font-enca">
          En proceso ....{" "}
          <img
            src={imagen}
            alt="imagen sobre nosotros"
            className="justify-center mx-auto"
          />
        </h1>
      </div>
    </>
  );
};

export default OlvidePassword;

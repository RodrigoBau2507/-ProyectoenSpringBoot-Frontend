import React from "react";
import imagen from "../../public/img/imagen.png";
import { Link } from "react-router-dom";
const OlvidePassword = () => {
  return (
    <>
      <div className="container mx-96 my-4 justify-center items-center font-enca ">
        <h1 className="text-9xl text-white text-center font-enca">
          En proceso ....{" "}
        </h1>

        <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 mx-14  text-xl text-black"
          to="/"
        >
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
        <Link
          className="block text-center my-5 mx-20 text-black text-xl"
          to="/registrar"
        >
          Registrar
        </Link>
      </nav>
      </div>
      <img
        src={imagen}
        alt="imagen sobre nosotros"
        className="lg:-ml-32 lg:mt-0 my-96"
      />
      

    </>
  );
};

export default OlvidePassword;

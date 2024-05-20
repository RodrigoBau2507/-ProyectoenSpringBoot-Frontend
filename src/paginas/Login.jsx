import Alerta from "../components/Alerta";
import useAuth from "../hooks/useAuth";
import clienteAxios from "../config/axios";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState(false);

  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });

      setTimeout(() => {
        setAlerta(false);
      }, 5000);

      return;
    }
    
    try {
      const { data } = await clienteAxios.post("/usuario/login", {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      setAuth(data);
      console.log(data.token);
      navigate("/admin");
    } catch (error) {
      setAlerta({
        msg: "Usuario y/o Contraseña incorrectos",
        error: true,
      });
      setTimeout(() => {
        setAlerta(false);
      }, 5000);
    }
  };

  const { msg } = alerta;
  return (
    <>
      <div>
        <h1 className="text-black font-black text-8xl text-center mx-auto max-h-dvh font-enca">
          Inicia Sesión y Comienza a {""}
          <span className="text-white font-black">
            {" "}
            Compartir tus Gustos Musicales
          </span>
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-500 py-1 px-5 mb-10 lg:mb-5 shadow-md rounded-md font-formu"
      >
        {msg && <Alerta alerta={alerta} />}
        <div className="my-5">
          <label className="uppercase text-black block text-2xl font-bold text-center">
            Email
          </label>
          <input
            type="email"
            placeholder="Email de Registro"
            className="border w-full p-3 mt-3 bg-gray-50 rounded-2xl text-2xl text-center"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label className="uppercase text-black block text-2xl font-bold text-center">
            Password
          </label>
          <input
            type="password"
            placeholder="Tu Password"
            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl text-center text-2xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Iniciar Sesión"
          className="bg-[#202355] w-full p-3 text-white uppercase font-bold hover:bg-[#15173a] cursor-pointer transition-colors  text-2xl rounded-xl my-7"
        />

        <nav className="mt-10 lg:flex lg:justify-between">
          <Link
            className="block text-center my-5 mx-6 text-xl text-black"
            to="/registrar"
          >
            ¿No tienes una cuenta? Regístrate
          </Link>
          <Link
            className="block text-center my-5 text-xl mx-6 text-black"
            to="/olvide-password"
          >
            Olvide mi Password
          </Link>
        </nav>
      </form>
    </>
  );
};

export default Login;

import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apellido, setApellido] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");

  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, email, password, apellido, repetirPassword].includes("")) {
      setAlerta({ msg: "Hay campos vacios", error: true });

      setTimeout(() => {
        setAlerta(false);
      }, 5000);
      return;
    }

    if (password !== repetirPassword) {
      setAlerta({ msg: "Los Password no son iguales", error: true });

      setTimeout(() => {
        setAlerta(false);
      }, 5000);
      return;
    }

    if (password.length < 6) {
      setAlerta({
        msg: "El Password es muy corto, agrega minimo 6 caracteres",
        error: true,
      });

      setTimeout(() => {
        setAlerta(false);
      }, 5000);
      return;
    }



    // Crear el usuario en la api
    try {
      await clienteAxios.post("/usuario", { nombre, email, password, apellido });
      setAlerta({
        msg: "Creado Correctamente, revisa tu email",
        error: false,
      });
      setTimeout(() => {
        setAlerta(false);
      }, 5000);

      
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });

      setTimeout(() => {
        setAlerta(false);
      }, 5000);
    }

    setApellido("")
    setEmail("")
    setNombre("")
    setPassword("")
    setRepetirPassword("")
  };

  const { msg } = alerta; 

  return (
    <>
      <div>
        <h1 className="text-black font-black text-8xl text-center mx-auto max-h-dvh font-enca">
          Crea tu Cuenta y Administra {""}
          <span className="text-white font-black">tus Cacniones</span>
        </h1>
      </div>

      
      <form
        onSubmit={handleSubmit} className=" bg-gray-500 py-1 px-5 mb-10 lg:mb-5 shadow-md rounded-md font-formu"
      >
        <div className="my-5">
          <label className="text-gray-950 uppercase font-bold  text-2xl">
            Nombre
          </label>
          <input
            type="text"
            placeholder="Tu Nombre"
            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl text-xl"
            value={nombre}
              onChange={(e) => setNombre(e.target.value)} 
          />
        </div>

        <div className="my-5">
          <label className="text-gray-950 uppercase font-bold  text-2xl">
            Apellido
          </label>
          <input
            type="text"
            placeholder="Tu Apellido"
            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl text-xl"
            value={apellido}
              onChange={(e) => setApellido(e.target.value)} 
          />
        </div>
        <div className="my-5">
          <label className="text-gray-950 uppercase font-bold  text-2xl">
            Email
          </label>
          <input
            type="email"
            placeholder="Email de Registro"
            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl text-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label className="text-gray-950 uppercase font-bold  text-2xl">
            Password
          </label>
          <input
            type="password"
            placeholder="Tu Password"
            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl text-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label className="text-gray-950 uppercase font-bold  text-2xl">
            Repetir Password
          </label>
          <input
            type="password"
            placeholder="Repite tu Password"
            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl text-xl"
            value={repetirPassword}
            onChange={(e) => setRepetirPassword(e.target.value)} 
          />
        </div>

        <input
          type="submit"
          value="Crear Cuenta"
          className="bg-[#202355] w-full p-3 text-white uppercase font-bold hover:bg-[#15173a] cursor-pointer transition-colors  text-2xl rounded-md"
        />

        <nav className="mt-10 lg:flex lg:justify-between">
          <Link
            className="block text-center my-5 mx-14  text-xl text-black"
            to="/"
          >
            ¿Ya tienes una cuenta? Inicia Sesión
          </Link>
          <Link
            className="block text-center my-5 mx-20 text-black text-xl"
            to="/olvide-password"
          >
            Olvide mi Password
          </Link>
        </nav>
        {msg && <Alerta alerta={alerta} />} 
      </form>
     
    </>
  );
};

export default Registrar;

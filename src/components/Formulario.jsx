import { useState, useEffect, useRef } from "react";
import Alerta from "./Alerta";
import useCanciones from "../hooks/useCanciones";

const Formulario = () => {
  const { guardarCancion, cancion } = useCanciones();
  const [nombre, setNombre] = useState("");
  const [album, setAlbum] = useState("");
  const [ano_lanzamiento, setLanzamiento] = useState("");
  const [duracion, setDuracion] = useState("");
  const [compositor, setCompositor] = useState("");
  const [productor, setProductor] = useState("");
  const [email, setEmail] = useState("");
  const [id_cancion, setId] = useState(null)

  useEffect(() => {
    if (cancion.id_cancion !== "") {
        setNombre(cancion.nombre || "");
        setAlbum(cancion.album || "");
        setLanzamiento(cancion.ano_lanzamiento || "");
        setDuracion(cancion.duracion || "");
        setCompositor(cancion.compositor || "");
        setProductor(cancion.productor || "");
        setEmail(cancion.email || "");
        setId(cancion.id_cancion || "");
        // No actualices el estado de email aquí
    }
  }, [cancion]);
  
  
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear un objeto con los datos del formulario
    const nuevoCancion = {
      nombre,
      album,
      ano_lanzamiento,
      duracion,
      compositor,
      productor,
      email,
      id_cancion
    };

    // Enviar los datos al backend utilizando la función guardarProducto del hook
    await guardarCancion(nuevoCancion);

    console.log(nuevoCancion);

    // Limpiar el formulario después de enviar los datos
    setNombre("");
    setCompositor("");
    setAlbum("");
    setDuracion("");
    setLanzamiento("");
    setProductor("");
    setEmail("");
    setId("")
  };
  
  return (
    <>
      <h2 className="font-black text-3xl text-center">
        Administrador de Canciones
      </h2>

      <p className="text-xl mt-5 mb-10 text-center">
        Añade tus Canciones Favoritas y {""}
        <span className="text-teal-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-gray-500 py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label htmlFor="nombre" className="text-gray-700 uppercase font-bold">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="number" className="text-gray-700 uppercase font-bold">
          album
          </label>
          <input
            id="album"
            type="text"
            placeholder="album"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={album}
            onChange={e => setAlbum(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="number" className="text-gray-700 uppercase font-bold">
          Compositor
          </label>
          <input
            id="compositor"
            type="text"
            placeholder="compositor"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={compositor}
            onChange={e => setCompositor(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="categoria"
            className="text-gray-700 uppercase font-bold"
          >
            Año de lanzamiento
          </label>
          <input
            id="ano_lanzamiento"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ano_lanzamiento}
            onChange={e => setLanzamiento(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="piezas" className="text-gray-700 uppercase font-bold">
          Duracion
          </label>
          <input
            id="duracion"
            type="number"
            placeholder="Duracion"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={duracion}
            onChange={e => setDuracion(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="categoria"
            className="text-gray-700 uppercase font-bold"
          >
            Productor
          </label>
          <input
            id="Productor"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={productor}
            onChange={e => setProductor(e.target.value)}
          />
        </div>
        
        <div className="mb-5">
          <label
            htmlFor="descripcion"
            className="text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <textarea
            id="email"
            placeholder="Email@emil.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-teal-600 w-full p-3 text-white uppercase font-bold hover:bg-teal-700 cursor-pointer transition-colors"
          value={cancion.id_cancion ? 'Guardar Cambios' : 'Agregar Producto'}
        />
      </form>
    </>
  );
};

export default Formulario;

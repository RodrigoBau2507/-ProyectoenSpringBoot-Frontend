import { useState, useEffect, useRef } from "react";
import Alerta from "./Alerta";
import useCanciones from "../hooks/useCanciones";

const Formulario = () => {
  const { guardarCancion, cancion } = useCanciones();
  const [nombre, setNombre] = useState("");
  const [album, setAlbum] = useState("");
  const [año_lanzamiento, setLanzamiento] = useState("");
  const [duracion, setDuracion] = useState("");
  const [compositor, setCompositor] = useState("");
  const [productor, setProductor] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [id_cancion, setId] = useState(null);
  // Implementacion de la alerta
  const [alerta, setAlerta] = useState({});

  useEffect(() => {
    if (cancion.id_cancion !== "") {
        setNombre(cancion.nombre || "");
        setAlbum(cancion.album || "");
        setLanzamiento(cancion.año_lanzamiento || "");
        setDuracion(cancion.duracion || "");
        setCompositor(cancion.compositor || "");
        setProductor(cancion.productor || "");
        setEmail(cancion.email || "");
        setUrl(cancion.url || "");
        setDescripcion(cancion.descripcion || "");

        setId(cancion.id_cancion || "");
    }
  }, [cancion]);
  
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un objeto con los datos del formulario
    if([nombre, album, duracion, compositor, productor, email, año_lanzamiento, url, descripcion].includes('')){
      
      
      
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true
      })

      setTimeout(() => {
        setAlerta(false);
      }, 5000);
      return;



    }
    // Enviar los datos al backend utilizando la función guardarProducto del hook
    guardarCancion({
      nombre,
      album,
      año_lanzamiento: new Date(año_lanzamiento).toISOString(),
      duracion,
      compositor,
      productor,
      email,
      url, 
      descripcion,
      id_cancion
    });

    // Limpiar el formulario después de enviar los datos
    
    // Función para mostrar la alerta
    
    
    setNombre("");
    setCompositor("");
    setAlbum("");
    setDuracion("");
    setLanzamiento("");
    setProductor("");
    setEmail("");
    setDescripcion("");
    setUrl("");
    setId("")

  };
 

  const {msg} = alerta
  
  return (
    <>
      <h2 className="font-black text-4xl text-center font-enca">
        Administrador de Canciones
      </h2>

      <p className="text-3xl text-white mt-5 mb-10 text-center font-formu">
      Añade tus Canciones  {""}
        <span className="text-white font-bold">Favoritas</span>
      </p>

      <form
        className="bg-gray-500 py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md font-formu"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label htmlFor="nombre" className="text-gray-950 uppercase font-bold  text-xl">
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
          <label htmlFor="album" className="text-gray-950 uppercase font-bold  text-xl">
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
          <label htmlFor="compositor" className="text-gray-950 uppercase font-bold  text-xl">
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
            htmlFor="año_lanzamiento"
            className="text-gray-950 uppercase font-bold  text-xl"
          >
            Año de lanzamiento
          </label>
          <input
            id="año_lanzamiento"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={año_lanzamiento}
            onChange={e => setLanzamiento(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="duracion" className="text-gray-950 uppercase font-bold  text-xl">
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
            className="text-gray-950 uppercase font-bold  text-xl"
          >
            Productor
          </label>
          <input
            id="Productor"
            type="text"
            placeholder="Productor"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={productor}
            onChange={e => setProductor(e.target.value)}
          />
        </div>
        
        <div className="mb-5">
          <label htmlFor="email" className="text-gray-950 uppercase font-bold  text-xl">
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email@email.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>


        <div className="mb-5">
          <label htmlFor="url" className="text-gray-950 uppercase font-bold  text-xl">
            Url
          </label>
          <input
            id="url"
            type="text"
            placeholder="https//..."
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
        </div>


        <div className="mb-5">
          <label htmlFor="descripcion" 
                className="text-gray-950 uppercase font-bold  text-xl">
            Descripción 
          </label>
          <textarea
            id="Descripción"
            type="text"
            placeholder="Descripción"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
          />
        </div>


        <input
          type="submit"
          className="bg-[#202355] w-full p-3 text-white uppercase font-bold hover:bg-[#15173a] cursor-pointer transition-colors  text-2xl"
          value={cancion.id_cancion ? 'Guardar Cambios' : 'Agregar Canción'}
        />
      </form>
      {msg && <Alerta alerta={alerta} />}
    </>
  );
};

export default Formulario;

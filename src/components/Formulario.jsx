import { useState, useEffect, useRef } from "react";
import Alerta from "./Alerta";
import useProductos from "../hooks/useProductos";

const Formulario = () => {
  const { guardarProducto, producto } = useProductos();
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("");
  const [piezas, setPiezas] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [email, setEmail] = useState("");
  const [idProducto, setId] = useState(null)

  useEffect(() => {
    if (producto.idProducto !== "") {
        setNombre(producto.nombre || "");
        setPrecio(producto.precio || "");
        setCategoria(producto.categoria || "");
        setPiezas(producto.piezas || "");
        setDescripcion(producto.descripcion || "");
        setEmail(producto.email || "");
        setId(producto.idProducto || "");
        // No actualices el estado de email aquí
    }
  }, [producto]);
  
  
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear un objeto con los datos del formulario
    const nuevoProducto = {
      nombre,
      precio,
      categoria,
      piezas,
      descripcion,
      email,
      idProducto
    };

    // Enviar los datos al backend utilizando la función guardarProducto del hook
    await guardarProducto(nuevoProducto);

    // Limpiar el formulario después de enviar los datos
    setNombre("");
    setPrecio("");
    setCategoria("");
    setPiezas("");
    setDescripcion("");
    setEmail("");
    setId("")
  };
  
  return (
    <>
      <h2 className="font-black text-3xl text-center">
        Administrador de Productos
      </h2>

      <p className="text-xl mt-5 mb-10 text-center">
        Añade tus Productos y {""}
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
            Precio
          </label>
          <input
            id="precio"
            type="number"
            placeholder="Precio"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={precio}
            onChange={e => setPrecio(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="categoria"
            className="text-gray-700 uppercase font-bold"
          >
            Categoria
          </label>
          <input
            id="categoria"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="piezas" className="text-gray-700 uppercase font-bold">
            Piezas{" "}
          </label>
          <input
            id="piezas"
            type="number"
            placeholder="piezas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={piezas}
            onChange={e => setPiezas(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="descripcion"
            className="text-gray-700 uppercase font-bold"
          >
            Descripción
          </label>
          <textarea
            id="descripcion"
            placeholder="Describe el producto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
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
            placeholder="Describe el producto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-teal-600 w-full p-3 text-white uppercase font-bold hover:bg-teal-700 cursor-pointer transition-colors"
          value={producto.idProducto ? 'Guardar Cambios' : 'Agregar Producto'}
        />
      </form>
    </>
  );
};

export default Formulario;

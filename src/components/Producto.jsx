import useProductos from "../hooks/useProductos";

const Producto = ({ producto }) => {
    const { setEdicion, eliminarProducto } = useProductos();
    const { nombre, precio, categoria, piezas, descripcion, idProducto, email } = producto;

    return (
        <div key={idProducto} className="mx-5 my-10 bg-slate-400 shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold uppercase text-teal-700 my-2">Nombre: {''}
                <span className="font-normal normal-case text-black">{nombre}</span>
            </p>
            <p className="font-bold uppercase text-teal-700 my-2">precio: {''}
                <span className="font-normal normal-case text-black">{precio}</span>
            </p>
            <p className="font-bold uppercase text-teal-700 my-2">categoria {''}
                <span className="font-normal normal-case text-black">{categoria}</span>
            </p>
            <p className="font-bold uppercase text-teal-700 my-2">piezas: {''}
                <span className="font-normal normal-case text-black">{piezas}</span>
            </p>
            <p className="font-bold uppercase text-teal-700 my-2">descripcion: {''}
                <span className="font-normal normal-case text-black">{descripcion}</span>
            </p>
            <p className="font-bold uppercase text-teal-700 my-2">Email: {''}
                <span className="font-normal normal-case text-black">{email}</span>
            </p>

            <div className="flex justify-between my-5">
                <button
                    type="button"
                    className="py-2 px-10 bg-teal-600 hover:bg-teal-700 text-white uppercase font-bold  rounded-lg"
                    onClick={() => setEdicion(producto)}
                >Editar</button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold  rounded-lg"
                    onClick={() => eliminarProducto(idProducto)}
                >Eliminar</button>
            </div>
        </div>
    );
};

export default Producto;
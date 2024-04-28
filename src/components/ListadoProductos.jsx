import useProductos from "../hooks/useProductos";
import Producto from "./Producto";

const ListadoProductos = () => {
    const { productos } = useProductos();

    return (
        <>
            {productos.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Productos</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {' '}
                        <span className="text-teal-600 font-bold">Productos</span>
                    </p>
                    {productos.map(producto => (
                        <Producto
                            key={producto.idProducto} 
                            producto={producto}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No Hay Productos</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando productos {' '}
                        <span className="text-teal-600 font-bold">y aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </>
    );
};

export default ListadoProductos;


  
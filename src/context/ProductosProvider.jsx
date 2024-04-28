import { createContext, useState, useEffect } from 'react';
import clienteAxios from '../config/axios';

const ProductosContext = createContext();
export const ProductosProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [producto, setProducto] = useState({});

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const { data } = await clienteAxios.get('/inventarioAPI/producto');
                setProductos(data);
            } catch (error) {
                console.log(error);
            }
        };
        obtenerProductos();
    }, []);

    const guardarProducto = async (producto) => {
        try {
            if (producto.idProducto) {
                const { data } = await clienteAxios.put(`/inventarioAPI/producto/${producto.idProducto}`, producto); // Corregí la ruta para la actualización
                const productosActualizado = productos.map(productoState => productoState.idProducto === data.idProducto ? data : productoState);
                setProductos(productosActualizado);
            } else {
                const { data } = await clienteAxios.post('/inventarioAPI/producto', producto);
                setProductos([...productos, data]);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const setEdicion = (producto) => {
        setProducto(producto); // Establece el estado 'producto' para la edición
    };

    const eliminarProducto = async (idProducto) => {
        const confirmar = confirm('¿Confirmas que deseas eliminar ?')

        if(confirmar) {
            try {
                await clienteAxios.delete(`/inventarioAPI/producto/${idProducto}`); // Realiza la petición DELETE al backend
                const productosActualizado = productos.filter(producto => producto.idProducto !== idProducto); // Filtra los productos para excluir el eliminado
                setProductos(productosActualizado); // Actualiza el estado de productos con la lista filtrada
            } catch (error) {
                console.log(error);
            }
        }
        
    };

    return (
        <ProductosContext.Provider
            value={{
                productos,
                guardarProducto,
                setEdicion,
                producto,
                eliminarProducto
            }}
        >
            {children}
        </ProductosContext.Provider>
    );
};

export default ProductosContext;
import { createContext, useState, useEffect } from 'react';
import clienteAxios from '../config/axios';

const CancionesContext = createContext();
export const CancionesProvider = ({ children }) => {
    const [canciones, setCanciones] = useState([]);
    const [cancion, setCancion] = useState({});

    useEffect(() => {
        const obtenerCanciones = async () => {
            try {
                const { data } = await clienteAxios.get('/cancion');
                setCanciones(data);
            } catch (error) {
                console.log(error);
            }
        };
        obtenerCanciones();
    }, []);

    const guardarCancion = async (cancion) => {
        try {
            if (cancion.id_cancion) {
<<<<<<< HEAD
                const { data } = await clienteAxios.put(`/cancion/${cancion.id_cancion}`, cancion); // Corregí la ruta para la actualización
=======
                const { data } = await clienteAxios.put(/cancion/${cancion.id_cancion}, cancion); // Corregí la ruta para la actualización
>>>>>>> f73af4e705ccc0af52a618a38a26ba3962d3e8da
                const cancionesActualizado = canciones.map(cancionState => cancionState.id_cancion === data.id_cancion ? data : cancionState);
                setCanciones(cancionesActualizado);
            } else {
                const { data } = await clienteAxios.post('/cancion', cancion);
                setCanciones([...canciones, data]);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const setEdicion = (cancion) => {
        setCancion(cancion); // Establece el estado 'producto' para la edición
    };

    const eliminarCancion = async (id_cancion) => {
        const confirmar = confirm('¿Confirmas que deseas eliminar ?')

        if(confirmar) {
            try {
<<<<<<< HEAD
                await clienteAxios.delete(`/cancion/${id_cancion}`); // Realiza la petición DELETE al backend
=======
                await clienteAxios.delete(/cancion/${id_cancion}); // Realiza la petición DELETE al backend
>>>>>>> f73af4e705ccc0af52a618a38a26ba3962d3e8da
                const cancionesActualizado = canciones.filter(canciones => canciones.id_cancion !== id_cancion); // Filtra los productos para excluir el eliminado
                setCanciones(cancionesActualizado); // Actualiza el estado de productos con la lista filtrada
            } catch (error) {
                console.log(error);
            } 
        }
        
    };

    return (
        <CancionesContext.Provider
            value={{
                canciones,
                guardarCancion,
                setEdicion,
                cancion,
                eliminarCancion
            }}
        >
            {children}
        </CancionesContext.Provider>
    );
};

export default CancionesContext;

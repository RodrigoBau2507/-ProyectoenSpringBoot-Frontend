import useCanciones from "../hooks/useCanciones";

const Cancion = ({ cancion }) => {
    const { setEdicion, eliminarCancion } = useCanciones();
    const { nombre, album, año_lanzamiento, duracion, compositor, productor, id_cancion, email, url, descripcion } = cancion;

    const formatearFecha = (fecha) => {
        return new Date(fecha).toLocaleDateString();
 
       
    }
    return (
        <div key={id_cancion} className="mx-5 my-10 bg-gray-500 py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md font-lista">
            <p className="font-bold uppercase text-black my-2 ">Nombre: {''}
                <span className="font-normal normal-case text-white">{nombre}</span>
            </p>
            <p className="font-bold uppercase text-black my-2">Album: {''}
                <span className="font-normal normal-case text-white">{album}</span>
            </p>
            <p className="font-bold uppercase text-black my-2">Año lanzamiento {''}
                <span className="font-normal normal-case text-white"> {formatearFecha(año_lanzamiento)}</span>
            </p>
            <p className="font-bold uppercase  text-black my-2">Duracion: {''}
                <span className="font-normal normal-case text-white">{duracion}</span>
            </p>
            <p className="font-bold uppercase  text-black my-2">Compositor: {''}
                <span className="font-normal normal-case text-white">{compositor}</span>
            </p>
            <p className="font-bold uppercase  text-black my-2">Productor: {''}
                <span className="font-normal normal-case text-white">{productor}</span>
            </p>
            <p className="font-bold uppercase  text-black my-2">Email: {''}
                <span className="font-normal normal-case text-white">{email}</span>
            </p>
            <p className="font-bold uppercase  text-black my-2">Url: {''}
                <span className="font-normal normal-case text-white">{url}</span>
            </p>
            <p className="font-bold uppercase  text-black my-2">Descripcion: {''}
                <span className="font-normal normal-case text-white">{descripcion}</span>
            </p>

            <div className="flex justify-between my-5">
                <button
                    type="button"
                    className="py-2 px-10 bg-teal-600 hover:bg-teal-700 text-white uppercase font-bold  rounded-lg"
                    onClick={() => setEdicion(cancion)}
                >Editar</button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold  rounded-lg"
                    onClick={() => eliminarCancion(id_cancion)}
                >Eliminar</button>
            </div>
        </div>
    );
};

export default Cancion;
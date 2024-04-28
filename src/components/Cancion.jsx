import useCanciones from "../hooks/useCanciones";

const Cancion = ({ cancion }) => {
    const { setEdicion, eliminarCancion } = useCanciones();
    const { nombre, album, ano_lanzamiento, duracion, compositor, productor, id_cancion, email } = cancion;

    

    return (
        <div key={id_cancion} className="mx-5 my-10 bg-slate-400 shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold uppercase text-teal-700 my-2">Nombre: {''}
                <span className="font-normal normal-case text-black">{nombre}</span>
            </p>
            <p className="font-bold uppercase text-teal-700 my-2">Album: {''}
                <span className="font-normal normal-case text-black">{album}</span>
            </p>
            <p className="font-bold uppercase text-teal-700 my-2">Año lanzamiento {''}
                <span className="font-normal normal-case text-black">{ano_lanzamiento}</span>
            </p>
            <p className="font-bold uppercase text-teal-700 my-2">Duracion: {''}
                <span className="font-normal normal-case text-black">{duracion}</span>
            </p>
            <p className="font-bold uppercase text-teal-700 my-2">Compositor: {''}
                <span className="font-normal normal-case text-black">{compositor}</span>
            </p>
            <p className="font-bold uppercase text-teal-700 my-2">Productor: {''}
                <span className="font-normal normal-case text-black">{productor}</span>
            </p>
            <p className="font-bold uppercase text-teal-700 my-2">Email: {''}
                <span className="font-normal normal-case text-black">{email}</span>
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
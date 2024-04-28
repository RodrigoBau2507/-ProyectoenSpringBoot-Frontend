import useCanciones from "../hooks/useCanciones";
import Cancion from "./Cancion";

const ListadoCanciones = () => {
    const { canciones } = useCanciones();

    return (
        <>
            {
                canciones.length ? (
                    <>
                        <h2 className="font-black text-3xl text-center">Listado De Canciones</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Administra tus {' '}
                            <span className="text-teal-600 font-bold">Gustos Musicales</span>
                        </p>
                        {
                            canciones.map(cancion => (
                                <Cancion
                                    key={cancion.id_cancion} 
                                    cancion={cancion}
                                />
                            ))
                        }
                    </>
                ) : (
                    <>
                        <h2 className="font-black text-3xl text-center">No Hay Canciones</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Comienza agregando Canciones {' '}
                            <span className="text-teal-600 font-bold">y aparecerán en este lugar</span>
                        </p>
                    </>
                )
            }
        </>
    );
};

export default ListadoCanciones;

  
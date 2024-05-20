import useCanciones from "../hooks/useCanciones";
import Cancion from "./Cancion";

const ListadoCanciones = () => {
  const { canciones } = useCanciones();

  return (
    <>
      {canciones.length ? (
        <>
          <h2 className="font-black text-4xl text-center font-enca">
            Listado De Canciones
          </h2>
          <p className="text-3xl text-white mt-5 mb-10 text-center font-formu">
            Administra tus{" "}
            <span className="text-white font-bold">Gustos Musicales</span>
          </p>
          {canciones.map((cancion) => (
            <Cancion key={cancion.id_cancion} cancion={cancion} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center font-formu">
            No Hay Canciones
          </h2>
          <p className="text-xl mt-5 mb-10 text-center text-white font-formu">
            Comienza agregando Canciones y{" "}
            <span className="text-white font-bold">
              {" "}
              Comienza a compartir tus gustos Musicales{" "}
            </span>
          </p>
        </>
      )}
    </>
  );
};

export default ListadoCanciones;

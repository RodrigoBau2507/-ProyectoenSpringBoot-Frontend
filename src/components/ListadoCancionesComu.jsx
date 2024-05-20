import useCanciones from "../hooks/useCanciones";
import Cancion from "./Cancion";

const ListadoCancionesCom = () => {
  const { canciones } = useCanciones();

  return (
    <>
      {canciones.length ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {canciones.map((cancion) => (
              <Cancion key={cancion.id_cancion} cancion={cancion} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center font-formu">
            No Hay Canciones
          </h2>
          <p className="text-xl mt-5 mb-10 text-center text-white font-formu">
            Espera a que otros Usuario Compartan sus Gustos Musicales{" "}
            <span className="text-white font-bold">
              {" "}
              y se Mostrara en este apartado{" "}
            </span>
          </p>
        </>
      )}
    </>
  );
};

export default ListadoCancionesCom;

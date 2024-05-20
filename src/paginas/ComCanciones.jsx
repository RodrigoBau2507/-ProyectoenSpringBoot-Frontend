import ListadoCancionesComu from "../components/ListadoCancionesComu";

const ComCanciones = () => {
  return (
    <>
      <div className="items-center">
        <h2 className="font-black text-4xl text-center font-enca">
          Listado De Canciones
        </h2>
        <p className="text-3xl text-white mt-5 mb-10 text-center font-formu">
          {" "}
          <span className="text-white font-bold">Gustos Musicales</span>
        </p>
      </div>

      <div className="flex justify-center items-center">
        <ListadoCancionesComu />
      </div>
    </>
  );
};

export default ComCanciones;

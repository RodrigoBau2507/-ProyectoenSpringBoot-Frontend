import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";

const Confirmacion = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});

  const params = useParams();
  const { token } = params;

  console.log(token);
  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `usuario/verificar/${token}`;
        const { data } = await clienteAxios(url);
        setCuentaConfirmada(true);
        setAlerta({
          msg: "Cuenta Confirmada",
        });
      } catch (error) {
        setAlerta({
          msg: "Error al confirmar la cuenta",
          error: true,
        });
      }

      setCargando(false);
    };
    confirmarCuenta();
  }, []);
  return (
    <>
      <div className="container mx-96 my-4 justify-center items-center font-enca text-3xl">
        {!cargando && <Alerta alerta={alerta} />}

        {cuentaConfirmada && (
          <Link className="block text-center my-5 text-black text-4xl" to="/">
            Iniciar Sesión
          </Link>
        )}
      </div>
      
    </>
  );
};

export default Confirmacion;

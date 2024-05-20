import { Link } from "react-router-dom";
import useAuth from '../hooks/useAuth' 
import logomusic from "../../public/img/3.png";

const Header = () => {

  const { cerrarSesion } = useAuth()
  return (
    <header className="py-10 bg-[#202355] ">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <nav>
          <Link
            to="/admin/comunidad"
            className="text-white text-sm uppercase font-bold text-justify flex items-center"
          >
            <img
              style={{ width: 200, height: 110 }}
              src={logomusic}
              alt="imagen sobre nosotros"
              className="float-left"
            />
            <h1 className=" text-4xl text-white text-center font-enca">
              Administrador de {""}
              <span className="text-white font-black"> Canciones </span>
            </h1>
          </Link>
        </nav>

        <nav className='flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0 font-enca'>
                    <Link to="/admin" className='text-white text-xl uppercase font-bold '>Canciones</Link>
                    <Link to="/admin/perfil" className='text-white text-xl uppercase font-bold'>Perfil</Link>

                    <button 
                        type="button"
                        className='text-white text-xl uppercase font-bold'
                        onClick={cerrarSesion}
                    >Cerrar Sesión</button>
                </nav>
      </div>
    </header>
  );
};

export default Header;

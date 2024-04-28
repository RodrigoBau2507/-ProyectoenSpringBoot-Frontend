import { Link } from "react-router-dom";

import imagen1 from "../../public/img/portapapeles.png";
import imagen2 from "../../public/img/usuario-de-perfil.png";
const Header = () => {

  return (
    <header className="py-10 bg-[#002c4f]">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <nav>
        <Link
            to="/admin"
            className="text-white text-sm uppercase font-bold text-justify"
          >
          <h1 className="font-bold text-2xl text-white text-center">
            Tienda en Linea{""}
            <span className="text-black font-black"> Marketplace</span>
          </h1>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

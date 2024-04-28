import { useState  } from "react";
import Formulario from "../components/Formulario";
import ListadoCanciones from "../components/ListadoCanciones";

const Canciones = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false) 
  
    return (
        <div className="flex flex-col md:flex-row">
            <button 
              type="button"
              className='bg-teal-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden  hover:bg-teal-800'
              onClick={() => setMostrarFormulario(!mostrarFormulario)} 
            ></button>
  
  
            <div className={`${mostrarFormulario ? 'block': 'hidden'} md:block md:w-1/2 lg:w-2/5 sticky top-0`}>
               <Formulario />
            </div>
            
            <div className="md:w-1/2 lg:w-3/5">
              <ListadoCanciones />
            </div> 
        </div>
    );
  };
  
export default Canciones;
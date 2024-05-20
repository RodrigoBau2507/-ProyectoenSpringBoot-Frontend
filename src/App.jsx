import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import CanciLayout from "./layout/CanciLayout";
import Canciones from "./paginas/Canciones";
import { CancionesProvider } from "./context/CancionesProvider";
import { AuthProvider } from "./context/AuthProvider";
import Login from "./paginas/Login"
import Registrar from "./paginas/Registrar";
import OlvidePassword from "./paginas/OlvidePassword";
import ComCanciones from "./paginas/ComCanciones";
import Perfil from "./paginas/Perfil";
import Confirmacion from "./paginas/Confirmacion";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CancionesProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login/>}/>
              <Route path="registrar" element={<Registrar/>}/>
              <Route path="olvide-password" element={<OlvidePassword />}/>
              <Route path="confirmacion/:token" element={<Confirmacion />}/>
            </Route>
          </Routes>


          <Routes>
            <Route path="/admin" element={<CanciLayout />}>
              <Route index element={<Canciones />} />
              <Route path="comunidad" element={<ComCanciones />}/>
              <Route path="perfil" element={<Perfil />}/>
            </Route>
          </Routes>
        </CancionesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

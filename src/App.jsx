import {BrowserRouter, Routes, Route} from "react-router-dom"
import AuthLayout from "./layout/AuthLayout"
import Canciones from "./paginas/Canciones"
import { CancionesProvider } from "./context/CancionesProvider"


function App() {
  return (
    <BrowserRouter>
    <CancionesProvider>
        <Routes>
          <Route path="/" element={<AuthLayout/>}>
            <Route index element={<Canciones/>}/>
          </Route>

        </Routes>
        </CancionesProvider>
    </BrowserRouter>
    
  )
}

export default App

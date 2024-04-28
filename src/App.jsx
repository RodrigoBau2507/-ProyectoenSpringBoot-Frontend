import {BrowserRouter, Routes, Route} from "react-router-dom"
import AuthLayout from "./layout/AuthLayout"
import Productos from "./paginas/Productos"
import { ProductosProvider } from "./context/ProductosProvider"


function App() {
  return (
    <BrowserRouter>
    <ProductosProvider>
        <Routes>
          <Route path="/" element={<AuthLayout/>}>
            <Route index element={<Productos/>}/>
          </Route>

        </Routes>
        </ProductosProvider>
    </BrowserRouter>
    
  )
}

export default App

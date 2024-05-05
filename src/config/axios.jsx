//esto sirve para crar como un tipo de variable de entorno es decir se crea una base de la url para tener un codigo mas ordenado ya que desde aqui se enviaran las llmadas 

import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}`
})

export default clienteAxios

// prueba 

//ddasdada
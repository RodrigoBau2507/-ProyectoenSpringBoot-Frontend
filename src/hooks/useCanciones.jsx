import { useContext } from 'react'
import CancionesContext from '../context/CancionesProvider'

const useCanciones = () => {
    return useContext(CancionesContext)
}

export default useCanciones
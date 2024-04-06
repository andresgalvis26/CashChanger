import { useEffect, useState } from 'react' // Importamos useEffect y useState desde React
import axios from 'axios'; // Importamos la biblioteca Axios para realizar solicitudes HTTP

const useAxios = (url) => { // Definimos el hook personalizado useAxios y lo configuramos para aceptar una URL como argumento

    // Definimos estados para almacenar los datos, errores y estado de carga de la solicitud
    const [data, setData] = useState([]) // Estado para almacenar los datos de la respuesta
    const [error, setError] = useState(null) // Estado para almacenar posibles errores en la solicitud
    const [loading, setLoading] = useState(false) // Estado para indicar si la solicitud está en curso

    useEffect(() => { // Utilizamos useEffect para realizar la solicitud HTTP cuando la URL cambia o cuando se monta el componente

        const fetchData = async () => { // Definimos una función asincrónica fetchData para realizar la solicitud HTTP
            try { // Utilizamos un bloque try-catch para manejar posibles errores en la solicitud
                setLoading(true); // Establecemos loading en true para indicar que la solicitud está en curso

                const response = await axios.get(url) // Realizamos la solicitud HTTP utilizando Axios y almacenamos la respuesta en la variable response
                setData(response.data) // Almacenamos los datos de la respuesta en el estado data

            } catch (error) { // Capturamos cualquier error que ocurra durante la solicitud y lo almacenamos en el estado error
                setError(error)
            } finally { // Utilizamos el bloque finally para garantizar que setLoading se establezca en false independientemente del resultado de la solicitud
                setLoading(false) // Establecemos loading en false para indicar que la solicitud ha finalizado
            }
        }

        fetchData(); // Llamamos a la función fetchData para realizar la solicitud HTTP cuando el componente se monta o cuando la URL cambia

    }, [url]) // Especificamos que useEffect se ejecute cada vez que la URL cambie

    // Devolvemos un array con los datos, el error y el estado de carga para que el componente que utiliza el hook pueda acceder a ellos
    return [data, error, loading]
}

export default useAxios // Exportamos el hook personalizado useAxios para poder utilizarlo en otros componentes

import { useState } from 'react';
import useAxios from '../hooks/useAxios';

// Componente funcional SelectCountry que recibe las props value y setValue
const SelectCountry = (props) => {
    // Extraemos las props value y setValue
    const { value, setValue } = props;

    // Consultar a la API de países (restcountries API) usando el hook personalizado useAxios
    const [data, loading, error] = useAxios('https://restcountries.com/v3.1/all');

    // Si se está cargando, mostramos un indicador de carga
    if (loading) {
        return <div className="bg-gray-200 rounded-md h-12 animate-pulse"></div>;
    }

    // Si hay un error en la carga de los datos, mostramos un mensaje de error
    if (error) {
        return (
            <div>`❌ Something went wrong! ❌`</div>
        );
    }

    // Filtrar los países que tengan la propiedad "currencies"
    const dataFilter = data.filter((item => "currencies" in item));

    // Transformamos los datos filtrados en un array de strings que serán opciones en el componente select
    const dataCountries = dataFilter.map((item) => {
        return `${item.flag} ${Object.keys(item.currencies)[0]} - ${item.name.common}`;
    }).sort();

    // Renderizamos el componente select con las opciones generadas
    return (
        <div className="grid grid-cols-1 md:grid-cols-[12] mb-4 relative">
            <select
                value={value} // Valor seleccionado
                onChange={(e) => setValue(e.target.value)} // Manejador de cambio para actualizar el valor seleccionado
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
                {dataCountries.map((country) => (
                    <option key={country} value={country}>{country}</option> // Renderizamos las opciones de la lista desplegable
                ))}
            </select>
        </div>
    );
}

export default SelectCountry;

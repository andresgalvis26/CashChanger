import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { CurrencyContext } from '../context/CurrencyContext'

const InputAmount = () => {
    // Obtenemos el estado de la cantidad de moneda de origen y el método para actualizarlo desde el contexto
    const { firstAmount, setFirstAmount } = useContext(CurrencyContext);

    return (
        <div className="grid md:grid-cols-[12] mb-4 relative"> {/* Utilizamos grid-cols-[12] para ocupar todo el ancho en dispositivos grandes */}
            {/* Contenedor para el icono de dólar */}
            <div className="absolute left-0 top-0 h-full flex items-center pl-5">
                <FontAwesomeIcon icon={faDollarSign} /> {/* Renderizamos el icono de dólar */}
            </div>
            {/* Campo de entrada de cantidad */}
            <input
                type="number"
                min={1}
                id="floating_filled"
                value={firstAmount} // Valor del campo de entrada establecido como la cantidad de moneda de origen
                onChange={(e) => setFirstAmount(e.target.value)} // Manejador de cambio para actualizar la cantidad de moneda de origen
                className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer pl-10" // Clases de Tailwind CSS para estilos
                placeholder=" " // Espacio reservado para el campo de entrada
            />
            {/* Etiqueta para el campo de entrada */}
            <label
                htmlFor="floating_filled"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto pl-10" // Clases de Tailwind CSS para estilos
            >
                Monto o valor {/* Texto de la etiqueta */}
            </label>
        </div>
    )
}

export default InputAmount

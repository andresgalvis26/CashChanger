import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CurrencyContext } from '../context/CurrencyContext';

// Componente funcional SwitchCurrency
const SwitchCurrency = () => {
    // Obtenemos los estados y métodos de actualización del contexto CurrencyContext
    const {
        fromCurrency, // Estado de la moneda de origen
        setFromCurrency, // Método para actualizar el estado de la moneda de origen
        toCurrency, // Estado de la moneda de destino
        setToCurrency // Método para actualizar el estado de la moneda de destino
    } = useContext(CurrencyContext);

    // Función para cambiar las monedas de origen y destino
    const handleSwitch = () => {
        // Intercambiamos los valores de las monedas
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    }

    // Renderizamos el botón con el ícono de flecha para cambiar las monedas
    return (
        <div>
            <button onClick={handleSwitch}>
                <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            </button>
        </div>
    );
}

export default SwitchCurrency;

import { createContext, useState } from 'react';

// Creamos un nuevo contexto llamado CurrencyContext
export const CurrencyContext = createContext();

// Definimos el componente CurrencyProvider
const CurrencyProvider = ({ children }) => {
    // Definimos dos estados locales: fromCurrency y toCurrency, ambos inicializados como cadenas vacías
    const [fromCurrency, setFromCurrency] = useState('🇺🇸 USD - United States');
    const [toCurrency, setToCurrency] = useState('🇬🇧 GBP - United Kingdom');
    const [firstAmount, setFirstAmount] = useState("");

    // Creamos un objeto 'value' que contiene los estados y los métodos para actualizarlos
    const value = {
        fromCurrency, // Estado de la moneda de origen
        setFromCurrency, // Método para actualizar el estado de la moneda de origen
        toCurrency, // Estado de la moneda de destino
        setToCurrency, // Método para actualizar el estado de la moneda de destino
        firstAmount, // Estado de la cantidad de la moneda de origen
        setFirstAmount, // Método para actualizar el estado de la cantidad de la moneda de origen
    };

    // Devolvemos el proveedor del contexto con el valor proporcionado y los hijos del componente
    return (
        <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
    );
};

// Exportamos el componente CurrencyProvider como el valor predeterminado
export default CurrencyProvider;

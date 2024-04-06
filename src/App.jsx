import { useContext, useEffect, useState } from 'react'
import './App.css'
import InputAmount from './components/InputAmount'
import SelectCountry from './components/SelectCountry'
import SwitchCurrency from './components/SwitchCurrency'
import { CurrencyContext } from './context/CurrencyContext'
import CashChangerLogo from '/icono.png'
import axios from 'axios'
import Swal from 'sweetalert2'

function App() {
    // Utilizamos useContext para acceder al contexto de CurrencyContext y obtener los estados y métodos necesarios
    const {
        fromCurrency, // Estado de la moneda de origen
        setFromCurrency, // Método para actualizar el estado de la moneda de origen
        toCurrency, // Estado de la moneda de destino
        setToCurrency, // Método para actualizar el estado de la moneda de destino
        firstAmount, // Estado de la cantidad de la moneda de origen
    } = useContext(CurrencyContext);

    // Estado local para almacenar el resultado de la conversión
    const [resultCurrency, setResultCurrency] = useState(0)

    // Extraemos el código de las monedas de origen y destino
    const codeFromCurrency = fromCurrency.split(' ')[1]
    const codeToCurrency = toCurrency.split(' ')[1]

    // useEffect para realizar la llamada a la API cuando cambian los estados relevantes
    useEffect(() => {
        // Verificamos si hay una cantidad de moneda de origen ingresada
        if (firstAmount) {
            // Realizamos la llamada a la API para obtener el tipo de cambio
            axios("https://api.freecurrencyapi.com/v1/latest", {
                params: {
                    apikey: "fca_live_Mdbnp8RbJL8UutyH2QFB6bp5pGlfwo1vApT4NVf1",
                    base_currency: codeFromCurrency,
                    currencies: codeToCurrency
                }
            })
                .then((response) => setResultCurrency(response.data.data[codeToCurrency])) // Actualizamos el resultado con el valor obtenido de la API
                .catch((error) => {
                    console.error(error) // Manejamos los errores en la consola
                    // Mostramos una alerta de error con SweetAlert2
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        // text: 'Ha ocurrido un error al obtener el tipo de cambio. Por favor, intenta de nuevo más tarde.',
                        text: 'Ha ocurrido un error al realizar el tipo de cambio. Esta moneda no es válida. Por favor, intenta de nuevo con otra moneda.'
                    })
                })
        }
    }, [firstAmount, codeFromCurrency, codeToCurrency]) // Ejecutamos este efecto cuando cambian estos estados

    // Renderizamos el componente
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="bg-slate-50 max-w-xl mx-auto text-center text-gray-900 min-h-[20rem] rounded-md p-10 shadow-lg relative">
                {/* Renderizamos el logo */}
                <img src={CashChangerLogo} alt="Cash Changer Logo" className="w-20 h-20 mx-auto mb-4 rounded-lg" />
                {/* Renderizamos el título y subtítulo */}
                <h3 className='text-3xl font-bold mb-4'>Cash Changer</h3>
                <h5 className='text-2xl font-bold mb-8'>¡Tu dinero al día con tu conversor!</h5>
                {/* Renderizamos los componentes InputAmount, SelectCountry y SwitchCurrency */}
                <div className='grid grid-cols-1 gap-4'>
                    <InputAmount />
                    <div className='flex flex-col'>
                        <label htmlFor="fromCurrency" className='text-sm mb-1 text-start font-thin'>From</label>
                        <SelectCountry value={fromCurrency} setValue={setFromCurrency} />
                    </div>
                    <SwitchCurrency />
                    <div className='flex flex-col'>
                        <label htmlFor="toCurrency" className='text-sm mb-1 text-start font-thin'>To</label>
                        <SelectCountry value={toCurrency} setValue={setToCurrency} />
                    </div>
                </div>

                {/* Si hay una cantidad de moneda de origen ingresada, mostramos el resultado de la conversión */}
                {firstAmount ? (
                    <div className="text-left mt-4">
                        <p>{firstAmount} {fromCurrency} =</p>
                        <p className="text-xl font-bold">{resultCurrency * firstAmount} {toCurrency}</p>
                    </div>
                ) : ""}
            </div>
        </div>
    )
}

export default App
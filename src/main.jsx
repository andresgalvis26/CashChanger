import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CurrencyProvider from './context/CurrencyContext.jsx'

// Utilizamos ReactDOM.createRoot() para crear un nuevo árbol de elementos de React en el nodo del DOM con el id "root"
ReactDOM.createRoot(document.getElementById('root')).render(
  // Utilizamos <React.StrictMode> para activar el modo estricto de React
  <React.StrictMode>
    {/* Utilizamos <CurrencyProvider> para envolver la aplicación y proporcionar el contexto de moneda a todos los componentes */}
    <CurrencyProvider>
      {/* Renderizamos componente principal de la aplicación dentro del proveedor de contexto */}
      <App />
    </CurrencyProvider>
  </React.StrictMode>,
);

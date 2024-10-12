import React from 'react';  // Importa React
import ReactDOM from 'react-dom/client';  // Importa ReactDOM de 'react-dom/client'
import { HashRouter } from 'react-router-dom';  // Elimina BrowserRouter ya que no lo estás usando
import App from './App';
import reportWebVitals from './reportWebVitals';

// Usa el root para renderizar el contenido
const root = ReactDOM.createRoot(document.getElementById('root'));  // Crea el root correctamente
root.render(  // Usa root.render en lugar de ReactDOM.render
  <React.StrictMode>
    <HashRouter>  {/* Usando HashRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
);

// Si deseas medir el rendimiento en tu aplicación, pasa una función
// para registrar resultados (por ejemplo: reportWebVitals(console.log))
// o enviar a un punto de análisis. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();

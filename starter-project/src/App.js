import './App.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom"; // Cambié Switch por Routes
import About from './components/About';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav>
            <ul id="navigation">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes> {/* Cambié Switch por Routes */}
          <Route path="/" element={<Home />} /> {/* Ahora se usa el atributo element */}
          <Route path="/about" element={<About />} />
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </div>
    );
  }
}

export default App;

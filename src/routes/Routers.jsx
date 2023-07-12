import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Lineas from '../pages/Lineas';
import Estaciones from '../pages/Estaciones';
import Comunas from '../pages/Comunas';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lineas" element={<Lineas />} />
            <Route path="/estaciones" element={<Estaciones />} />
            <Route path="/comunas" element={<Comunas />} />
        </Routes>
    )
}

export default Routers;
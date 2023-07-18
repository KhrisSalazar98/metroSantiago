import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Lineas from '../pages/Lineas';
import Comunas from '../pages/Comunas';
import DetallesEstacion from '../pages/DetallesEstacion';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/redMetro" element={<Lineas />} />
            <Route path="/redMetro/detalles_estacion/:id_linea/:id_estacion" element={<DetallesEstacion />} />
            <Route path="/comunas" element={<Comunas />} />
        </Routes>
    )
}

export default Routers;
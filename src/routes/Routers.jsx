import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Lineas from '../pages/Lineas';
import Comunas from '../pages/Comunas';
import DetallesEstacion from '../pages/DetallesEstacion';
import DetallesComuna from '../pages/DetallesComuna';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/redMetro" element={<Lineas />} />
            {/* <Route path="/redMetro/detalles_estacion/:id_linea/:id_estacion" element={<DetallesEstacion />} /> */}
            <Route path="/detalles_estacion/:id_linea/:id_estacion" element={<DetallesEstacion />} />
            <Route path="/comunas" element={<Comunas />} />
            {/* <Route path="/comunas/detalles_comuna/:id_comuna" element={<DetallesComuna />} /> */}
            <Route path="/detalles_comuna/:nombreComuna" element={<DetallesComuna />} />
        </Routes>
    )
}

export default Routers;
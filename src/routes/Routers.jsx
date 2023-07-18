import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Lineas from '../pages/Lineas';
import Comunas from '../pages/Comunas';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/redMetro" element={<Lineas />} />
            <Route path="/comunas" element={<Comunas />} />
        </Routes>
    )
}

export default Routers;
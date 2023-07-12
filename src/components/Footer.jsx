import React from 'react';
import imgLogo from '../assets/img/metroSantiago2.png';


import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='mt-5 pt-4'>
            <div className="text-center">
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-12 col-sm-12 col-lg-3 mb-3 px-0'>
                            <img className='d-none d-lg-inline logo' src={imgLogo} alt="logo" />
                            <img className="d-inline d-lg-none logo_mobile" src={imgLogo} alt="Logo Metro de Santiago" /> 
                        </div>

                        <div className='col-12 col-sm-12 col-lg-8 mb-3 px-0 d-flex justify-content-center align-items-center'>
                            <div className="row w-100">
                                <div className='col-12 col-sm-12 col-lg-3 mb-3'>
                                    <Link className='footer_item' to={"/"}>Home</Link>
                                </div>

                                <div className='col-12 col-sm-12 col-lg-3 mb-3'>
                                    <Link className='footer_item' to={"/lineas"}>Líneas</Link>
                                </div>

                                <div className='col-12 col-sm-12 col-lg-3 mb-3'>
                                    <Link className='footer_item' to={"/estaciones"}>Estaciones</Link>
                                </div>

                                <div className='col-12 col-sm-12 col-lg-3 mb-3'>
                                    <Link className='footer_item' to={"/comunas"}>Comunas</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;
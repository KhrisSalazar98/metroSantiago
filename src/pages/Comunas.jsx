import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { readComunas } from '../redux/features/comuna/comunaSlice';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity } from '@fortawesome/free-solid-svg-icons';

import Helmet from '../components/Helmet';
import Loading from '../components/Loading';
import Footer from '../components/Footer';

import { imgs } from '../assets/js/imagenesComunas';

const Comunas = () => {

    const dispatch = useDispatch();

    const {data, loading} = useSelector((state) => state.comuna);

    useEffect(() => {
        dispatch(readComunas());
    },[dispatch]);

    // console.log(data.comunas);

    return (

        <Helmet title={"Comunas"}>
            <>
                {loading ? (
                    <Loading />
                ):
                    <>
                        <div className="mt-5 container-lg">

                            <h2 className='text-center color_principal'><strong><FontAwesomeIcon size="lg" icon={faCity} /> Comunas</strong></h2>
                            <div className="row mt-5">

                                {data.comunas?.map((comuna,index) => (
                                    <div key={index} className='col-12 col-sm-6 col-md-4 mb-4 px-0'>
                                        <Link to={`/detalles_comuna/${comuna.nombreComuna}`}>
                                            <div className='m-3 py-4 rounded-3 bg_color_secundario comuna_container'>
                                                <h3 className='h3_comuna text-center color_principal'><strong>{comuna.nombreComuna}</strong></h3>
                                                <div className="row mt-3 mt-lg-5">
                                                    <div className='col-12 col-sm-12 col-xl-6 mb-3'>
                                                        <p className='text-center color_principal'><strong>Sector: <span className='text-black'>{comuna.sectorComuna}</span></strong></p>
                                                    </div>

                                                    <div className='col-12 col-sm-12 col-xl-6 mb-3'>
                                                        <p className='text-center color_principal'><strong>N° de estaciones: <span className='text-black'>{comuna.estaciones.length}</span></strong></p>
                                                    </div>

                                                    <div className='text-center'>
                                                        <img className='rounded-2 imgComuna' src={imgs.filter((comunaImg) => comunaImg.name === comuna.nombreComuna)[0].img[1]} alt={comuna.nombreComuna} />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        
                                    </div>
                                ))}
                                
                            </div>
                        </div>

                        <Footer />
                    </>
                }
            </>
           
        </Helmet>
    )
}

export default Comunas;
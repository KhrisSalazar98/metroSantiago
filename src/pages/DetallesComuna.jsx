import React, {useEffect} from 'react';


import { Link, useNavigate, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getComuna } from '../redux/features/comuna/comunaSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCity, faChevronLeft, faChevronRight, faTrainSubway} from '@fortawesome/free-solid-svg-icons';

import Loading from '../components/Loading';
import Helmet from '../components/Helmet';

import { imgs } from '../assets/js/imagenesComunas';
import Footer from '../components/Footer';

const DetallesComuna = () => {

    const params = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {comunaFound, loading} = useSelector((state) => state.comuna);

    // const validarComuna = () => parseInt(params.id_comuna) <= 0 || parseInt(params.id_comuna) >= 26 || isNaN(parseInt(params.id_comuna));

    useEffect(() => {
        // if(validarComuna()) {
        //     navigate("/comunas");
        // }
        
        // if(!validarComuna()){
        //     dispatch(getComuna(params));
        // }

        dispatch(getComuna(params));

    }, [dispatch]);

    // console.log(comunaFound);

    return (
        <>
            {loading ? (
                <Loading />
            ):
                comunaFound && (
                    <Helmet title={`Comuna de ${comunaFound.nombreComuna}`}>
                        <div className='container mt-5'>
                            
                            {/* Nombre de la comuna */}
                            <h2 className='mt-5 text-center color_principal'><strong><FontAwesomeIcon className='me-2' size="lg" icon={faCity} />Comuna de "{comunaFound.nombreComuna}"</strong></h2>


                            {/* Sector de la comuna */}
                            <p className='mt-4 text-center color_principal detallesComuna'>
                                <strong>
                                    Sector: <span className='text-black'>{comunaFound.sectorComuna}</span>
                                </strong>
                            </p>


                            {/* Carousel imágenes */}
                            <div className={`mt-5 row justify-content-center`}>

                                <div className='col-12 col-sm-12 col-lg-12 mb-5'>
                                    
                                    <div className={`mt-3 row justify-content-center`}>
                                        
                                            <div className='col-12 col-sm-12 col-md-6 col-lg-4 mb-3 mb-sm-5'>
                                                
                                                

                                                    <div id={`carouselExampleAutoplaying_1`} className="carousel slide" data-bs-ride="carousel">
                                                        <div className="carousel-inner">
        
                                                            <div className="carousel-item text-center active">
                                                                <img className={`rounded-2 imgSlideDatailtsStation`} src={imgs.filter((comunaImg) => comunaImg.name === comunaFound.nombreComuna)[0].img[1]} alt={comunaFound.nombreComuna} />
                                                            </div>
                                                            <div className="carousel-item text-center">
                                                                <img className={`rounded-2 imgSlideDatailtsStation`} src={imgs.filter((comunaImg) => comunaImg.name === comunaFound.nombreComuna)[0].img[0]} alt={comunaFound.nombreComuna} />
                                                            </div>
          
                                                        </div>
                                                        <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleAutoplaying_1`} data-bs-slide="prev">
                                                            <FontAwesomeIcon className={`color_principal`} size="xl" icon={faChevronLeft} />
                                                            <span className="visually-hidden">Previous</span>
                                                        </button>
                                                        <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleAutoplaying_1`} data-bs-slide="next">    
                                                            <FontAwesomeIcon className={`color_principal`} size="xl" icon={faChevronRight} />
                                                            <span className="visually-hidden">Next</span>
                                                        </button>
                                                    </div>
                                               
                                                
                                                
                                            </div>
                                    
                                    </div>
                                    
                                </div>

                                
                            </div>


                            {/* Estaciones situadas en la comuna */}
                            {comunaFound.estaciones && (
                                <div className='my-4'>
                                    <h3 className='mb-4 text-center color_principal'><FontAwesomeIcon className='me-2' size="lg" icon={faTrainSubway} /> Estaciones</h3>



                                    <div className='row justify-content-center my-5'>
                                        {comunaFound.estaciones.map((estacion,index) => (
                                            <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-3 text-center " key={index}>
                                                <div className='py-3 rounded-3 detallesComuna_estacionContainer'>
                                                    <strong>{estacion.nombreEstacion}</strong>

                                                    {estacion.lineas.map((l,index) => (
                                                        <Link key={index} className={`d-none d-xxl-inline ${l.linea}`} to={`/detalles_estacion/${l.id_linea}/${l.id_estacion}`}>
                                                            <span className='rounded-circle ms-2'>{l.linea}</span>
                                                        </Link>
    
                                                    ))}

                                                    <div className='mt-4 d-xxl-none'>
                                                        {estacion.lineas.map((l,index) => (
                                                            <Link key={index} className={`${l.linea}`} to={`/detalles_estacion/${l.id_linea}/${l.id_estacion}`}>
                                                                <span className='rounded-circle ms-2'>{l.linea}</span>
                                                            </Link>
    
                                                        ))}
                                                    </div>
                                                </div> 
                                            </div>    
                                            
                                        ))}
                                    </div>
                                    
                                </div>

                            )}


                            {/* Ubicación de la comuna */}
                            {comunaFound.mapa && (
                                <div className='text-center'>
                                    <h3 className="text-center color_principal"><FontAwesomeIcon size="xl" icon={faLocationDot} /> Ubicación:</h3>
                                    <iframe
                                        className={`rounded-3 iframe_comuna`}
                                        src={comunaFound.mapa}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"

                                    />
                                </div>
                            )}

                        </div>

                        <Footer />
                    </Helmet>
                ) 
            }
        </>
    )
}

export default DetallesComuna;
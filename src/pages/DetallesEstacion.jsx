import React, {useEffect} from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getStation} from '../redux/features/linea/lineaSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCity, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

import Loading from '../components/Loading';
import Helmet from '../components/Helmet';

import { imgs } from '../assets/js/imagenesComunas';
import Footer from '../components/Footer';

const DetallesEstacion = () => {

    const params = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {stationFound, loading} = useSelector((state) => state.linea);

    const validarLinea = () => parseInt(params.id_linea) <= 0 || parseInt(params.id_linea) >= 8 || isNaN(parseInt(params.id_linea));
    const validarEstacion = () => parseInt(params.id_estacion) <= 0 || parseInt(params.id_estacion) >= 137 || isNaN(parseInt(params.id_estacion));

    useEffect(() => {

        if(validarLinea() || validarEstacion()) {
            navigate("/redMetro");
        }
        
        if(!validarLinea() || !validarEstacion()){
            dispatch(getStation(params));
        }

    }, [dispatch]);

    // console.log(stationFound);

    return (
        <>
            {loading ? (
                <Loading />
            ):

                stationFound && (
                    <Helmet title={`Estación ${stationFound.estacion.nombreEstacion}`}>
                        <div className="container mt-5">
                            <div className='mb-2 text-center lineSymbolMobile_container'>
                                <span className={`rounded-circle detallesEstacion_lineSymbol ${stationFound.classLinea}`}>{stationFound.nombreLinea2}</span>
                            </div>
                            <h2 className={`text-center pt-lg-5 ${stationFound.classLinea}`}><strong>  {stationFound.estacion.nombreEstacion} <span className={`rounded-circle lineSymbolDesktop_container ${stationFound.classLinea}`}>{stationFound.nombreLinea2}</span></strong></h2>

                            <p className='mt-4 text-center detallesEstacion_combinacion'>
                                <strong className={`${stationFound.classLinea}`}> 
                                    {stationFound.estacion.combinaciones.length > 1 ? "Combinaciones" : "Combinación"}:
                                </strong>
                                <br className='lineSymbolMobile_container' />
                                {stationFound.estacion.combinaciones.map((combinacion,index) =>(
                                    <span className={`ms-1 combination_symbol ${combinacion.classCombinacion}`} key={index}>{combinacion.nombreCombinacion} <span className='rounded-circle'>{combinacion.nombreCombinacion2}</span></span> 
                                ))}
                                
                            </p>

                            <div className={`mt-5 row justify-content-center`}>

                                {/* Comunas */}
                                <div className='col-12 col-sm-12 col-lg-12 mb-5'>
                                    <h3 className={`text-center mb-3 mb-lg-5 ${stationFound.classLinea}`}><strong><FontAwesomeIcon size="lg" icon={faCity} /> {stationFound.estacion.comunas.length === 1 ? "Comuna" : "Comunas"}</strong></h3>

                                    <div className={`mt-3 row justify-content-center`}>
                                        {stationFound.estacion.comunas.map((comuna,index) => (
                                            <div key={index} className='col-12 col-sm-12 col-md-6 col-lg-4 mb-3 mb-sm-5'>
                                                <h4 className={`text-center ${stationFound.classLinea}`}><strong>{comuna}</strong></h4>

                                                <div id={`carouselExampleAutoplaying_${index}`} className="carousel slide" data-bs-ride="carousel">
                                                    <div className="carousel-inner">
                                                        
                                                        <div className="carousel-item text-center active">
                                                            <img className={`rounded-2 imgSlideDatailtsStation`} src={imgs.filter((comunaImg) => comunaImg.name === comuna)[0].img[1]} alt={comuna} />
                                                        </div>
                                                        <div className="carousel-item text-center">
                                                            <img className={`rounded-2 imgSlideDatailtsStation`} src={imgs.filter((comunaImg) => comunaImg.name === comuna)[0].img[0]} alt={comuna} />
                                                        </div>
                                                          
                                                    </div>
                                                    <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleAutoplaying_${index}`} data-bs-slide="prev">
                                                        <FontAwesomeIcon className={`${stationFound.classLinea}`} size="xl" icon={faChevronLeft} />
                                                        <span className="visually-hidden">Previous</span>
                                                    </button>
                                                    <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleAutoplaying_${index}`} data-bs-slide="next">    
                                                        <FontAwesomeIcon className={`${stationFound.classLinea}`} size="xl" icon={faChevronRight} />
                                                        <span className="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                                
                                            </div>
                                        ))}
                                    </div>
                                    
                                    
                                </div>

                                
                            </div>

                            {stationFound.estacion.mapa && (
                                <div className='text-center'>
                                    <h3 className={`${stationFound.classLinea}`}><strong><FontAwesomeIcon size="xl" icon={faLocationDot} /> Ubicación:</strong></h3>
                                    <iframe
                                        className={`rounded-3 ${stationFound.classLinea}`}
                                        src={stationFound.estacion.mapa}
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

export default DetallesEstacion;
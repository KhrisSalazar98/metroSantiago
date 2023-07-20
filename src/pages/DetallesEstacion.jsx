import React, {useEffect} from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getStation} from '../redux/features/linea/lineaSlice';
import Loading from '../components/Loading';
import Helmet from '../components/Helmet';

import { imgs } from '../assets/js/imagenesComunas';

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

    console.log(stationFound);

    return (
        <>
            {loading ? (
                <Loading />
            ):

                stationFound && (
                    <Helmet title={`Estación ${stationFound.estacion.nombreEstacion}`}>
                        <div className="container mt-5">
                            <h2 className={`py-4 rounded-pill text-center ${stationFound.classLinea}`}><strong>{stationFound.estacion.nombreEstacion} ({stationFound.nombreLinea2})</strong></h2>

                            <div className='mt-5 row justify-content-center'>
                                <div className='col-12 col-sm-12 col-lg-6'>
                                    <h3 className={`mb-5 text-center ${stationFound.classLinea}`}><strong>{stationFound.estacion.comunas.length === 1 ? "Comuna" : "Comunas"}</strong></h3>
                                
                                    <div className='mt-3 row justify-content-center'>
                                        {stationFound.estacion.comunas.map((comuna,index) => (
                                            <div key={index} className='col-12 col-sm-12 col-md-6'>
                                                <h4 className='text-center'>{comuna}</h4>

                                                <div id={`carouselExampleAutoplaying_${index}`} className="carousel slide" data-bs-ride="carousel">
                                                    <div className="carousel-inner">
                                                        
                                                        <div className="carousel-item text-center active">
                                                            <img className='imgSlideDatailtsStation' src={imgs.filter((comunaImg) => comunaImg.name === comuna)[0].img[1]} alt={comuna} />
                                                        </div>
                                                        <div className="carousel-item text-center">
                                                            <img className='imgSlideDatailtsStation' src={imgs.filter((comunaImg) => comunaImg.name === comuna)[0].img[0]} alt={comuna} />
                                                        </div>
                                                        
                                                        
                                                    </div>
                                                    <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleAutoplaying_${index}`} data-bs-slide="prev">
                                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span className="visually-hidden">Previous</span>
                                                    </button>
                                                    <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleAutoplaying_${index}`} data-bs-slide="next">
                                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span className="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                                
                                            </div>
                                        ))}
                                    </div>
                                    
                                    
                                </div>
                                <div className={`col-12 col-sm-12 col-lg-6 ${stationFound.estacion.combinaciones.length >= 1 ? "" : "d-none"}`}>
                                    <h3 className={`text-center ${stationFound.classLinea}`}><strong>{stationFound.estacion.combinaciones.length > 1 ? "Combinaciones" : "Combinación"}</strong></h3>

                                    <ul>
                                        {stationFound.estacion.combinaciones.map((combinacion,index) =>(
                                            <li key={index}>{combinacion.nombreCombinacion}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Helmet>
                    
                )
                
                        
            }
        </>
    )
}

export default DetallesEstacion;
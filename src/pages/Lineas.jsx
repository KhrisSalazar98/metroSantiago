import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { readLines } from '../redux/features/linea/lineaSlice';

import Helmet from '../components/Helmet';
import Loading from '../components/Loading';



const Lineas = () => {

    const dispatch = useDispatch();

    const {dataLines, loading} = useSelector((state) => state.linea);
    

    useEffect(() => {
        dispatch(readLines()); 
    },[dispatch]);

  
    return (
        <Helmet title={"Líneas"}>
            <>
                {loading ? (
                    <Loading />
                ):
                    <div className='container mt-5'>
                        <h2 className='text-center color_principal'><strong>Red Metro de Santiago</strong></h2>
                        
                        {/* Listado de estaciones Desktop */}
                        <div className='d-none d-lg-flex mt-5 row'>
                            {dataLines.map((line,index) => (
                                <div key={index} className={`col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 desktop ${line.classLinea}`}>
                                    <div className='m-0 m-lg-3 rounded-3 line_container'>
                                        <div className='line_title p-2 rounded-3'>
                                            <h3 className='mb-2 pt-3 text-center text-white'>{line.nombreLinea} ({line.nombreLinea2})</h3>
                                            <p className='mb-3 text-center text-white estacionInicialFinal_txtMobile'>{line.estacionInicial} - {line.estacionFinal}</p>
                                        </div>
                                        
                                        <ul className='py-4 text-white'>
                                            {line.estaciones.map((estacion) => (
                                                <li className='mb-2 li_station' key={estacion.id_estacion}>
                                                    
                                                    {estacion.nombreEstacion} {" "}
                                                    {estacion.combinaciones && estacion.combinaciones.map((comb, index) => (
                                                        <figure className={`d-inline combinacion ${comb.classCombinacion}`} key={index}>
                                                            <span className='txt_xl'>comb.</span>{" "}
                                                            <span className="rounded-circle line_symbol">{comb.nombreCombinacion2}</span>
                                                        </figure>
                                                        
                                                            
                                                        
                                                    ))}
                                                    
                                                    
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>


                        {/* Listado de estaciones Mobile */}
                        <div className='mt-5 d-lg-none'>
                            <div className="accordion" id="accordionExample">

                                {dataLines.map((line,index) => (
                                    <div key={index} className={`accordion-item mb-4 rounded-3 ${line.classLinea}`}>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button d-flex flex-column p-2 rounded-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse_${line.id_linea}`} aria-expanded="true" aria-controls="collapseOne">
                                                <span className='mb-2'>{line.nombreLinea} ({line.nombreLinea2})</span>
                                                <span className='d-block estacionInicialFinal_txtMobile'>{line.estacionInicial} - {line.estacionFinal}</span>
                                            </button>
                                        </h2>
                                        <div id={`collapse_${line.id_linea}`} className="accordion-collapse collapse rounded-bottom-3" data-bs-parent="#accordionExample">
                                            <div className="accordion-body rounded-bottom-3">
                                                <ul className='py-4 text-white'>
                                                    {line.estaciones.map((estacion) => (
                                                        <li className='mb-2 li_station' key={estacion.id_estacion}>
                                                    
                                                            {estacion.nombreEstacion} {" "}
                                                            {estacion.combinaciones && estacion.combinaciones.map((comb, index) => (
                                                                <figure className={`d-inline combinacion ${comb.classCombinacion}`} key={index}>
                                                                    <span className='txt_xs'>combinación</span>{" "}
                                                                    <span className="rounded-circle line_symbol">{comb.nombreCombinacion2}</span>
                                                                </figure>
                                                        
                                                            
                                                        
                                                            ))}
                                                    
                                                    
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                
      
      
                            </div>
                        </div>
                    </div>
                }
            </>
        </Helmet>
    )
}

export default Lineas;
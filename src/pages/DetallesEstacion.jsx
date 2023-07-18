import React, {useEffect} from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getStation} from '../redux/features/linea/lineaSlice';
import Loading from '../components/Loading';
import Helmet from '../components/Helmet';

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

                // stationFound !== null && (
                //     <Helmet title={`Estación ${stationFound.estacion.nombreEstacion}`}>
                //         <div className={`container mt-5 stationDetailsContainer`}>
                //             <h2 className='py-4 rounded-3 text-center'>Estación {stationFound.estacion.nombreEstacion}</h2>
                //         </div>
                //     </Helmet>
                // )

                stationFound && (
                    <div>
                        detalles {stationFound.estacion.nombreEstacion} ({stationFound.nombreLinea2})
                    </div>
                )
                
                
                
            
            }
        </>
    )
}

export default DetallesEstacion;
import React from 'react';

import Helmet from '../components/Helmet';

import img_slide1 from '../assets/img/img_slide_1.png';
import img_slide2 from '../assets/img/img_slide_2.png';
import img_slide3 from '../assets/img/img_slide_3.png';

import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <Helmet title={"Home"}>
        
            <div className="container mt-5">

                {/* slide 1 */}
                <div className='p-2 p-lg-4 rounded-3 mb-5 bg_color_secundario slide_home'>
                    <Link to="/redMetro">
                        <div className="row">
                            <div className='col-12 col-sm-12 col-lg-5 mb-3'>
                                <img src={img_slide2} className="rounded-3 w-100" alt="slide_2" />
                            </div>

                            <div className='col-12 col-sm-12 col-lg-7 d-flex flex-column justify-content-center mb-3 txt_slide_home'>
                                <h3 className='text-center'>Conoce la red Metro de Santiago.</h3>
                                <p className='text-center'>La red de Metro está compuesta por diversas líneas de transporte.</p>
                            </div>
                        </div>
                    </Link>
                    
                </div>

                 {/* slide 2 */}
                <div className='p-2 p-lg-4 rounded-3 mb-5 bg_color_secundario slide_home'>
                    <div className="row">

                        <div className='col-12 col-sm-12 col-lg-5 mb-3 d-lg-none'>
                            <img src={img_slide1} className="rounded-3 w-100" alt="slide_1" />
                        </div>
                        
                        <div className='col-12 col-sm-12 col-lg-7 d-flex flex-column justify-content-center mb-3 txt_slide_home'>
                            <h3 className='text-center'>Estaciones Metro de Santiago.</h3>
                            <p className='text-center'>Infórmate de los detalles de cada estación que forma parte de la red del ferrocarril metropolitano.</p>
                        </div>

                        <div className='col-12 col-sm-12 col-lg-5 mb-3 d-none d-lg-block'>
                            <img src={img_slide1} className="rounded-3 w-100" alt="slide_1" />
                        </div>
                    </div>
                </div>


                 {/* slide 3 */}
                <div className='p-2 p-lg-4 rounded-3 mb-5 bg_color_secundario slide_home'>
                    <div className="row">
                        <div className='col-12 col-sm-12 col-lg-5 mb-3'>
                            <img src={img_slide3} className="rounded-3 w-100" alt="slide_3" />
                        </div>

                        <div className='col-12 col-sm-12 col-lg-7 d-flex flex-column justify-content-center mb-3 txt_slide_home'>
                            <h3 className='text-center'>¿En qué comunas opera este transporte público?</h3>
                            <p className='text-center'>Revisa cuáles son las comunas cubiertas por el servicio de transporte Metro de Santiago.</p>
                        </div>
                    </div>
                </div>

            </div>
        </Helmet>
        
    )
}

export default Home;
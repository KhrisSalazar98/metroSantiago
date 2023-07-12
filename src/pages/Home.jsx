import React from 'react';

import Helmet from '../components/Helmet';

import img_slide1 from '../assets/img/img_slide_1.png';
import img_slide2 from '../assets/img/img_slide_2.png';
import img_slide3 from '../assets/img/img_slide_3.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <Helmet title={"Home"}>
            <div className='mt-5 p-md-4 rounded-3 bg_color_secundario'>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img_slide1} className="d-block w-100 img_slide" alt="slide_1" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Conoce la red Metro de Santiago.</h3>
                                <p>La red de Metro está compuesta por diversas líneas de transporte.</p>
                            </div>
                            <div className='carousel-caption py-0 d-block d-md-none d-flex align-items-center'>
                                <span className='txt_slide_small'><strong>Conoce la red Metro de Santiago.</strong><br /> La red de Metro está compuesta por diversas líneas de transporte.</span>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={img_slide2} className="d-block w-100 img_slide" alt="slide_2" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Estaciones Metro de Santiago.</h3>
                                <p>Infórmate de los detalles de cada estación que forma parte de la red del ferrocarril metropolitano.</p>
                            </div>
                            <div className='carousel-caption py-0 d-block d-md-none d-flex align-items-center'>
                                <span className='txt_slide_small'><strong>Estaciones Metro de Santiago.</strong><br /> Infórmate de los detalles de cada estación que forma parte de la red del ferrocarril metropolitano.</span>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={img_slide3} className="d-block w-100 img_slide" alt="slide_3" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>¿En qué comunas opera este transporte público?</h3>
                                <p>Revisa cuáles son las comunas que cubiertas por el servicio de transporte Metro de Santiago.</p>
                            </div>
                            <div className='carousel-caption py-0 d-block d-md-none d-flex align-items-center'>
                                <span className='txt_slide_small'><strong>¿En qué comunas opera este transporte público?</strong><br /> Revisa cuáles son las comunas que cubiertas por el servicio de transporte Metro de Santiago.</span>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <FontAwesomeIcon className='color_principal d-inline d-sm-none' icon={faCircleChevronLeft} size="2xs" />
                        <FontAwesomeIcon className='color_principal d-none d-sm-inline d-md-none' icon={faCircleChevronLeft} size="lg" />
                        <FontAwesomeIcon className='color_principal d-none d-md-inline d-lg-none' icon={faCircleChevronLeft} size="xl" /> 
                        <FontAwesomeIcon className='color_principal d-none d-lg-inline' icon={faCircleChevronLeft} size="2xl" />    
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <FontAwesomeIcon className='color_principal d-inline d-sm-none' icon={faCircleChevronRight} size="2xs" />
                        <FontAwesomeIcon className='color_principal d-none d-sm-inline d-md-none' icon={faCircleChevronRight} size="lg" />
                        <FontAwesomeIcon className='color_principal d-none d-md-inline d-lg-none' icon={faCircleChevronRight} size="xl" />
                        <FontAwesomeIcon className='color_principal d-none d-lg-inline' icon={faCircleChevronRight} size="2xl" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </Helmet>
        
    )
}

export default Home;
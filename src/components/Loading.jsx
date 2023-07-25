import React from 'react';
import imgLogo from '../assets/img/metroSantiago2.png';

const Loading = () => {
    return (
        <div className="modalBackground">
            <div className='modalContainer d-flex justify-content-center align-items-center flex-column'>
                <div className='text-center'>
                    <img className='img_loading' src={imgLogo} alt="logo Metro" />
                </div>
                <div className="custom-loader"></div>
                <p className='text-white mt-4 txt_loading'>Cargando...</p>
            </div>                         
        </div>
    )
}

export default Loading;
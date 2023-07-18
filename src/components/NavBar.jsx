import React, {useState} from 'react';
import logo from '../assets/img/metroSantiago2.png';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const nav__links = [
    {
        path: '/',
        display: 'Home'
    },
    {
        path: '/redMetro',
        display: 'Red Metro'
    },
    {
        path: '/comunas',
        display: 'Comunas'
    },
] 

const NavBar = () => {

    const [collapse,setCollapse] = useState(false);

    return (
        <>  
            <div className='text-center d-block d-lg-none'>
                <img className="logo_mobile" src={logo} alt="Logo Metro de Santiago" />
            </div>
            
            <nav className="navbar navbar-expand-lg py-3 py-lg-0">
                <div className="container-fluid">
                    <img className="d-none d-lg-inline logo" src={logo} alt="Logo Metro de Santiago" />
                    <button onClick={() => setCollapse(!collapse)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} className={`${collapse ? 'd-none' : 'd-block'} fa_bars`} />
                        <FontAwesomeIcon icon={faXmark} className={`${collapse ? 'd-block' : 'd-none'} fa_Xmark`} />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav mt-3 mt-lg-0">
                            {
                                nav__links.map((item,index) => (
                                    <li className='nav-item' key={index}>
                                        <NavLink 
                                            to={item.path} 
                                            className={(navClass)=> navClass.isActive ? 'px-3 py-1 nav__active' : 'px-3 py-1'}
                                        >{item.display}</NavLink> 
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
        
    )
}

export default NavBar;
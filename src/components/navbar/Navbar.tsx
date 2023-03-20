import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Navbar.scss';
import MenuItem from './menuItem/MenuItem';
import '../../assets/styles/_colors.scss';

type MenuType = {
    title: string;
    expand: boolean;
    active: boolean;
    subItems:  Array<{[title: string]: string}>
}
const menuInfo: MenuType[] = [
    {
        title: 'servicios',
        expand: true,
        active: false,
        subItems: [{title: 'Análisis Clínico'}, {title: 'Servicios Covid-19'}, {title: 'Laboratorio a Domicilio'}]
    },
    {
        title: 'resultados',
        expand: true,
        active: false,
        subItems: [{title: 'Pacientes'}, {title: 'Médicos'}, {title: 'Refencias'}]
    },
    {
        title: 'sedes',
        expand: true,
        active: false,
        subItems: [{title: 'Lima'}, {title: 'Provincia'}]
    },
    {
        title: 'promociones',
        expand: true,
        active: false,
        subItems: [{title: 'Campañas'}]
    },
    {
        title: 'reserva tu análisis clínico',
        expand: true,
        active: false,
        subItems: []
    },
];

const Navbar = () => {
    return(
        <React.Fragment>
            <div className='navbar'>
                <div className="navbar-content">
                    <div className="navbar-logo-container">
                        <img 
                            src="https://res.cloudinary.com/dvwigktot/image/upload/v1678506248/canal_digital/LOGO-BIOLAB-INMUNOMED_ucsly1.png" 
                            alt="Biolar Inmunomend logo" />
                    </div>
                    <div className="navbar-menu-container">
                        {menuInfo.map((menuItem: MenuType, index: number): React.ReactNode => 
                            <MenuItem 
                                key={index} 
                                title={menuItem.title.toUpperCase()} 
                                expand={menuItem.expand} 
                                active={menuItem.active}
                                subItems={menuItem.subItems}
                            />)}
                    </div>
                    <div className="navbar-auth-container">
                        <AccountCircleIcon style={{width: '100%', height: '100%', color: '#$blue-main-color'}}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Navbar;
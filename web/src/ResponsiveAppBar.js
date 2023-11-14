import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom'; // Si estás utilizando react-router
import logo from "./di.png";
import './ResponsiveAppBar.css';

console.log(logo);

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static" id="appbar">
      <Toolbar>
      <img src={logo} id="image"/>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link id="name" to="/">
            Sistema De Prácticas
          </Link>
          <Typography id="department" variant="body2">
              Departamento de Informática USM
          </Typography>
        </Typography>

        <Link to="/Practicas" style={{textDecoration: 'none'}}>
          <Typography id="practicas" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Prácticas
          </Typography>
        </Link>
        <Link to="/perfil" style={{ textDecoration: 'none'}}>
          <Typography id="perfil" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mi Perfil
          </Typography>
        </Link>
        <Link to="/estadisticas" style={{ textDecoration: 'none'}}>
          <Typography id="estadisticas" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Estadísticas
          </Typography>
        </Link>
        <Link to="/informaciones" style={{ textDecoration: 'none'}}>
          <Typography id="informaciones" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Informaciones
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveAppBar;

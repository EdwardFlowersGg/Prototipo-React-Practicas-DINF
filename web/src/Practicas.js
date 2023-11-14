import React, { useState } from 'react';
import Navbar from './ResponsiveAppBar';
import './Practicas.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/system';
import { Slider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { practicas } from './data';



const Practicas = () => {


  const [age, setAge] = React.useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterLocation, setFilterLocation] = useState('All');
  const handleChange = (event) => {
    setAge(event.target.value);
    setFilterType(event.target.value);
  }

  const [selectedTypes, setSelectedTypes] = useState([]); // Usar un array para rastrear las opciones seleccionadas



  const [salary, setSalary] = useState(500000); // El valor inicial del sueldo
  
  const handleSalaryChange = (event, newValue) => {
    setSalary(newValue); // Actualiza el estado del sueldo cuando se cambia el valor del slider
  };



  //mapeo de ubicaciones
  function obtenerUbicacionesUnicas(elementos) {
    return [...new Set(elementos.map((elemento) => elemento.ubicacion))];
  }
  const [selectedUbicaciones, setSelectedUbicaciones] = useState([]);

  const ubicacionesUnicas = obtenerUbicacionesUnicas(practicas);

  const handleChangeUbicaciones = (event) => {
    setFilterLocation(event.target.value);
    setSelectedUbicaciones(event.target.value);
  }

  //mapeo cargos

  function obtenerCargosUnicos(elementos) {
    return [...new Set(elementos.map((elemento) => elemento.cargo))];
  }

  const [selectedCargos, setSelectedCargos] = useState([]);

  const cargosUnicos = obtenerCargosUnicos(practicas);

  const handleChangeCargo = (event) => {
    setSelectedCargos(event.target.value);
  };

  //puro estilo aqui
  const StyledSelect = styled(Select)(({ theme }) => ({
    '& .MuiSelect-select': {
      color: '#FFFFFF', // Cambia el color del texto a blanco
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#FFFFFF', // Cambia el color del borde antes de seleccionar
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#FFFFFF', // Cambia el color del borde después de seleccionar
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white', // Establece el color del borde en blanco
    },
    '& .MuiSvgIcon-root': {
      fill: '#FFFFFF', // Establece el color de la flecha hacia abajo en blanco
    },
    '& .MuiOutlinedInput-root.Mui-focused': {
      backgroundColor: 'white', // Establece el color de fondo al hacer clic en el Select
    },
  }));


  const CustomButton = styled(Button)`
    && {
      background-color: rgba(230, 81, 0, 1);
      color: white;
      font-weight: bold;

      height: 48px; /* Ajusta la altura del botón según tus preferencias */
      /* Otros estilos personalizados según tus preferencias */
    }
  `;

  const StyledTypography = styled(Typography)(({ theme }) => ({
    color: 'white', // Cambia el color del texto "Sueldo" a blanco
    fontWeight: 'bold',
    marginBottom: '-20px',
    marginTop: '22px',
  }));


  //filtrado 
  const filteredPracticas = practicas.filter(practica => {
    return (
      (practica.tipo === filterType || filterType === 'All') &&
      ( filterLocation.includes(practica.ubicacion) || filterLocation.length === 0 || filterLocation==="All") &&
      (practica.sueldo >= salary || salary === 'All') &&
      (practica.empresa.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCargos.includes(practica.cargo) || selectedCargos.length === 0)
    );
  });

  //escritura archivo
  const handlePostularClick = (practica) => {
    const { empresa, ubicacion, sueldo, tipo, cargo, info } = practica;

    // Crear un objeto con la información de la práctica
    const practicaInfo = {
      empresa,
      ubicacion,
      sueldo,
      tipo,
      cargo,
      info,
    };

    // Convertir el objeto a una cadena JSON
    const practicaInfoJSON = JSON.stringify(practicaInfo);

    // Crear un nuevo Blob (objeto binario) con la información JSON
    const blob = new Blob([practicaInfoJSON], { type: 'application/json' });

    // Crear un enlace (link) para descargar el archivo
    const url = URL.createObjectURL(blob);

    // Crear un elemento <a> para descargar el archivo y hacer clic en él
    const a = document.createElement('a');
    a.href = url;
    a.download = 'practica_info.json';
    a.click();

    // Liberar recursos
    URL.revokeObjectURL(url);
  };


  return (
    
    <div>
      <Navbar/>
      <div style={{ margin: '20px' }}>
        <div id="buscador">
          <input
            type="text"
            placeholder="Buscar"
            style={{ flex: 1, marginRight: '10px', padding: '8px' , borderRadius: '10px'}}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div id="filtro">
          <div style={{ marginRight: '50px', marginLeft: '50px'}}>
            <StyledTypography id="salary-slider" gutterBottom>
              Sueldo mínimo: ${salary}
            </StyledTypography>
            <Slider
              sx={{
                '& .MuiSlider-thumb': {
                  backgroundColor: 'white', // Cambia el color del círculo (controlador) a blanco
                },
                '& .MuiSlider-valueLabel': {
                  color: 'white', // Cambia el color del texto del valor del Slider a blanco
                },
              }}
              value={salary}
              onChange={handleSalaryChange}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `$${value}`}
              min={0}
              max={1000000} // Rango máximo de sueldos
              step={10000}  // Incremento del sueldo por paso
              aria-labelledby="salary-slider"
            />
          </div>

          <div style={{ marginRight: '50px'}}>
            <Box sx={{ minWidth: 150, marginTop: '20px', borderolor: 'white'}}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{color: 'white'}}>Tipo</InputLabel>
                <StyledSelect
                  defaultValue="All"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Tipo"
                  onChange={handleChange}
                >
                  <MenuItem value="All">Todos</MenuItem>
                  <MenuItem value="Industrial">Industrial</MenuItem>
                  <MenuItem value="Profesional">Profesional</MenuItem>
                </StyledSelect>
              </FormControl>
            </Box>
          </div>

          <div style={{ marginRight: '50px' }}>
          <Box sx={{ minWidth: 150, marginTop: '20px', borderColor: 'white' }}>
            <FormControl fullWidth>
              <InputLabel id="ubi" sx={{ color: 'white' }}>
                Localidad
              </InputLabel>
              <StyledSelect
                labelId="ubi"
                id="ubi2"
                multiple
                value={selectedUbicaciones}
                label="Localidad"
                onChange={handleChangeUbicaciones}
                sx={{ color: 'white' }}
              >
                {ubicacionesUnicas.map((ubicacion) => (
                  <MenuItem key={ubicacion} value={ubicacion}>
                    {ubicacion}
                  </MenuItem>
                ))}
              </StyledSelect>
            </FormControl>
          </Box>
          </div>

          <div style={{ marginRight: '50px' }}>
          <Box sx={{ minWidth: 150, marginTop: '20px', borderColor: 'white' }}>
            <FormControl fullWidth>
              <InputLabel id="cargo" sx={{ color: 'white' }}>
                Cargo
              </InputLabel>
              <StyledSelect
                labelId="cargo"
                id="cargo2"
                multiple
                value={selectedCargos}
                label="Cargo"
                onChange={handleChangeCargo}
                sx={{ color: 'white' }}
              >
                {cargosUnicos.map((cargo) => (
                  <MenuItem key={cargo} value={cargo}>
                    {cargo}
                  </MenuItem>
                ))}
              </StyledSelect>
            </FormControl>
          </Box>
          </div>

        </div>

        <div>
          {filteredPracticas.map((practica, index) => (
            <div key={index} className="practica"> {/* Usa className en lugar de estilo en línea */}
              <div style={{ marginRight: '20px', width: '300px' }}>
                <h2 style={{fontWeight: 'bold'}}>{practica.empresa}</h2>
                <p style={{fontWeight: 'bold'}}>Ubicación: {practica.ubicacion}</p>
                <p style={{fontWeight: 'bold'}}>Sueldo: ${practica.sueldo}</p>
                <p style={{fontWeight: 'bold'}}>Tipo: {practica.tipo}</p>
                <p style={{fontWeight: 'bold'}}>Cargo: {practica.cargo}</p>
              </div>

              <div className="info">
                <p>{practica.info}</p>
              </div>

              <CustomButton variant="contained" href="/postular">
                Postular
              </CustomButton>
            </div>
          ))}
          {/* Fin de la lista de prácticas existente */}
        </div>
        
      </div>
    </div>
  );
};

export default Practicas;









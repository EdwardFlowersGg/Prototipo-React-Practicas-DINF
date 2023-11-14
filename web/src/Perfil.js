import React, { useState } from 'react';
import Navbar from './ResponsiveAppBar';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import './Perfil.css';
import { Slider } from '@mui/material';
import Typography from '@mui/material/Typography';

const Miperfil = () => {
  const [selectedTab, setSelectedTab] = useState('datosPersonales');
  const [datosPersonales, setDatosPersonales] = useState({
    nombre: 'Felipe',
    apellidos: 'Orellana Garrido',
    rut: '19.123.456-7',
    rolUSM: '202004500-5',
    email: 'felisex@gmail.com',
    direccion: 'Calle Falsa 123',
    telefono: '999999999',
    carrera: 'Ingeniería Civil Informática',
    campus: 'San Joaquín',
  });




  const handleUpdate = () => {
    // Aquí puedes agregar la lógica para actualizar los datos, por ejemplo, enviar una solicitud al servidor.
    console.log('Datos actualizados:', datosPersonales);
    // Puedes agregar una llamada a una API o lógica para guardar los datos actualizados
  };

  const handleInputChange = (key, value) => {
    setDatosPersonales({ ...datosPersonales, [key]: value });
  };

  const inputStyles = {
    '& .MuiInputLabel-root': {
      color: 'rgba(230, 81, 0, 1)', // Color naranja
      fontWeight: 'normal', // Hacer que la etiqueta no sea negrita
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'rgba(230, 81, 0, 1)', // Color naranja también en estado enfocado
      fontWeight: 'bold', // Hacer que la etiqueta sea negrita en estado enfocado
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(230, 81, 0, 1)', // Color del borde naranja por defecto
      borderWidth: 1, // Ancho del borde por defecto
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(230, 81, 0, 1)', // Color del borde naranja en estado enfocado
      borderWidth: 2, // Ancho del borde en estado enfocado
    },
    width: '60%', // Ancho
  };


  
  const [practicaIndustrial, setPracticaIndustrial] = useState({
    estado: 'Completada',
    empresa: 'Mercado Libre',
    horasCompletadas: 360,
    totalHoras: 360,
    comentarios: 'Es una persona altamente adaptable y entusiasta, demostró habilidades excepcionales para colaborar en un entorno dinámico. Su enfoque innovador y proactividad fueron evidentes, aportando ideas frescas y valiosas al equipo. Mostró una notable disposición para enfrentar desafíos y su actitud positiva fue un gran activo durante su tiempo en la empresa',
  });

  const handleHoursIndustrialChange = (event, newValue) => {
    sethoursIndustrial(newValue); // Actualiza el estado del sueldo cuando se cambia el valor del slider
  };

  const [hoursIndustrial, sethoursIndustrial] = useState(360);

  const [practicaProfesional, setPracticaProfesional] = useState({
    estado: 'Postulando',
    empresa: 'Otra Empresa',
    horasCompletadas: 240,
    totalHoras: 360,
    comentarios: 'Otros comentarios...',
  });

  const handleHoursProfesionalChange = (event, newValue) => {
    sethoursProfesional(newValue); // Actualiza el estado del sueldo cuando se cambia el valor del slider
  };

  const [hoursProfesional, sethoursProfesional] = useState(0);

  const handlePracticaChange = (key, value, practicaType) => {
    if (practicaType === 'industrial') {
      setPracticaIndustrial({ ...practicaIndustrial, [key]: value });
    } else if (practicaType === 'profesional') {
      setPracticaProfesional({ ...practicaProfesional, [key]: value });
    }
  };
  //estilos


  const renderTabContent = () => {
    switch (selectedTab) {
      case 'datosPersonales':
        return (

          <div style={styles.tabContent}>
            <div class="container" style={{display: 'flex', justifyContent: 'space-between'}}>
            <div class="column" style={{ flex: 1, padding: '20px' }}>
              <div class="row" style={{marginBottom: '50px'}}>
                <TextField
                  id="nombre-controlled"
                  label="Nombre"
                  value={datosPersonales.nombre}
                  sx={inputStyles}
                  onChange={(e) => {
                    handleInputChange("nombre", e.target.value);
                  }}
                />
              </div>

              <div class="row" style={{marginBottom: '50px'}}>
                <TextField
                  id="apellidos-controlled"
                  label="Apellidos"
                  value={datosPersonales.apellidos}
                  sx={inputStyles}
                  onChange={(e) => {
                    handleInputChange("apellidos", e.target.value);
                  }}
                />
              </div>

              <div class="row" style={{marginBottom: '50px'}}>
                <TextField
                  id="rut-controlled"
                  label="RUT"
                  value={datosPersonales.rut}
                  sx={inputStyles}
                  onChange={(e) => {
                    handleInputChange("rut", e.target.value);
                  }}
                />
              </div>

              <div class="row" style={{marginBottom: '50px'}}>
                <TextField
                  id="rol-controlled"
                  label="ROL USM"
                  value={datosPersonales.rolUSM}
                  sx={inputStyles}
                  onChange={(e) => {
                    handleInputChange("rolUSM", e.target.value);
                  }}
                />
              </div>

              <div class="row" style={{marginBottom: '50px'}}>
                <TextField
                  id="email-controlled"
                  label="Email"
                  value={datosPersonales.email}
                  sx={inputStyles}
                  onChange={(e) => {
                    handleInputChange("email", e.target.value);
                  }}
                />
              </div>
      
            </div>

              <div class="column" style={{flex: 1, padding: '20px'}}>
                <div class="row" style={{marginBottom: '50px'}}>
                  <TextField
                    id="telefono-controlled"
                    label="Telefono"
                    value={datosPersonales.telefono}
                    sx={inputStyles}
                    onChange={(e) => {
                      handleInputChange("telefono", e.target.value);
                    }}
                  />
                </div>

                <div class="row" style={{marginBottom: '50px'}}>
                  <TextField
                    id="carrera-controlled"
                    label="Carrera"
                    value={datosPersonales.carrera}
                    sx={inputStyles}
                    onChange={(e) => {
                      handleInputChange("carrera", e.target.value);
                    }}
                  />
                </div>

                <div class="row" style={{marginBottom: '50px'}}>
                  <TextField
                    id="campus-controlled"
                    label="Campus"
                    value={datosPersonales.campus}
                    sx={inputStyles}
                    onChange={(e) => {
                      handleInputChange("campus", e.target.value);
                    }}
                  />
                </div>

                <div class="row" style={{marginBottom: '50px'}}>
                  <TextField
                    id="direccion-controlled"
                    label="Dirección"
                    value={datosPersonales.direccion}
                    sx={inputStyles}
                    onChange={(e) => {
                      handleInputChange("direccion", e.target.value);
                    }}
                  />
                </div>


                <div class="row" style={{marginBottom: '50px'}}>
                  <CustomButton onClick={handleUpdate}>Actualizar</CustomButton>
                </div>

                
              </div>
            </div>

            
          </div>
        );

      case 'misPostulaciones':
        return (
          <div style={styles.tabContentCards}>
            <div class="container" >
            {misPostulaciones.map((postulacion) => (
              <div key={postulacion.id} className="perfil" > {/* Usa className en lugar de estilo en línea */}
                <div class="column" style={{ flex: 1, padding: '20px'}}>
                  <div class="row" >
                    <h2 style={{fontWeight: 'bold'}}>{postulacion.nombre}</h2>
                  </div>
                  <div class="row" style={{ display: 'flex'}}>
                    <div class="col" style={{width: '300px'}}>
                      <p style={{fontWeight: 'bold'}}>Tipo: {postulacion.tipo}</p>
                      <p style={{fontWeight: 'bold'}}>Estado: {postulacion.estado}</p>
                      <p style={{fontWeight: 'bold'}}>Prioridad: {postulacion.prioridad}</p>
                    </div>
                    <div class="col" style={{ marginRight: '20px', width: '300px' }}>
                      <p style={{fontWeight: 'bold'}}>Ubicación: {postulacion.ubicacion}</p>
                      <p style={{fontWeight: 'bold'}}>Sueldo: ${postulacion.sueldo}</p>
                      <p style={{fontWeight: 'bold'}}>Cargo: {postulacion.cargo}</p>
                    </div>
                  </div>
                </div>
          
                <div class="column" style={{ width: '300px'}}>
                  <div class="row" style={{marginBottom: '20px', marginLeft: '8px'}}>
                    <CustomButton variant="contained" onClick={() => handleEditPostulacion(postulacion.id)}>
                      Editar
                    </CustomButton>
                  </div>
                  <div class="row" >
                    <CustomButton variant="contained" onClick={() => handleDeletePostulacion(postulacion.id)}>
                      Eliminar
                    </CustomButton>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        );

      case 'misPracticas':
        return (
          <div style={styles.tabContentCards}>
            <div key={practicaIndustrial.id} className="perfil" > {/* Usa className en lugar de estilo en línea */}
              <div class="column" style={{ flex: 1, padding: '20px'}}>
                <div class="row" style={{ display: 'flex'}}>
                  <div class="col" style={{width: '300px'}}>
                    <h2 style={{fontWeight: 'bold'}}>Práctica Industrial</h2>
                    <p style={{fontWeight: 'bold'}}>Estado: {practicaIndustrial.estado}</p>
                    <p style={{fontWeight: 'bold'}}>Empresa: {practicaIndustrial.empresa}</p>
                    <p style={{fontWeight: 'bold'}}>Horas: {hoursIndustrial}/360</p>
                    <Slider
                      sx={{
                        '& .MuiSlider-thumb': {
                          backgroundColor: 'white', // Cambia el color del círculo (controlador) a blanco
                        },
                        '& .MuiSlider-valueLabel': {
                          color: 'white', // Cambia el color del texto del valor del Slider a blanco
                        },
                      }}
                      value={hoursIndustrial}
                      onChange={handleHoursIndustrialChange}
                      valueLabelDisplay="auto"
                      valueLabelFormat={(value) => `${value}h`}
                      min={0}
                      max={360} // Rango máximo de sueldos
                      step={1}  // Incremento del sueldo por paso
                      aria-labelledby="salary-slider"
                    />
                  </div>
                  <div class="col" className="info">
                    <p>{practicaIndustrial.comentarios}</p>
                  </div>
                </div>
              </div>
      

            </div>
            <div key={practicaProfesional.id} className="perfil" > {/* Usa className en lugar de estilo en línea */}
              <div class="column" style={{ flex: 1, padding: '20px'}}>
                <div class="row" style={{ display: 'flex'}}>
                  <div class="col" style={{width: '300px'}}>
                    <h2 style={{fontWeight: 'bold'}}>Práctica Profesional</h2>
                    <p style={{fontWeight: 'bold'}}>Estado: {practicaProfesional.estado}</p>
                    <p style={{fontWeight: 'bold'}}>Empresa: {practicaProfesional.empresa}</p>
                    <p style={{fontWeight: 'bold'}}>Horas: {hoursProfesional}/360</p>
                    <Slider
                      sx={{
                        '& .MuiSlider-thumb': {
                          backgroundColor: 'white', // Cambia el color del círculo (controlador) a blanco
                        },
                        '& .MuiSlider-valueLabel': {
                          color: 'white', // Cambia el color del texto del valor del Slider a blanco
                        },
                      }}
                      value={hoursProfesional}
                      onChange={handleHoursProfesionalChange}
                      valueLabelDisplay="auto"
                      valueLabelFormat={(value) => `${value}h`}
                      min={0}
                      max={360} // Rango máximo de sueldos
                      step={1}  // Incremento del sueldo por paso
                      aria-labelledby="salary-slider"
                    />
                  </div>
                  <div class="col" className="info">
                    <p>{practicaProfesional.comentarios}</p>
                  </div>
                </div>
              </div>
      

            </div>

          </div>
        );

      default:
    }
  };



    const [misPostulaciones, setMisPostulaciones] = useState([
        {
          id: 1,
          nombre: 'Diseñador UX/UI para WebTech Inc.',
          empresa: 'WebTech Inc.',
          estado  : 'en espera',
          prioridad: 'Alta',
          ubicacion: 'Ñuñoa',
          sueldo: 700000,
          tipo: 'Profesional',
          cargo: 'Diseñador UX/UI',
        },
        {
          id: 2,
          nombre: 'Analista de Datos para Digital Innovations Ltda.',
          empresa: 'Digital Innovations Ltda.',
          estado: 'solicitud recibida',
          prioridad: 'Media',
          ubicacion: 'Vitacura',
          sueldo: 850000,
          tipo: 'Profesional',
          cargo: 'Analista de Datos',
        },

        {
          id: 3,
          nombre: 'Ingeniero de Datos para Data Innovators',
          tipo: ' Proesional',
          empresa: 'Data Innovators S.A.',
          estado: 'Rechazada',
          prioridad : 'Baja',
          ubicacion: 'Providencia',
          sueldo: 750000,
          cargo: 'Ingeniero de Datos',

        }
        // ... Otros datos ficticios de postulaciones
      ]);
    
      const handleEditPostulacion = (id) => {
        // Lógica para editar una postulación
        console.log(`Editar postulación con ID: ${id}`);
      };
    
      const handleDeletePostulacion = (id) => {
        // Lógica para eliminar una postulación
        setMisPostulaciones(misPostulaciones.filter((postulacion) => postulacion.id !== id));
      };
    


      const styles = {
        background: {
          backgroundColor: 'rgb(223, 223, 223)',
          height: 'calc(100vh - 80px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        container: {
          width: '80%',
          height: '90%',
          margin: '0 auto',
        },
        tabs: {
          display: 'flex',
          marginBottom: '5px',
        },
        tab: {
          marginRight: '10px',
          marginBottom: '-2px',
          marginTop: '-2px',
          marginLeft: '10px',
        },
        selectedTab: {
          borderBottom: '2px solid #1e1e1e',
        },
        tabContent: {
          width: '100%',
          height: '80%',
          marginTop: '30px',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        tabContentCards: {
          width: '100%',
          height: '80%',
          backgroundColor: 'rgb(223, 223, 223)',
          padding: '20px',
          borderRadius: '10px',
        },
        dataRow: {
          display: 'flex',
          marginBottom: '10px',
        },
        dataColumn: {
          flex: '1',
          marginRight: '20px',
        },
      };
    
    
      const CustomButton = styled(Button)`
      && {
        background-color: rgba(230, 81, 0, 1);
        color: white;
        font-weight: bold;
        margin-left: auto;
    
        height: 48px; /* Ajusta la altura del botón según tus preferencias */
        /* Otros estilos personalizados según tus preferencias */
      }
    `;
  return (
    <div>
      <Navbar />
      <div style={styles.background}>
        <div style={styles.container}>
          <div style={styles.tabs}>
            
            <div style={selectedTab === 'datosPersonales' ? styles.selectedTab : styles.tab}>
              <CustomButton onClick={() => setSelectedTab('datosPersonales')}>Datos Personales</CustomButton>
            </div>

            <div style={selectedTab === 'misPracticas' ? styles.selectedTab : styles.tab}>
              <CustomButton onClick={() => setSelectedTab('misPracticas')}>Mis Prácticas</CustomButton>
            </div>

            <div style={selectedTab === 'misPostulaciones' ? styles.selectedTab : styles.tab}>
              <CustomButton onClick={() => setSelectedTab('misPostulaciones')}>Mis Postulaciones</CustomButton>
            </div>
          </div>
          {renderTabContent()}

        </div>
      </div>
    </div>
  );
};

export default Miperfil;







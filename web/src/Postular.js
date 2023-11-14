import React, { useEffect } from 'react';

const Postular = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = '/'; // Redirigir a la página principal luego de 5 segundos
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return <div>Estás llenando los datos de postulación...</div>;
};

export default Postular;


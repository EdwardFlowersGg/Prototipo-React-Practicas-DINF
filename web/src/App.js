import './App.css';
import Practicas from './Practicas';
import Postular from './Postular';
import Perfil from './Perfil';
import { Routes, Route, BrowserRouter } from 'react-router-dom';



function App() {

  return (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Practicas />} />
              <Route path="/Practicas" element={<Practicas />} />
              <Route path="/Postular" element={<Postular />} />
              <Route path="/Perfil" element={<Perfil />} />
            </Routes>
          </BrowserRouter>
  );
}

export default App;

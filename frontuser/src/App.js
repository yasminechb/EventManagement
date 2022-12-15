import logo from './logo.svg';
import './style.css';

import { Route, Routes } from 'react-router-dom';
import Accueil from './routes/Accueil';
import Apropos from './routes/Apropos';
import Contact from './routes/Contact';
import Evenements from './routes/Evenements';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil/> }/>
        <Route path="/apropos" element={<Apropos/> }/>
        <Route path="/Contact" element={<Contact/> }/>
        <Route path="/evenements" element={<Evenements/> }></Route>
     </Routes>
       
    </div>
    
  );
}

export default App;

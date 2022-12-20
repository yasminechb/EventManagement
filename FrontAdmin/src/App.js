import './App.css';
import Footer from "./pages/Footer" ;
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Details from './pages/Details';
import SignIn from './pages/SignIn';
function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/:id" element={<Details />} />
       <Route path="/" element={<SignIn />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  
  );
}

export default App;

import './App.css';
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
       <Route path="/" element={<Home />} />
       <Route path="/:id" element={<Details />} />
       <Route path="/S" element={<SignIn />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

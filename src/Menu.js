import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddCountry from './AddCountry/AddCountry';
import Continents from './Continents/Continents';
import IndependanceYears from './IndependanceYears/IndependanceYears';

function Menu() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Continents/>} />
          <Route path="/IndependanceYears" element={<IndependanceYears/>} />
          <Route path="/AddCountry" element={<AddCountry/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Menu;

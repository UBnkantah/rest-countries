import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePg from './pages/HomePg';
import CountryPg from './pages/CountryPg';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePg />} />
        <Route path='/:country' element={<CountryPg />} />
      </Routes>  
    </BrowserRouter>
  );
}

export default App;


import './App.css';

import Navbars from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/AboutUs/AboutUs';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

<Navbars />
<Routes>
<Route path='/' element={<Home />} />
<Route path='/about' element={<About />} />
</Routes>
    </>
    
      
    
  );
}

export default App;

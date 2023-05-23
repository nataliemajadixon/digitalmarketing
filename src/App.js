
import './App.css';

import Navbars from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/AboutUs/AboutUs';
import Career from './components/Career/Career';
import Services from './components/Services/Services';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

<Navbars />
<Routes>
<Route path='/' element={<Home />} />
<Route path='/about' element={<About />} />
<Route path='/contact' element={<Contact />} />
<Route path='/career' element={<Career />} />
<Route path='/services' element={<Services />} />
</Routes>
    </>
    
      
    
  );
}

export default App;

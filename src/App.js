
import './App.css';

import Navbars from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/AboutUs/AboutUs';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

<Navbars />
<Routes>
<Route path='/' element={<Home />} />
<Route path='/about' element={<About />} />
<Route path='/contact' element={<Contact />} />
</Routes>
    </>
    
      
    
  );
}

export default App;

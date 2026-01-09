import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import SideNav from './Components/SideNav';
import Hero from './Components/Hero';
import Slider1 from './Components/Slider1';
import Slider2 from './Components/Slider2';
import Events from './Components/Events';
import Footer from './Components/Footer';


function App() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <Navbar onMenuClick={() => setIsOpen(true)}/>
    <SideNav isOpen={isOpen} onClose={() => setIsOpen(false)}/>
    <Hero />
    <Slider1 />
    <Slider2 /> 
    <Events />
    <Footer />
    </>
  )
}

export default App

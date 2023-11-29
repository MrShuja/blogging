
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
   </>
  );
}

export default App;

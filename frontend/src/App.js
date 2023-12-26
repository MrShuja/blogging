
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Userdashboard/Dashboard';
import Blog from './components/blog/BlogList';
import BlogDetail from './components/blogDetails/BlogDetail';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/blog" element={<Blog/>}/>
      <Route  path="/blog/:id" element={<BlogDetail/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    <ToastContainer />
   </>
  );
}

export default App;

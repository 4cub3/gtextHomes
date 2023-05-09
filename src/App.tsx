import {useEffect} from 'react';
import "./app.css";
import NavBar from "./components/NavBar/NavBar";
import {Routes, Route, useMatch, useNavigate} from 'react-router-dom';
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import About from './pages/About';

function App() {

  const match = useMatch('/')
  const navigate = useNavigate()
  useEffect(()=>{
    if(match?.pathname === '/'){
      navigate('/home')
    }
  },[navigate])
  return (
    <>
    <NavBar />
     <main>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/aboutus" element={<About />} />
        <Route path='*' element={<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Not found</div>}/>
      </Routes>
     </main>
     <Footer />
    </>
  );
}

export default App;

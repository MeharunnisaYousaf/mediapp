import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Whatchistrory from './pages/Whatchistrory';





function App() {
  return (
    <div className="App">
      <Header/>

    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watchistory' element={<Whatchistrory/>}/>
      
    </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;

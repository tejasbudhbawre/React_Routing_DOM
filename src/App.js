import './App.css';
import {Routes,Route} from 'react-router-dom';
import Header from './Pages/Header';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import Home from './Pages/Nevigations/Home';
import About from './Pages/Nevigations/About';
import Product from './Pages/Product';
import Services from './Pages/Nevigations/Services';
import Contact from './Pages/Nevigations/Contact';
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>                                          
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Product" element={<Product />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

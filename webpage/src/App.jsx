import { Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './component/Footer';
import Navbar from './component/navbar';
import Home from './page/Home';
import ContactUs from './page/ContactUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App

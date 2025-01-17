import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/navbar";
import Home from "./page/Home";
import ContactUs from "./page/ContactUs";
import Client from "./page/Client";
import Application from "./page/Application";
import AboutUs from "./page/AboutUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/application" element={<Application />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

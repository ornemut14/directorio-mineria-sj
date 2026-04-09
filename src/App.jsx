import Header from "./components/layout/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/layout/Footer";
import Categories from "./components/categories/Categories";
import ServiciosDestacados from "./components/services/ServiciosDestacados";
import ComoFuncionaSuscripcion from "./components/suscripcion/ComoFuncionaSuscripcion";
import TestimoniosUsuarios from "./components/user/TestimoniosUsuarios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Allservices from "./pages/allservices/allservices";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Allservices />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

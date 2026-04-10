
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Allservices from "./pages/allservices/allservices";
import Login from "./pages/login/Login";
import CategoriesPage from "./pages/categoriespage/categoriespage";
import ForgotPassword from "./pages/login/ForgotPassword";
import Header from "./components/layout/Header";
import EventosPage from "./pages/eventospage/EventosPage";
import CapacitacionesPage from "./pages/capacitacionespage/CapacitacionesPage";
import Usuarios from "./pages/Usuarios";
import Admin from "./pages/admin/Admin";
import Proveedor from "./pages/proveedor/Proveedor";
import AdminLayout from "./pages/admin/AdminLayout";
import EventosList from "./pages/admin/eventos/EventosList";
import EventosForm from "./pages/admin/eventos/EventosForm";



function App() {
  return (
    <BrowserRouter>
    <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Allservices />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categorias" element={<CategoriesPage />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/eventos" element={<EventosPage />} />
        <Route path="/capacitaciones" element={<CapacitacionesPage />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="eventos" element={<EventosList />} />
          <Route path="eventos/nuevo" element={<EventosForm />} />
          <Route path="eventos/editar/:id" element={<EventosForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

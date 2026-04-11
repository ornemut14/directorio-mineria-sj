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

import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";

import EventosList from "./pages/admin/eventos/EventosList";
import EventosForm from "./pages/admin/eventos/EventosForm";

import CategoriasList from "./pages/admin/categorias/CategoriasList";
import CategoriasForm from "./pages/admin/categorias/CategoriasForm";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>

        {/* 🌐 PUBLICO */}
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Allservices />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categorias" element={<CategoriesPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/eventos" element={<EventosPage />} />
        <Route path="/capacitaciones" element={<CapacitacionesPage />} />
        <Route path="/usuarios" element={<Usuarios />} />

        {/* 🔐 ADMIN */}
        <Route path="/admin" element={<AdminLayout />}>

          {/* Dashboard principal */}
          <Route index element={<Dashboard />} />

          {/* Eventos */}
          <Route path="eventos" element={<EventosList />} />
          <Route path="eventos/nuevo" element={<EventosForm />} />
          <Route path="eventos/editar/:id" element={<EventosForm />} />

          {/* Categorías */}
          <Route path="categorias" element={<CategoriasList />} />
          <Route path="categorias/nuevo" element={<CategoriasForm />} />
          <Route path="categorias/editar/:id" element={<CategoriasForm />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
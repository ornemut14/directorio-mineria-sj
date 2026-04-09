
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Allservices from "./pages/allservices/allservices";
import Login from "./pages/login/Login";
import CategoriesPage from "./pages/categoriespage/categoriespage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Allservices />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categorias" element={<CategoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

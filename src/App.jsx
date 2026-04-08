import Header from "./components/layout/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/layout/Footer";
import Categories from "./components/categories/Categories";
import ServiciosDestacados from "./components/services/ServiciosDestacados";
import ComoFuncionaSuscripcion from "./components/suscripcion/ComoFuncionaSuscripcion";
import TestimoniosUsuarios from "./components/user/TestimoniosUsuarios";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <ServiciosDestacados/>
      <ComoFuncionaSuscripcion/>
      <TestimoniosUsuarios/>
      <Footer />
    </>
  );
}

export default Home;
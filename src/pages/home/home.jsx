import Categories from "../../components/categories/Categories";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import ServiciosDestacados from "../../components/services/ServiciosDestacados";
import ComoFuncionaSuscripcion from "../../components/suscripcion/ComoFuncionaSuscripcion";
import TestimoniosUsuarios from "../../components/user/TestimoniosUsuarios";
import SectionCompliance from "./sectioncompliance/sectioncompliance";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <ServiciosDestacados />
      <ComoFuncionaSuscripcion />
      <TestimoniosUsuarios />
      <SectionCompliance />
      <Footer />
    </>
  );
}

export default Home;

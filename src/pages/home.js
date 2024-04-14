import '../App.css';
import NavBar from '../components/NavBar';
import Hero from "../components/IndexComponents/Hero"
import Especiales from '../components/IndexComponents/Especiales';
import Sedes from '../components/IndexComponents/Sedes';
import Testimonials from '../components/IndexComponents/Testimonials';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="Home">
      <Hero />
      <Especiales />
      <Sedes />
      <Testimonials />
    </div>
  );
}

export default Home;

import '../App.css';
import Hero from "../components/IndexComponents/Hero"
import HeroServices from '../components/ServicesComponents/HeroServices';
import ListServices from '../components/ServicesComponents/ListServices';


function Services() {
  return (
    <div className="Services">
      <HeroServices />
      <ListServices />
    </div>
  );
}

export default Services;

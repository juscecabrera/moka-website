import '../App.css';
import Hero from "../components/IndexComponents/Hero"
import HeroServices from '../components/ServicesComponents/HeroServices';
import ListServices from '../components/ServicesComponents/ListServices';
import SectionServices from '../components/ServicesComponents/SectionServices';


function ServicesPrices() {
  return (
    <div className="Services">
      <HeroServices />
      <ListServices />
      <SectionServices />
    </div>
  );
}

export default ServicesPrices;

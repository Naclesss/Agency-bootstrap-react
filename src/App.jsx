import Brands from "./components/Brands.jsx";
import Contacts from "./components/Contacts.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from './components/Hero.jsx';
import Portfolio from "./components/Portfolio.jsx";
import Services from "./components/Services.jsx";
import Teams from "./components/Teams.jsx";


function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Services/>
      <Portfolio/>
      <Teams/>
      <Brands/>
      <Contacts/>
      <Footer/>
    </>
    // domda elave yer tutmadan parent yaradir fragment <></>
  );
}
export default App;

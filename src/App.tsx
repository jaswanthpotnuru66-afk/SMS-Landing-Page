import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import BusinessOutcomeBand from './components/BusinessOutcomeBand/BusinessOutcomeBand';
import Capabilities from './components/Capabilities/Capabilities';
import UserPortals from './components/UserPortals/UserPortals';
import Migration from './components/Migration/Migration';
import MultiBranch from './components/MultiBranch/MultiBranch';
import Trust from './components/Trust/Trust';
import CostValue from './components/CostValue/CostValue';
import PilotCTA from './components/PilotCTA/PilotCTA';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <UserPortals />
        <BusinessOutcomeBand />
        <MultiBranch />
        <Trust />
        <Migration />
        <CostValue />
        <PilotCTA />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}

export default App;

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Services } from './components/Services/Services';
import { About } from './components/About/About';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { WhatsappButton } from './components/WhatsappButton';

function Home() {

  return (
    <>
      <Header />
      <Main />
      <Services />
      <About />
      <WhatsappButton />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;

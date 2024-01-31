import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Services } from './components/Services/Services';
import { About } from './components/About/About';
import { Portfolio } from './components/Portfolio/Portfolio';

function Home() {

  return (
    <>
      <Header />
      <Main />
      <Services />
      <About />
      <Portfolio />
    </>
  );
}

export default Home;

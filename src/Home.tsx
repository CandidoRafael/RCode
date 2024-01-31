import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

// const AnimatedGif = () => {
//     return (
//       <Lottie 
//         animationData={animationData}
//         loop
//         autoplay
//         style={{ width: '300px' }}
//       />
//     )
// }

function Home() {

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default Home;

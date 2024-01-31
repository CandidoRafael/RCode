import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.tsx'
import { GlobalStyled } from './Global.styled.tsx'
import { register } from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyled />
    <Home />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.tsx'
import { GlobalStyled } from './Global.styled.tsx'
import { register } from 'swiper/element/bundle'

register();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyled />
    <Home />
  </React.StrictMode>,
)

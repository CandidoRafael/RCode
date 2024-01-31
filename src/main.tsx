import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.tsx'
import { GlobalStyled } from './Global.styled.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyled />
    <Home />
  </React.StrictMode>,
)

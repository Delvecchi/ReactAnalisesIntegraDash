import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from "react-router-dom"

import Header from './components/Header'
import MenuLateral from './components/MenuLateral'

import './index.css'
import { Analises } from './pages/Analises/analises'
import Favoritos from './pages/Favoritos'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <MenuLateral />
      <section className='body'>
        <Header />
      <Routes>
        <Route path='analises' element={<Analises />} />
        <Route path='favoritos' element={<Favoritos />}/>
      </Routes>
      </section>
    </BrowserRouter>
  </React.StrictMode>,
)

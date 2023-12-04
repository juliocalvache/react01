import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './page/Inicio'
import Movil from './page/Movil'
import Contacto from './page/Contacto'
import Laptop from './page/Laptop'
import Tienda from './page/Tienda'

function App() {
  const [carrito, setCarrito] = useState([])
  return (
    <>
       <BrowserRouter >
            <Header carrito={carrito} setCarrito={setCarrito}/>
                <Routes>
                    <Route path="/" element={<Inicio/>} />   
                    <Route path="/Inicio" element={<Inicio/>} />
                    <Route path="/Movil" element={<Movil carrito={carrito} setCarrito={setCarrito}/>} />  
                    <Route path="/Laptop" element={<Laptop carrito={carrito} setCarrito={setCarrito}/>} />
                    <Route path="/Tienda" element={<Tienda carrito={carrito} setCarrito={setCarrito}/>} />
                    <Route path="/Contacto" element={<Contacto/>} />
                    <Route path="*" element={<Inicio/>} />
                 </Routes>
            <Footer/>
       </BrowserRouter>
    </>
  )
}

export default App

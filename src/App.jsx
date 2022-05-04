import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Carrito from './pages/Carrito/Carrito'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

function App() {

  const location = useLocation();

  return (
    <div className="App">
      {
        location.pathname == '/login' ? <></> : <Navbar />
      }
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Home />} />
        <Route path="carrito" element={<Carrito />}/>
      </Routes>
    </div>
  )
}

export default App

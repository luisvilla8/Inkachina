import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import Nav from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={Nav.nav}>
      <div className={Nav.navbar}>
        {/* <NavLink to='/'><h1>INKACHINA</h1></NavLink> */}
        <Logo />
        <input type="text" placeholder="Busca productos..."/>
        <NavLink to='/login' className={Nav.link__login}>Iniciar Sesión</NavLink>
      </div>
      <ul>
        <li><NavLink to='/ofertas'>Ofertas</NavLink></li>
        <li><NavLink to='/categorias'>Categorías</NavLink></li>
        <li><NavLink to='/compras'>Mis compras</NavLink></li>
        <li><NavLink to='/carrito'>Carrito</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
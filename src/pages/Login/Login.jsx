import { NavLink } from 'react-router-dom'
import Logo from '../../components/Logo'
import LoginStyle from './Login.module.css'

const Login = () => {
  return (
    <div className={LoginStyle.container}>
      <Logo />
      <span></span>
      <form className={LoginStyle.form}>
        <h1>Iniciar Sesión</h1>
        <div className={LoginStyle.input__group}>
          <label htmlFor="">Nombre de Usuario</label>
          <input type="text" placeholder="Ingrese su nombre de usuario"/>
        </div>
        <div className={LoginStyle.input__group}>
          <label htmlFor="">Password</label>
          <input type="text" placeholder="Ingrese su contraseña"/>
        </div>
        <div className={LoginStyle.link__group}>
          <button>INICIAR SESIÓN</button>
          <NavLink to="/">¿No tienes una cuenta? Registrate aquí.</NavLink>
        </div>
      </form>
    </div>
  )
}

export default Login
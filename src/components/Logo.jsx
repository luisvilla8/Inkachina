
import { NavLink } from 'react-router-dom'
import Blob from './Blob'
import LogoStyle from './Logo.module.css'

const Logo = () => {
  return (
    <div className={LogoStyle.logo}>
      <NavLink to='/'><h1>INKACHINA</h1></NavLink>
      <Blob className={LogoStyle.blob}/>
      <Blob className={LogoStyle.blob}/>
    </div>
  )
}

export default Logo
import ProductoStyle from './Producto.module.css'
import { CgShoppingCart } from 'react-icons/cg';

const Producto = ({ prod }) => {
  const { imagen, nombre, precio } = prod;
  return (
    <div className={ProductoStyle.card}>
      <img src={imagen} alt={nombre} className={ProductoStyle.card__img}/>
      <p className={ProductoStyle.card__precio}>S/ {precio}</p>
      <p className={ProductoStyle.card__nombre}>{nombre}</p>
      <div className={ProductoStyle.card__buttons}>
        <button className={ProductoStyle.card__comprar}>COMPRAR</button>
        <button className={ProductoStyle.card__carrito}>
          <CgShoppingCart 
            size="1.1rem"
          />
        </button>
      </div>
    </div>  
  )
}

export default Producto
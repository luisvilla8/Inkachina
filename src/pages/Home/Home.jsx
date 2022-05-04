import Producto from '../../components/Producto'
import productos from '../../data/productos'

import HomeStyle from './Home.module.css'

const Home = () => {

  // const getAllProductos = async () =>   {
  //   const response = await fetch('')
  // }

  return (
    <div className={HomeStyle.main}>
      {productos.map(prod => 
        <Producto key={prod.id} prod={prod} />
      )}
    </div>
  )
}

export default Home
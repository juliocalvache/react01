import Mtienda from "../components/Mtienda"

const Tienda = ({carrito, setCarrito}) => {
  return (
    <>
        <h3 className="text-center py-5">Tienda</h3>
        <Mtienda carrito={carrito} setCarrito={setCarrito}/>
    </>
  )
}

export default Tienda
import Mlaptop from "../components/Mlaptop"

const Laptop = ({carrito, setCarrito}) => {
  return (
    <>
        <h3 className="text-center py-5"> Moviles</h3>
        <Mlaptop carrito={carrito} setCarrito={setCarrito}/>
        
    </>
  )
}

export default Laptop
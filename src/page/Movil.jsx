import Mmovil from "../components/Mmovil"

const Movil = ({carrito, setCarrito}) => {
  return (

    <>
        <h3 className="text-center py-5"> Moviles</h3>
        <Mmovil carrito={carrito} setCarrito={setCarrito}/>
    </>

  )
}

export default Movil
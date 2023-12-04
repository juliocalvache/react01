import { useEffect, useState } from "react";
import Card from "./Card";
const API='https://dummyjson.com/products/category/smartphones';


const Mmovil = ({carrito, setCarrito}) => {
  const[datos,setDatos]  = useState([]) 
  const getDatos = async () =>{
        try {
            const response = await fetch(API);
            const data = await response.json();
            console.log(data)
            setDatos(data.products);
        } catch (error) {
            console.error(error)
                        }
        }; 
        useEffect(()=>{
            getDatos();
        },[]);

 return (
    
    
    <div className="container">

    <div className="row">
         { datos && datos.map((productos)=>(

            <Card productos={productos} key={productos.id} carrito={carrito} setCarrito={setCarrito}/>
         ))
         
         }
     

    </div>
    </div>

  )
}

export default Mmovil
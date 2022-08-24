import React,{useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador , setContador] = useState(initial)

    const aumentarContador = () =>{
      if(contador < stock) setContador(contador + 1)
    }

    const disminuirContador = () => {
      if(contador > initial) setContador (contador - 1)

    }

  return (
    <div>
        <button onClick={disminuirContador}>-</button>
        <span>{contador}</span>
        <button onClick={aumentarContador} >+</button>
        <div> <button disabled={contador === 0} onClick={()=>{onAdd(contador)}}>Agregar al carrito</button> </div>
    </div>
  )
}

export default ItemCount
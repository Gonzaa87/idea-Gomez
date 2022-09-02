import React,{useState} from 'react'
import {Button} from '@chakra-ui/react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [contador , setContador] = useState(initial)


  return (
    <>
        <div>Contador</div>
        <button onClick={()=> { setContador(contador - 1) }} disabled={contador === initial}>-</button>
        <span> {contador} Pares</span>        
        <button onClick={()=> {setContador(contador + 1) }} disabled={contador === stock}>+</button>
        <div> <Button disabled={contador === 0} onClick={()=>{onAdd(contador)}}>Agregar al carrito</Button> </div>
        <Button onClick={()=> setContador(0)}>Limpiar</Button>
    </>
  )
}

export default ItemCount
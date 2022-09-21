import {Button, Flex} from '@chakra-ui/react'
import React, {useState, useContext} from 'react'
import ItemCount from "../ItemCount/ItemCount"
import {Link} from 'react-router-dom'
import { CartContext } from '../context/CartContext';

export function ItemDetail({item}) {
    const {id, price, name, imgsrc} = item;
    const {addItem} = useContext(CartContext);
    const [contador, setContador] = useState(0);


    function onAdd(count) {
      console.log(`Esta es la cantidad de ITEMS que la persona va a comprar: ${count}`);
      setContador(count)


      addItem(item, count);
    }
  return (
    <Flex flexDirection={"column"} justifyContent={"center"}>
        <h1>{name} - {id}</h1>
        <img src={imgsrc}></img>
        <h3>${price}</h3>
        <br />

        <br />
        {contador !== 0 ?
        <Link to="/cart"><Button>Finalizar Compra</Button></Link> :
        <ItemCount initial={1} stock={5} onAdd={onAdd}/> }

    </Flex>
  )
}

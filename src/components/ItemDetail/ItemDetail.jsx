import {Button} from '@chakra-ui/react'
import React, {useState} from 'react'
import ItemCount from "../ItemCount/ItemCount"
import {Link} from 'react-router-dom'

export function ItemDetail({item}) {
    const {id, price, title, img, talles} = item;
    const [contador, setContador] = useState(0);
    const [selectTalle, setSelectTalle] = useState(talles[0])

    function onAdd(count) {
      console.log(`Esta es la cantidad de ITEMS que la persona va a comprar: ${count}`);
      setContador(count)

      console.log("Talle pedido= " + selectTalle);
    }
  return (
    <div>
        <h1>{title} - {id}</h1>
        <img src={img}></img>
        <h3>${price}</h3>
        <br />
        <div><h4>Talle :</h4>
        <select onChange={(e) => setSelectTalle(e.target.value)} value={selectTalle}>
          {talles.map((talle)=> <option value={talle}>{talle}</option>)}
        </select>
        </div>
        <br />
        {contador !== 0 ?
        <Link to="/cart"><Button>Finalizar Compra</Button></Link> :
        <ItemCount initial={1} stock={5} onAdd={onAdd}/> }

    </div>
  )
}

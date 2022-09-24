import { Button } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


export default function Cart() {
  const { items, removeItem, clear } = useContext(CartContext);

  return (<>
    <div>Cart</div>
    {!items.length ? <h2> No tengo items <Link to="/"><Button>Ir al inicio</Button></Link> </h2> :
      <>
        <ol>
          {items.map (((item, index) => <li key={index}> {item.name} - {item.quantity} <Button onClick={() => removeItem(item.id)}>Remover</Button></li>))}
        </ol>
        <h3>precio total = ${items.reduce((pv, cv) => pv + (cv.price * cv.quantity),0)}</h3>
      </>
    }
      <div>
        <Button onClick={clear}>Limpiar carrito</Button>
        <Link to="/checkout"><Button>CheckOut</Button></Link>
      </div>
    </>
  )
}

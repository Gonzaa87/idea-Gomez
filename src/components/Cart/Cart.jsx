import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';


export default function Cart() {
  const { items } = useContext(CartContext);

  return (<>
    <div>Cart</div>
    {!items && <span> no tengo items </span>}
    {items.length && <ol>
      {items.map (((item, index) => <li key={index}> {item.title} - {item.quantity}</li>))}
      </ol>}
    </>
  )
}

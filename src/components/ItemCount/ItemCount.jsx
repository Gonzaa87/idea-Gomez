import React,{useState} from 'react'

const ItemCount = () => {

    const [state , setState] = useState(0)

  return (
    <div>
        <br />
        <h1>Stock = {state}</h1>
        <br />
        <button onClick={() => setState(state + 1)}>Sumar</button>
        <br />
        <button onClick={() => setState(state - 1)}>Restar</button>
    </div>
  )
}

export default ItemCount
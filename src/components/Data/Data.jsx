import React from 'react'

export default function Data({id,title,price,stock,img}) {
  return (
    <div className="card">
        <h3>{title}</h3>
        <img src={img} alt="" />
        <p>${price}</p>
    </div>
  )
}

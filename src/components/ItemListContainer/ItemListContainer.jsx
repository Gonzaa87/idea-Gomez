import {Spinner} from "@chakra-ui/react";
import React from 'react';
import { useEffect,useState } from "react";
import {useParams} from 'react-router-dom'
import ItemList from "../ItemList/ItemList"

export default function ItemListContainer({greeting}) {
  const [items, setItems] = useState({});
  const {categoryid} = useParams();
  useEffect(() => {

    let products = [{id: 1, talles:[5 , 5.5 , 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11], category:"nike", title:"Nike Air Max 1", price:250, img:"https://static.runnea.com/images/201803/nike-air-max-1-baratas-400x400x80xX.png?1"},
    {id:2, talles:[5 , 5.5 , 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11], category:"adidas", title:"Adidas Yeezy Slide", price:150, img:"https://footdistrict.com/media/resize/840x1050/catalog/product/7/2/72_4065427412955/adidas-yeezy-slide-pure-gw1934-4.jpg"},
    {id:3, talles:[5 , 5.5 , 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11], category:"jordan", title:"Air Jordan 4 Retro", price:275, img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/932/403/products/1231-2f572dc946bb7bed9116490399564696-1024-1024.png"},];
    // {id:4, talles:[5 , 5.5 , 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11], category:"nike", title:"Nike Air Max 90", price:200, img:"https://static.nike.com/a/images/t_default/yo8q4g51so6rylfl6w14/air-max-90-mens-shoes-6n3vKB.png"}
      new Promise((resolve)=>{
        let productsFiltered = [];
        setTimeout(()=>{
          productsFiltered = categoryid ? products.filter((element)=> element.category == categoryid) : products
          resolve(productsFiltered);
        }, 2000)
      
      }).then((data)=>{
        setItems(data);
      })
  }, [categoryid] )

  return (        
    <div>
        <h1>{greeting}</h1>
        {items.length ?
        <div>
        <ItemList items ={items}/>
        </div> :
        <Spinner></Spinner>
        }
    </div>
  )
}

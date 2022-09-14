import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {ItemDetail} from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer() {
    const {id} = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        let products = [{id: 1, talles:[5 , 5.5 , 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11], category:"nike", title:"Nike Air Max 1", price:250, img:"https://static.runnea.com/images/201803/nike-air-max-1-baratas-400x400x80xX.png?1"},
        {id:2, talles:[5 , 5.5 , 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11], category:"adidas", title:"Adidas Yeezy Slide", price:150, img:"https://footdistrict.com/media/resize/840x1050/catalog/product/7/2/72_4065427412955/adidas-yeezy-slide-pure-gw1934-4.jpg"},
        {id:3, talles:[5 , 5.5 , 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11], category:"jordan", title:"Air Jordan 4 Retro", price:275, img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/932/403/products/1231-2f572dc946bb7bed9116490399564696-1024-1024.png"},];
        // {id:4, talle:[5 , 5.5 , 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11], category:"nike", title:"Nike Air Max 90", price:200, img:"https://static.nike.com/a/images/t_default/yo8q4g51so6rylfl6w14/air-max-90-mens-shoes-6n3vKB.png"}
    new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find((element )=> element.id == id));
        }, 2000)

    }).then((data)=>{
        setItem(data);
    })
    }, [id])
    


  return (
  <>
   { Object.getOwnPropertyNames(item).length && <ItemDetail item={item}/>} 
  </>
  )
}

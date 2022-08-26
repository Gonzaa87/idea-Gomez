import React,{useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
const ItemDetailContainer = ({greeting}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {

      let products = [
        // {id: 1, title:"Nike Air Max 1", price:250, img:"https://static.runnea.com/images/201803/nike-air-max-1-baratas-400x400x80xX.png?1"},
        // {id:2, title:"Adidas Yeezy Slide", price:150, img:"https://footdistrict.com/media/resize/840x1050/catalog/product/7/2/72_4065427412955/adidas-yeezy-slide-pure-gw1934-4.jpg"},
        {id:3, title:"Air Jordan 4 Retro", price:275, img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/932/403/products/1231-2f572dc946bb7bed9116490399564696-1024-1024.png"}
      ];
        new Promise((resolve,reject)=>{
  
          setTimeout(()=>{
            resolve(products);
          }, 2000)
        
        }).then((data)=>{
          setItems(data);
        })
    }, [] )
  
 
    return (
    <div>
    <ItemDetail items={items}/> 
    </div>
  )
}

export default ItemDetailContainer
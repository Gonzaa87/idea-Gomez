import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {ItemDetail} from '../ItemDetail/ItemDetail'
import {getFirestore , doc, getDoc} from "firebase/firestore";

export default function ItemDetailContainer() {
    const {id} = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const db = getFirestore();
        const productoRef = doc(db, "items", id);

        getDoc(productoRef).then((snapshot) => {
            console.log(snapshot.data())
            if(snapshot.exists()){
                console.log("existo")
                setItem({id: snapshot.id, ...snapshot.data()});
            }
        })
    }, [id])
    


  return (
  <>
   { Object.getOwnPropertyNames(item).length && <ItemDetail item={item}/>} 
  </>
  )
}

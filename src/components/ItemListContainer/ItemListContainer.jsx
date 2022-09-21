import {Spinner} from "@chakra-ui/react";
import React from 'react';
import { useEffect,useState } from "react";
import {useParams} from 'react-router-dom'
import ItemList from "../ItemList/ItemList"
import {getFirestore , collection , getDocs, doc, query, where} from "firebase/firestore";

export default function ItemListContainer({greeting}) {
  const [items, setItems] = useState({});
  const {categoryid} = useParams();

  useEffect(() => {

    const db = getFirestore();

    const itemCollection = categoryid ? query(collection(db, "items"), where("categoryId", "==", categoryid)) : collection(db, "items" )
    getDocs(itemCollection).then((snapshot) => {
      setItems(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
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

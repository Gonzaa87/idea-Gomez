import { Flex } from "@chakra-ui/react";
import React from 'react'
import Data from '../Data/Data'

const ItemDetail = ({items}) => {
  return (
    <Flex flexDirection={"row"} justifyContent={"center"}>
         {items.map((item,index)=>
       <Data key={index} id={item.id} title={item.title} price={item.price} img={item.img}/>
       )}
    </Flex>
  )
}

export default ItemDetail
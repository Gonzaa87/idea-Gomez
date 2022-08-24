import { Flex } from "@chakra-ui/react";
import React from "react";
import Item from "../Item/Item";


const ItemList = ({items}) => {
  return (
    <Flex flexDirection={"row"} justifyContent={"center"}>
        {items.map((item,index)=>
       <Item key={index} id={item.id} title={item.title} price={item.price} img={item.img}/>
       )}
    </Flex>
  )
}

export default ItemList
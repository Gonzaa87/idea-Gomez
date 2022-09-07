import React, {useState, createContext, children } from 'react';

export const CartContext = createContext();

export function CartProvider({ children}) {
    const [items, setItems] = useState([]);

    function addItem(item, quantity) {
        console.log({ ...item, quantity})

        if(isInCart(item.id)) {
            console.log("soy duplicado")
            let aux = items;
            console.log(aux)
            let itemIndex = aux.findeIndex((element) => element.id == item.id);
            console.log( `mi index es ${itemIndex}`)
            aux[itemIndex].quantity += quantity;
            setItems([...aux])
        } else {
            console.log("soy nuevo")
            setItems([...items, {...item, quantity}]);
        }

    }

    function removeItem(itemId) {

        //
    }

    function clear() {
        setItems([]);
    }

    function isInCart(itemId){
        return items.find((element) => element.id == itemId);
    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, items }}>
            {children}
        </CartContext.Provider>
    )
}

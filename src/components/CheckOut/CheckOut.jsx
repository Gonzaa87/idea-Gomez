import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, {useContext, useState } from "react";
import { CartContext} from "../context/CartContext";

export default function CheckOut() {
    const { cart } = useContext(CartContext);
    const [name, setName] = useState ('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    function finalizarCompra() {
        const db = getFirestore();
        let order = {buyer: {name: name, phone: phone, email: email}, items: cart, total : 1000 }
        // cart.reduce((pv, cv) => pv + (cv.quantity * cv.price) ,0)
        const orderCollection = collection(db, "ordered");
        addDoc(orderCollection, order).then(({id}) => console.log(id))
    }

    return (
        <>
            <div>CheckOut</div>
            <form>
                <input  onChange={(e) => setName(e.name)} type={"text"} placeholder={"Ingrese su nombre"}></input>
                <input  onChange={(e) => setPhone(e.value)} type={"text"} placeholder={"Ingrese su telefono"}></input>
                <input  onChange={(e) => setEmail(e.value)} type ={"email"} placeholder={"Ingrese su e-mail"}></input>
                <br />
                <button onClick={finalizarCompra}>Finalizar Compra</button>
            </form>
        </>
    )
}
import Navbar from "./components/NavBar"
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartProvider } from "./components/context/CartContext";

 function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<ItemListContainer greeting="Productos"/>} />
        <Route path="/category/:categoryid" element={<ItemListContainer greeting="Productos"/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

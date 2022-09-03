import Navbar from "./components/NavBar"
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import {BrowserRouter, Routes, Route} from "react-router-dom"

 function App() {
  //      const onAdd = (contador) => {
  //      console.log("Soy onAdd y el valor del contador es:", contador)
  //  }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<ItemListContainer greeting="Productos"/>} />
      <Route path="/category/:categoryid" element={<ItemListContainer greeting="Productos"/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

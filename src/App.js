import Navbar from "./components/NavBar"
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  const onAdd = (contador) => {
    console.log("Soy onAdd y el valor del contador es:", contador)
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<ItemListContainer greeting="Este mensaje se está reproduciendo desde mi App.js"/>} />
      <Route path="/category/:categoryid" element={<ItemListContainer greeting="Este mensaje se está reproduciendo desde mi App.js"/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

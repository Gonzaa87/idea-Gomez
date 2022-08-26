import Navbar from "./components/NavBar"
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
function App() {
  const onAdd = (contador) => {
    console.log("Soy onAdd y el valor del contador es:", contador)
  }
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Este mensaje se está reproduciendo desde mi App.js"/>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
       <ItemDetailContainer/> 
    </div>
  );
}

export default App;

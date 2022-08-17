import Navbar from "./components/NavBar"
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Este mensaje se está reproduciendo desde mi App.js"/>
      <ItemCount/>
    </div>
  );
}

export default App;

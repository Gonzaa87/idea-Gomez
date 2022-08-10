import Navbar from "./components/NavBar"
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Este mensaje se está reproduciendo desde mi App.js"/>
    </div>
  );
}

export default App;

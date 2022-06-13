import logo from './logo.svg';
import './App.css';
import ItemListConteiner from './componentes/itemListConteiner';

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <ItemListConteiner 
       producto1='Parlante'/>
    </div>
  );
}

export default App;

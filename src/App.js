// import logo from './logo.svg';
import './App.css';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <br/>
      <h1>Listado de Items</h1>
      <ItemListContainer title="Item 001" description="Description 001" key={1} />
      <ItemListContainer title="Item 002" description="Description 002" key={2} />
      <ItemListContainer title="Item 003" description="Description 003" key={3} />
    </div>
  );
}

export default App;

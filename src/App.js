import CartWidget from './components/cartWidget/CartWidget';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { NavBar } from './components/navbar/NavBar';

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido Joaquín"></ItemListContainer>
    </>
  );
}

export default App;

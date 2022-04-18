import { Routes ,Route } from 'react-router-dom'
import './App.css';
import Header from './Containers/Header/Header';
import Productsdetails from './Containers/ProductsDetails/ProductsDetails';
import Productslist from './Containers/ProductsList/ProductsList';
import Notfound from './Containers/NotFound/NotFound';
import Productscomponents from './Containers/ProductsComponents/ProductsComponents';

function App() {
  return (
    <div className="App">
            <Header/>
         <Routes>
            <Route path="*" element={<Notfound />} />
            <Route path="/" element={<Productslist/>}/>
            <Route path='/product/:productId' element={<Productsdetails/>}/>
            <Route path='' element={<Productscomponents/>}/>

       </Routes>
    </div>
  );
}

export default App;

import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import axios from "axios";
import { setProduct } from '../../redux/actions/products';
import Productscomponents from '../ProductsComponents/ProductsComponents';
import '../ProductsList/ProductsList.css';
import banner from '../assets/img/banner.png';

const Productslist = () => {

   const dispatch = useDispatch();

   const fetchProducts = async () =>{
       const response = await axios.get('https://fakestoreapi.com/products')
       .catch(e => console.log("ERROR: " , e.message))
       dispatch(setProduct(response.data))
 }

   useEffect(() => {
        fetchProducts()
   } , [])


    return (
        <div className='ui grid container'>
            <div className='four column row productList'>
              <img src={banner} alt="images" />
             <Productscomponents/>
            </div>
        </div>
    );
}

export default Productslist;

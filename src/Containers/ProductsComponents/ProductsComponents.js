import { useSelector } from 'react-redux';
import '../ProductsComponents/ProductsComponents.css';
import React from 'react';

const Productscomponents = () => {
   const products = useSelector(state => state.allProducts.product)


   const renderList = products.map((product) =>{
       const { id , title , image , price , category } = product;
    return (
          <div className='ui link cards cardsProducts' key={id}>
              <div className='card'>
                  <div className='image'>
                      <img className='productsImage' src={image} alt={title} />
                  </div>
                  <div className='content'>
                      <div className='header'>
                               <p className='productsDesc'>{title}</p>
                      </div>
                      <div className='meta price'>$ {price}</div>
                      <div className='meta'>{category}</div>
                  </div>
              </div>
          </div>
    );

   })

   return(
       <>
          {renderList}
       </>
   )

}

export default Productscomponents;

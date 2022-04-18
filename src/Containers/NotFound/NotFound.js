import React from 'react';
import '../NotFound/NotFound.css';
import notFound from '../assets/img/source.webp'

const Notfound = () => {
    return (
        <div className='notFound'>
             <img className='iamgesNotFound' src={notFound}  alt="images"/>
        </div>
    );
}

export default Notfound;

import React from 'react';
import '../Loader/Loader.css';
import loadingGif from '../assets/img/video-loading.gif';

const Loader = () => {
    return (
        <div className='loader'>
              <img className='loaderGif' src={loadingGif} alt="loader gif" />
        </div>
    );
}

export default Loader;

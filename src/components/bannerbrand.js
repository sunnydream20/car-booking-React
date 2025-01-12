import React from 'react';
import './component.css';
import { Link } from 'react-router-dom';

export default function BannerBrandComp ({id, url, des, title, categoryId }) {

  return (
        <Link to = {`/brand/${categoryId}`} className='textdecoration-none'>
           <div className='bannerbrand-comp' key={id}>
                <div className='bannerbrand-comp-img' style={{
                    backgroundImage: `url(${url})`
                }} ></div>
                <div>
                    <h2 className='bannerbrand-comp-title color-primary'>{title}</h2>
                </div>
                <div>
                    <p className='bannerbrand-comp-des color-primary'>{des}</p>
                </div>
           </div>
        </Link>
  );
}
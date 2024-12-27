import React from 'react';
import './component.css';

import { Link } from 'react-router-dom';

export default function Blog ({id, url, des, title }) {

  return (
        <div className=''>
           <div className='blog-comp' key={id}>
                <div className='blog-img' style={{
                    backgroundImage: `url(${url})`
                }} ></div>
                <div>
                    <h2 className='blog-title'>{title}</h2>
                </div>
                <div>
                    <p className='blog-des'>{des}</p>
                </div>
           </div>
        </div>
  );
}
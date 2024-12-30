import React from 'react';
import './component.css';

export default function BannerBrandComp ({id, url, des, title }) {

  return (
        <div className=''>
           <div className='bannerbrand-comp' key={id}>
                <div className='bannerbrand-comp-img' style={{
                    backgroundImage: `url(${url})`
                }} ></div>
                <div>
                    <h2 className='bannerbrand-comp-title'>{title}</h2>
                </div>
                <div>
                    <p className='bannerbrand-comp-des'>{des}</p>
                </div>
           </div>
        </div>
  );
}
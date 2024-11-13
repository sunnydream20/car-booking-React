import React from 'react';
import './component.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';

export default function Vehicle ({id, type, type_des, seats, bags, doors, snow, img_url, later_day_price, now_day_price }) {

  return (
    <Link to={`/brand/${id}`} className='col-lg-4 col-md-5 col-sm-10 textdecoration-none'>
        <div>
            <div className='vehicle-item'>
                <div className='flex flex-row'>
                    <div style={{width: "60%"}}>
                        <h2 className='m-0'>{type}</h2>
                        <p className='m-0'><strong>{type_des}</strong></p>
                        <p className="bg-color-secondary color-white p-xs w-fit-content price-btn" style={{padding: "10px 20px"}}>From <br /><span style={{fontSize: "20px"}}>${now_day_price}</span>/day</p> 
                    </div>
                    <div className='p-l-s'>
                        <div className='flex align-center gap-xs m-b-xs'>
                            <FontAwesomeIcon className='icon' icon={faChair} />{seats} Seats
                        </div>
                        {bags ? <div className='flex align-center gap-xs m-b-xs'>
                            <FontAwesomeIcon className='icon' icon={faBagShopping} />{bags} Bags
                        </div> : ""}
                        <div className='flex align-center gap-xs m-b-xs'>
                            <FontAwesomeIcon className='icon' icon={faDoorOpen} />{doors} Doors
                        </div>
                        <div className='flex align-center gap-xs'>
                            <FontAwesomeIcon className='icon' icon={faSnowflake} />{snow}
                        </div>
                       
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img className='vehicle-img' src={img_url} alt='...laoding'/>
                </div>
            </div>
        </div>
    </Link>
  );
}
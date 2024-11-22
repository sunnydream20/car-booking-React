import React from 'react';
import './component.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function BrandComp ({id, type, type_des, seats, bags, doors, snow, img_url, later_day_price, now_day_price, details }) {

  return (
        <div>
            <div className='brand-item flex flex-wrap'>
                <div className='flex justify-center'>
                    <img src={img_url} alt='...laoding'/>
                </div>
                <div className='brand-information flex flex-wrap gap-s'>
                    <div>
                        <h2 className='m-0 color-primary'>{type}</h2>
                        <p className='m-0 color-primary'><strong>{type_des}</strong></p>

                        <div className='m-t-xs flex gap-s flex-wrap'>
                            <div className='flex align-center gap-xs m-b-xs'>
                                <FontAwesomeIcon className='icon' icon={faChair} />{seats} Seats
                            </div>
                            {bags ? <div className='flex align-center gap-xs m-b-xs'>
                                <FontAwesomeIcon className='icon' icon={faBagShopping} />{bags} Bags
                            </div> : ""}
                            <div className='flex align-center gap-xs m-b-xs'>
                                <FontAwesomeIcon className='icon' icon={faDoorOpen} />{doors} Doors
                            </div>
                            <div className='flex align-center gap-xs m-b-xs'>
                                <FontAwesomeIcon className='icon' icon={faSnowflake} />{snow}
                            </div>
                        
                        </div>

                        <div className="faq-drawer">
                            <input className="faq-drawer__trigger" id={`faq-drawer-${id}`} type="checkbox" defaultChecked/><label className="faq-drawer__title" htmlFor={`faq-drawer-${id}`}>Details </label>
                            <div className="faq-drawer__content-wrapper">
                                <div className="faq-drawer__content flex flex-wrap gap-xs">
                                    {details && details.length > 0 ? details.map((detail, key) => (
                                        <div key={key} className='flex gap-xs align-center'>
                                            <FontAwesomeIcon icon={faCheck} />
                                            <span className='detail-item'>{detail}</span>
                                        </div>
                                    )) : (<span style={{
                                        fontSize: "14px"
                                    }}>no-details</span>)}
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                    <div className='flex flex-wrap gap-s p-l-s'>
                        <div>
                            <p className='color-primary'><span className='price-brand'>Rp {later_day_price}</span> / Day</p>
                            <button className='pay-later'>PAY LATER</button>
                        </div>
                        <div>
                            <p className='color-primary'><span className='price-brand'>Rp {now_day_price}</span> / Day</p>
                            <button className='pay-now'>PAY NOW</button>
                        </div>
                        
                    </div>
                    <div style={{
                        marginTop: "20px",
                        marginLeft: "10px"
                    }}>
                            <Link to={`/whatsapp/${id}`} className='brand-download-btn'>Download</Link >
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
  );
}
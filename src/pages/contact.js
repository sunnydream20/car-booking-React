// src/pages/Home.js
import React from 'react';
import './page.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import MapComponent from '../components/MapComp';

const Contact = () => {


    return (
        <div className='contact-content'>
            <div className='contact-information-outside'>
                <div className='container'>
                    <div className='flex flex-wrap'>
                        <div className='col-lg-4 col-md-3 col-sm-10'>
                            <p className='font-s color-primary'>JFK AirPort, New York</p>
                            <div className='contact-info-part flex gap-s align-baseline'>
                                <FontAwesomeIcon icon={faMapLocation} className='color-secondary'/>
                                <p className='color-primary'>1230 # Spring Rd, Los Angeles, CA, USA</p>
                            </div>
                            <div className='contact-info-part flex gap-s align-baseline'>
                                <FontAwesomeIcon icon={faPhoneSquare} className='color-secondary'/>
                                <div className='color-primary'>
                                    <p>Phone: +1 2202-9380434</p>
                                    <p>FAX: +1 2938 83873</p>
                                </div>
                            </div>
                            <div className='contact-info-part flex gap-s align-baseline'>
                                <FontAwesomeIcon icon={faClock} className='color-secondary'/>
                                <div className='color-primary'>
                                    <p>Mon-Fri: 09:00 AM - 09:00 PM</p>
                                    <p>Saturday: 09:00 AM - 09:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-3 col-sm-10'>
                            <p className='font-s color-primary'>West Los Angeles</p>
                            <div className='contact-info-part flex gap-s align-baseline'>
                                <FontAwesomeIcon icon={faMapLocation} className='color-secondary'/>
                                <p className='color-primary'>1230 # Spring Rd, Los Angeles, CA, USA</p>
                            </div>
                            <div className='contact-info-part flex gap-s align-baseline'>
                                <FontAwesomeIcon icon={faPhoneSquare} className='color-secondary'/>
                                <div className='color-primary'>
                                    <p>Phone: +1 2202-9380434</p>
                                    <p>FAX: +1 2938 83873</p>
                                </div>
                            </div>
                            <div className='contact-info-part flex gap-s align-baseline'>
                                <FontAwesomeIcon icon={faClock} className='color-secondary'/>
                                <div className='color-primary'>
                                    <p>Mon-Fri: 09:00 AM - 09:00 PM</p>
                                    <p>Saturday: 09:00 AM - 09:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-3 col-sm-10'>
                            <p className='font-s color-primary'>Golden Plasa, Las Vegas</p>
                            <div className='contact-info-part flex gap-s align-baseline'>
                                <FontAwesomeIcon icon={faMapLocation} className='color-secondary'/>
                                <p className='color-primary'>1230 # Spring Rd, Los Angeles, CA, USA</p>
                            </div>
                            <div className='contact-info-part flex gap-s align-baseline'>
                                <FontAwesomeIcon icon={faPhoneSquare} className='color-secondary'/>
                                <div className='color-primary'>
                                    <p>Phone: +1 2202-9380434</p>
                                    <p>FAX: +1 2938 83873</p>
                                </div>
                            </div>
                            <div className='contact-info-part flex gap-s align-baseline'>
                                <FontAwesomeIcon icon={faClock} className='color-secondary'/>
                                <div className='color-primary'>
                                    <p>Mon-Fri: 09:00 AM - 09:00 PM</p>
                                    <p>Saturday: 09:00 AM - 09:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MapComponent />
                <div className='container color-primary'>
                    <h1 className='color-primary'>CONTACT US</h1>
                    <div className='flex flex-wrap gap-s'>
                        <div className='col-lg-5 col-md-5 col-sm-8'>
                            <p>Your Message</p>
                            <textarea type="text" className='contact-control textarea' placeholder='Enter Your Message' />
                        </div>
                        <div className='col-lg-5 col-md-5 col-sm-8'>
                            <p>First Name *</p>
                            <input type='text' className='contact-control contact-textarea' placeholder='Enter Your First Name' />
                            <p>Email *</p>
                            <input type='email' className='contact-control contact-textarea' placeholder='email@domain.com' />
                            <button className='submit'>Submit</button>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Contact;
// src/Layout/Footer.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-color-primary'>
      <div className='container'>
        <div className='flex flex-col'>
          <div className='contact-footer'>
            <div className='row'>
              <div className='col-lg-3 col-md-4 col-sm-10'>
                <div className='m-b-xs'>
                  <span className='color-secondary'>ABOUT </span>
                  <span className='color-white'>CAR RENTAL</span> 
                </div>
                <div>
                  <p className='color-lightgray font-xxs m-0'>Motors Automotive we repair domestic and foreign cars. We service the Los Angeles Metro Area for all Automotive Service & Repair.</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-10'>
                <div className='m-b-xs'>
                  <span className='color-white'>CONTACT INFO</span> 
                </div>
                <div>
                  <div>
                    <span className='color-lightgray font-xxs font-bold'>Car Rental Office: </span>
                    <span className='color-white font-xxs'>(323) 9873-9472</span>
                  </div>
                  <div>
                    <span className='color-lightgray font-xxs font-bold'>Vehicle Repair Service: </span>
                    <span className='color-white font-xxs'>(878) 4624-5636</span>
                  </div>
                  <div>
                    <span className='color-lightgray font-xxs font-bold'>Email: </span>
                    <span className='color-white font-xxs '>info@sytleixthemes.com</span>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-10'>
                <div className='m-b-xs'>
                  <span className='color-white'>SERVICE HOURS</span> 
                </div>
                <div>
                  <div>
                    <span className='color-lightgray font-xxs font-bold'>Monday - Friday: </span>
                    <span className='color-white font-xxs'>09:00AM - 07-00PM</span>
                  </div>
                  <div>
                    <span className='color-lightgray font-xxs font-bold'>Saturday: </span>
                    <span className='color-white font-xxs'>09:00AM - 07:00PM</span>
                  </div>
                  <div>
                    <span className='color-lightgray font-xxs font-bold'>SUnday: </span>
                    <span className='color-white font-xxs '>Closed</span>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-10'>
                <div className='m-b-xs'>
                  <span className='color-white'>Social Network</span> 
                </div>
                <div className='flex gap-s'>
                  <div className='footer-link-div'>
                    <FontAwesomeIcon icon={faFacebook} style={{
                      width: "18px",
                      height: "18px",
                      color: "white"
                    }}/>
                  </div>
                  <div className='footer-link-div'>
                    <FontAwesomeIcon icon={faTwitter} style={{
                      width: "18px",
                      height: "18px",
                      color: "white"
                    }}/>
                  </div>
                  <div className='footer-link-div'>
                    <FontAwesomeIcon icon={faLinkedin} style={{
                      width: "18px",
                      height: "18px",
                      color: "white"
                    }}/>
                  </div>
                  <div className='footer-link-div'>
                    <FontAwesomeIcon icon={faYoutube} style={{
                      width: "18px",
                      height: "18px",
                      color: "white"
                    }}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='copyright-footer b-t-g p-s flex flex-wrap align-center justify-spacebetween'>
              <p className='color-lightgray'>Copyright @ 2024. <span className='color-secondary'>Motors</span> - WordPress Theme By <span className='color-secondary'>StylemixThemes</span></p>
              <div>
                <FontAwesomeIcon icon={faFacebook} style={{
                  color: "#f78e20",
                  marginRight: "20px"
                }}/>
                <FontAwesomeIcon icon={faInstagram} style={{
                  color: "#f78e20"
                }}/>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
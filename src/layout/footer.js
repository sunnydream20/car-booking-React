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
                  <span className='color-white'>CARTOPIA</span> 
                </div>
                <div>
                  <p className='color-lightgray font-xxs m-0' style={{
                    textAlign: "justify"
                  }}>Cartopia menawarkan pengalaman membeli mobil berkualitas dengan mudah dan aman. <br />Kami menyediakan pilihan mobil baru yang telah terjamin kualitasnya, didukung oleh layanan pelanggan yang profesional. Temukan mobil impian Anda bersama kami!</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-10'>
                <div className='m-b-xs'>
                  <span className='color-white'>CONTACT INFO</span> 
                </div>
                <div>
                  <div>
                    <span className='color-lightgray font-xxs font-bold'>Office: </span>
                    <span className='color-white font-xxs'>021 - xxx - xxx</span>
                  </div>
                  <div>
                    <span className='color-lightgray font-xxs font-bold'>Email: </span>
                    <span className='color-white font-xxs '>cs@cartopia.id</span>
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
                    <span className='color-white font-xxs'>09:00AM - 05-00PM</span>
                  </div>
                  <div>
                    <span className='color-lightgray font-xxs font-bold'>Saturday: </span>
                    <span className='color-white font-xxs'>09:00AM - 05:00PM</span>
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
              <p className='color-lightgray'>Copyright @ 2024 -  <span className='color-secondary'>CARTOPIA.</span></p>
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
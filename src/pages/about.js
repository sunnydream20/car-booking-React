// src/pages/Home.js
import React, { useState } from 'react';
import './page.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCheck } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
        
            <div className='about-content'>
                <div className='banner-aboutus'></div>
                <div className='container'>
                    <div className='flex flex-wrap'>
                        <div className='col-lg-6 col-md-5 col-sm-10'>
                            <img className='about-welcome-img' src='https://lh3.googleusercontent.com/u/0/d/1Pda4k5IoiOJMPtRgmfBRN1_BFdrU3yRY=w1920-h953-iv1' alt='...loading' />
                        </div>
                        <div className='col-lg-6 col-md-5 col-sm-10 welcome-about'>
                            <h2 className='color-primary'>Welcome To the <span className='color-secondary'>MOTORS</span></h2>
                            <p>Cartopia adalah perusahaan jasa penjualan otomotif yang berkomitmen untuk
memberikan penawaran harga terbaik dengan proses termudah, menyediakan
berbagai pilihan Mobil baru dari authorized dealer dengan garansi resmi dengan
Visi menjadi One Stop Solution untuk setiap kebutuhan pembelian Mobil baru
Anda.
                            </p>
                        </div>
                    </div>
                   
                    <div className='flex flex-wrap'>
                       
                        <div className='col-lg-6 col-md-5 col-sm-10 welcome-about'>
                            <h2 className='color-primary'>CORE VALUES</h2>
                            <p>We go through extensive factory training so that we may provide you with the knowledge you need to make an educated decision in choosing the vehicle that is right for your lifestyle.</p>
                           <div className='flex align-center gap-s m-b-xs'>
                                <FontAwesomeIcon icon={faCheck} className='color-secondary'/>
                                <p className='color-primary m-0'>Stress-free finance department</p>
                           </div>
                           <div className='flex align-center gap-s m-b-xs'>
                                <FontAwesomeIcon icon={faCheck} className='color-secondary'/>
                                <p className='color-primary m-0'>Robust selection of popular vehicles.</p>
                           </div>
                           <div className='flex align-center gap-s m-b-xs'>
                                <FontAwesomeIcon icon={faCheck} className='color-secondary'/>
                                <p className='color-primary m-0'>350 offers on site, trusted by a community.</p>
                           </div>
                           <div className='flex align-center gap-s m-b-xs'>
                                <FontAwesomeIcon icon={faCheck} className='color-secondary'/>
                                <p className='color-primary m-0'>Maintain your car to stay safe on the road</p>
                           </div>
                           <div className='flex align-center gap-s m-b-xs'>
                                <FontAwesomeIcon icon={faCheck} className='color-secondary'/>
                                <p className='color-primary m-0'>We know how to handle a wide range of car services.</p>
                           </div>
                        </div>

                        <div className='col-lg-6 col-md-5 col-sm-10'>
                            <img className='about-welcome-img m-b-s' src='https://lh3.googleusercontent.com/u/0/d/1LN8sd9FVLhIrOY0Mp0XQK7ZKba0dtfVy=w1920-h953-iv1' alt='...loading' />
                        </div>
                    </div>
                </div>
                <div className='about-gallery'>
                    <div className='container'>
                        <h1 className='color-white text-center media-title'>Media Gallery</h1>

                        <div className="colored-separator vc_custom_1445510911464 text-center style_1">
                            <div className="first-long stm-base-background-color"></div>
                            <div className="last-short stm-base-background-color"></div>
                        </div>

                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 10,
                            modifier: 1,
                            slideShadows: true,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide style={{
                                backgroundImage: "url('https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/parallax-block-2-1596x449.jpg')"
                            }}></SwiperSlide>
                            <SwiperSlide style={{
                                backgroundImage: "url('https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/slide-2-1597x597.jpg')"
                            }}></SwiperSlide>
                            <SwiperSlide style={{
                                backgroundImage: "url('https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/parallax-block-1919x1359.jpg')"
                            }}></SwiperSlide>
                            <SwiperSlide style={{
                                backgroundImage: "url('https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/Fotolia_90052796_Subscription_Monthly_M-1023x681.jpg')"
                            }}></SwiperSlide>
                            <SwiperSlide style={{
                                backgroundImage: "url('https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/Fotolia_53618826_Subscription_Monthly_M-1023x681.jpg')"
                            }}></SwiperSlide>
                            <SwiperSlide style={{
                                backgroundImage: "url('https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/image-2-924x449.jpg')"
                            }}></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className='our-team'>
                    <h1 className='color-primary text-center media-title'>Our Team</h1>

                    <div className="colored-separator vc_custom_1445510911464 text-center style_1">
                        <div className="first-long stm-base-background-color"></div>
                        <div className="last-short stm-base-background-color"></div>
                    </div>
                    <div className='container'>
                        <div id="card-area">
                            <div className="wrapper">
                                <div className="box-area">
                                    <div className="box">
                                        <img alt="" src="https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/3-509x339.jpg" />
                                        <div className="overlay">
                                            <p className='color-white name'>Lennox Wardell</p>
                                            <p className='color-white'>Chief Executive Officer</p>
                                            <p className='color-white'>CEO@motor.com</p>
                                            <a href="#"><FontAwesomeIcon icon={faPhone} />+1 0938 0945</a>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <img alt="" src="https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/4-2-509x339.jpg" />
                                        <div className="overlay">
                                            <p className='color-white name'>Lennox Wardell</p>
                                            <p className='color-white'>Chief Executive Officer</p>
                                            <p className='color-white'>CEO@motor.com</p>
                                            <a href="#"><FontAwesomeIcon icon={faPhone} />+1 0938 0945</a>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <img alt="" src="https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/2_-509x339.jpg" />
                                        <div className="overlay">
                                            <p className='color-white name'>Lennox Wardell</p>
                                            <p className='color-white'>Chief Executive Officer</p>
                                            <p className='color-white'>CEO@motor.com</p>
                                            <a href="#"><FontAwesomeIcon icon={faPhone} />+1 0938 0945</a>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <img alt="" src="https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/1-509x339.jpg" />
                                        <div className="overlay">
                                            <p className='color-white name'>Lennox Wardell</p>
                                            <p className='color-white'>Chief Executive Officer</p>
                                            <p className='color-white'>CEO@motor.com</p>
                                            <a href="#"><FontAwesomeIcon icon={faPhone} />+1 0938 0945</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-banner-social'>
                    <div className='container'>
                        <div className='flex flex-wrap justify-center align-center'>
                            <img className='about-social-img' src='https://lh3.googleusercontent.com/u/0/d/1-Q7Fr_Ld5GlPBfLZnZqBVuYxaq9WT5uv=w1886-h867-iv1' alt='...loading' />
                            <img className='about-social-img' src='https://lh3.googleusercontent.com/u/0/d/1UbGaOIaGerHdz_F0FUYfKEPfbQ2XGnQG=w1886-h867-iv1' alt='...loading' />
                            <img className='about-social-img' src='https://lh3.googleusercontent.com/u/0/d/1qhvukL89lvxOLEd4R1VSlTrzBvLhVC_3=w1251-h867-iv1' alt='...loading' />
                            <img className='about-social-img' src='https://lh3.googleusercontent.com/u/0/d/18Jd0umRrKVjJeha-CJt065OrdrhNx2JO=w1251-h867-iv1' alt='...loading' />
                            <img className='about-social-img' src='https://lh3.googleusercontent.com/u/0/d/18LRQzFfOoFMu4fOFL9lok68vFB5x3WjQ=w1251-h867-iv1' alt='...loading' />
                            <img className='about-social-img' src='https://lh3.googleusercontent.com/u/0/d/1XRyiFm9MdQQ5H6pB9PNJAGLOhP9eN1ay=w1251-h867-iv1' alt='...loading' />
                            <img className='about-social-img' src='https://lh3.googleusercontent.com/u/0/d/1koEpIAhNsOpM2C3SG1_-8tdDbHWkKHuW=w1251-h867-iv1' alt='...loading' />
                            <img className='about-social-img' src='https://lh3.googleusercontent.com/u/0/d/1pG-GDTEhHeTDIoVVxJkqEKge0vL6OGZA=w1251-h867-iv1' alt='...loading' />

                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
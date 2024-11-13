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
                <div className='container'>
                    <div className='flex flex-wrap'>
                        <div className='col-lg-6 col-md-5 col-sm-10'>
                            <img className='about-welcome-img' src='https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/Fotolia_53618826_Subscription_Monthly_M-1023x681.jpg' alt='...loading' />
                        </div>
                        <div className='col-lg-6 col-md-5 col-sm-10 welcome-about'>
                            <h2 className='color-primary'>Welcome To the <span className='color-secondary'>MOTORS</span></h2>
                            <p>Before we get ahead of ourselves, we want to welcome you to Loeber Motors. While nothing can replace thing on-the-lot experience.</p>
                            <p>
                            We appreciate you taking the time today to visit our web site. Our goal is to give you an interactive tour of our new and used inventory, as well as allow you to conveniently get a quote, schedule a service appointment, or apply for financing. The search for a luxury car is filled with high expectations. Undoubtedly, that has a lot to do with the vehicles you are considering, but at Motors, we think you should also have pretty high expectations for your dealership.
                            </p>
                            <p className='italic'> — MIKEY DIOKLES, President of Motors</p>
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
                            <img className='about-welcome-img m-b-s' src='https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/Fotolia_90052796_Subscription_Monthly_M-1023x681.jpg' alt='...loading' />
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
                            <img className='about-social-img' src='https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/1-300x150-299x149.png' alt='...loading' />
                            <img className='about-social-img' src='https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/5-300x150-299x149.png' alt='...loading' />
                            <img className='about-social-img' src='https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/6-300x150-299x149.png' alt='...loading' />
                            <img className='about-social-img' src='https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/4-300x150-299x149.png' alt='...loading' />
                            <img className='about-social-img' src='https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/5-300x150-299x149.png' alt='...loading' />
                            <img className='about-social-img' src='https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/6-300x150-299x149.png' alt='...loading' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
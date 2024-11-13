// src/pages/Home.js
import React from 'react';
import './page.css';
import BannerForm from '../components/banner-form';
import WhyChooseUs from "../components/why-choose-us";
import Vehicle from "../components/vehicle";
import MapComponent from "../components/MapComp";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

const vehicleData = [
    {
        id: 1,
        type: "Premium",
        type_des: "Volkswagen Tiguan or Similar",
        seats: 4,
        bags: 2,
        doors: 4,
        snow: "A/C",
        img_url: "https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/suv_trucks-1.png",
        later_day_price: 900,
        now_day_price: 800
    },
    {
        id: 2,
        type: "Economy",
        type_des: "Mini Cooper 3 or Similar",
        seats: 4,
        doors: 2,
        snow: "A/C",
        img_url: "https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/economy.png",
        later_day_price: 150,
        now_day_price: 100
    },
    {
        id: 3,
        type: "Standart",
        type_des: "Volkswagen Tiguan or Similar",
        seats: 4,
        bags: 2,
        doors: 4,
        snow: "A/C",
        img_url: "https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/stand-1.png",
        later_day_price: 340,
        now_day_price: 280
    },
    {
        id: 4,
        type: "Specially",
        type_des: "Volkswagen Tiguan or Similar",
        seats: 4,
        bags: 2,
        doors: 4,
        snow: "A/C",
        img_url: "https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/speciality.png",
        later_day_price: 600,
        now_day_price: 589
    },
    {
        id: 5,
        type: "Minivan",
        type_des: "Volkswagen Tiguan or Similar",
        seats: 4,
        bags: 2,
        doors: 4,
        snow: "A/C",
        img_url: "https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/minivan_van.png",
        later_day_price: 1240,
        now_day_price: 1180
    },
    {
        id: 6,
        type: "Convertible",
        type_des: "Volkswagen Tiguan or Similar",
        seats: 4,
        bags: 2,
        doors: 4,
        snow: "A/C",
        img_url: "https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/conv-1.png",
        later_day_price: 1001,
        now_day_price: 900
    },
]

const Home = () => {

    const vehicles = () => {
        return vehicleData.map(vehicle => (
            <Vehicle 
                key={vehicle.id} 
                id={vehicle.id}
                type={vehicle.type} 
                type_des={vehicle.type_des} 
                seats={vehicle.seats} 
                bags={vehicle.bags} 
                doors={vehicle.doors} 
                snow={vehicle.snow} 
                img_url={vehicle.img_url} 
                later_day_price={vehicle.later_day_price} 
                now_day_price={vehicle.now_day_price} 
            />
        ));
    };

    return (
        <>
            <div className='including-form'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-10 col-sm-10'>
                            <div className="stm_text_baloon">
                                <div className="inner">
                                    <h1><span style={{ color:"#ffffff" }} >&nbsp;20%</span></h1>
                                    <h2><span  className='color-primary'>OFF</span></h2>
                                    <h4 className='color-primary'>For Online <br /> Booking</h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-10 col-sm-10 banner-form'>
                            <BannerForm />
                        </div>
                    </div>
                </div>
            </div>
            <div className='why-choose-us'>
                <div className='container'>
                    <WhyChooseUs />
                </div>
            </div>
            <div className='vehicle-background'>
                <div className='vehicle-categories'>
                    <div className='container'>
                        <h1 className='vehicle-title color-white m-t-0'>Vehicle Categories</h1>
                        <div className='row'>
                            {vehicles()}
                        </div>
                    </div>
                </div>
            </div>
            <div className='what-our-clients-say'>
                <div className='container'>
                    <h1 className='color-primary text-center m-0 p-s'>What Our Clients Say</h1>
                    <Swiper
                        spaceBetween={20}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            // when window width is <= 640px
                            560: {
                                slidesPerView: 1, // Show 1 slide
                            },
                            // when window width is > 640px and <= 1024px
                            800: {
                                slidesPerView: 2, // Show 2 slides (optional)
                            },
                            // when window width is > 1024px
                            1025: {
                                slidesPerView: 3, // Show 3 slides
                            },
                        }}
                        >
                        <SwiperSlide>
                            <div className='text-center b-d-g' style={{
                                padding: "20px 30px 0px 30px"
                            }}>
                                <img className='client-img' src='https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/avatar-2-1-67x67.jpg' alt='...loading' />
                                <h3 className='client-name'>John Doe</h3>
                                <p className='client-bio'>Sed malesuada, neque quis tincidunt suscipit, lorem lectus rutrum lacus, a iaculis ipsum eros sed ipsum. Sed scelerisque massa ut nibh tincidunt, eget pellentesque.		
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='text-center b-d-g' style={{
                                padding: "20px 30px 0px 30px"
                            }}>
                                <img className='client-img' src='https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/man1-66x66.jpg' alt='...loading' />
                                <h3 className='client-name'>Oliver Garden</h3>
                                <p className='client-bio'>Sed malesuada, neque quis tincidunt suscipit, lorem lectus rutrum lacus, a iaculis ipsum eros sed ipsum. Sed scelerisque massa ut nibh tincidunt, eget pellentesque.		
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='text-center b-d-g' style={{
                                padding: "20px 30px 0px 30px"
                            }}>
                                <img className='client-img' src='https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/woman-67x67.jpg' alt='...loading' />
                                <h3 className='client-name'>Ann Black</h3>
                                <p className='client-bio'>Sed malesuada, neque quis tincidunt suscipit, lorem lectus rutrum lacus, a iaculis ipsum eros sed ipsum. Sed scelerisque massa ut nibh tincidunt, eget pellentesque.		
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='text-center b-d-g' style={{
                                padding: "20px 30px 0px 30px"
                            }}>
                                <img className='client-img' src='https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/avatar-2-1-67x67.jpg' alt='...loading' />
                                <h3 className='client-name'>Lon Lahm</h3>
                                <p className='client-bio'>Sed malesuada, neque quis tincidunt suscipit, lorem lectus rutrum lacus, a iaculis ipsum eros sed ipsum. Sed scelerisque massa ut nibh tincidunt, eget pellentesque.		
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='text-center b-d-g ' style={{
                                padding: "20px 30px 0px 30px"
                            }}>
                                <img className='client-img' src='https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/woman-67x67.jpg' alt='...loading' />
                                <h3 className='client-name'>Ann Black</h3>
                                <p className='client-bio'>Sed malesuada, neque quis tincidunt suscipit, lorem lectus rutrum lacus, a iaculis ipsum eros sed ipsum. Sed scelerisque massa ut nibh tincidunt, eget pellentesque.		
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='what-do-we-know bg-color-primary'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-5 col-sm-10 p-0 color-white'>
                            <h1 className='aboutus-title'>What Do You Know About Us</h1>
                            <p className='aboutus-bio'>Vestibulum id odio a erat gravida sollicitudin. Quisque porttitor turpis sit amet dolor imperdiet, et molestie tellus suscipit. Ut nec odio nisl. Quisque malesuada tortor non erat fermentum, sed sollicitudin nisl sodales. Pellentesque faucibus viverra massa, vitae tempus nisi venenatis eu. Proin mauris tellus, egestas ac tempor vitae, luctus lobortis nisl. Vivamus convallis gravida quam</p>
                            <button className='btn-secondary'>Our Company</button>
                        </div>
                        <div className='col-lg-6 col-md-5 col-sm-10 p-0'>
                            <div className='aboutus-img'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contact-banner bg-color-secondary'>
                <div className='container'>
                    <div className='row text-center align-center'>
                        <div className='col-lg-7 col-md-10 col-sm-10 '>
                            <h1 className='color-primary'>Have A Questions? Fell Free To Ask...</h1>
                        </div>
                        <div className='col-lg-3 col-md-10 col-sm-10 flex justify-center align-center'>
                        <FontAwesomeIcon className='icon color-white' icon={faPhoneSquare} style={{
                            height: "32px",
                            marginRight: "10px"
                        }}/> <span className='color-primary' style={{
                            fontSize: "22px"
                        }}>+1 879-8837-3984</span>
                        </div>
                        <div className='col-lg-2 col-md-10 col-sm-10 flex justify-center align-center'>
                            <div className='b-w flex' style={{
                                padding: "10px 20px"
                            }}>
                                <FontAwesomeIcon className='icon color-white' icon={faPhoneSquare} style={{
                                    height: "20px",
                                    marginRight: "10px"
                                }}/><span className='color-primary'>FEEDBACK</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-map'>
                <MapComponent />
            </div>
        </>
    );
};

export default Home;
// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import './page.css';
import WhyChooseUs from "../components/why-choose-us";
import Vehicle from "../components/vehicle";
import MapComponent from "../components/MapComp";

import { faChair } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination, Navigation, Autoplay } from 'swiper/modules';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [urls, setUrls] = useState([]);
    const [banners, setBanners] = useState([]);
    const [populars, setPopulars] = useState([]);
    const [promos, setPromos] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [currentCar, setCurrentCar] = useState({
        _id: "",
        type: "",
        typeDes: "",
        seats: 0,
        doors: 0,
        bags: 0,
        snow: "",
        imgUrl: "",
        details: [],
        nowDayPrice: 0,
        laterDayPrice: 0,
    })

    useEffect(() => {
        getCategory();
        getHomeSliders();
        getPopular();
        getPromo();
        getHomeBanners();
    }, [])

    const getCategory = async () => {
        setLoading(true);
        const startLoadingTime = Date.now(); // Record the start time
        try {
            const response = await axios.get("http://localhost:8080/api/category");
            setCategory(response.data.categories);
        }
        catch (err) {
            setError(err);
            console.log("Error");
        } 
        finally {
            const loadingDuration = Date.now() - startLoadingTime;
            const minimumLoadingTime = 1000; // 1 second in milliseconds
    
            if (loadingDuration < minimumLoadingTime) {
                // If less than 1 second, wait for the remaining time
                await new Promise(resolve => setTimeout(resolve, minimumLoadingTime - loadingDuration));
            }
            
            setLoading(false);
        }
    }

    const getHomeSliders = async () => {
        try {
            const sliderImgs = await axios.get("http://localhost:8080/api/homesliders");
            setUrls(sliderImgs.data.urls);
        } catch (error) {
            console.log(error);
        }
    }


    const getHomeBanners = async () => {
        try {
            const banners = await axios.get("http://localhost:8080/api/homebanners");
            setBanners(banners.data.homebanners);
        } catch (error) {
            console.log(error);
        }
    }

    const getPopular = async () => {
        try {
            const promosData = await axios.get("http://localhost:8080/api/homeadditions/popular");
            setPopulars(promosData.data.cars);
        } catch (error) {
            console.log(error);
        }
    }

    const getPromo = async () => {
        try {
            const promosData = await axios.get("http://localhost:8080/api/homeadditions/promo");
            setPromos(promosData.data.cars);
        } catch (error) {
            console.log(error);
        }
    }

    const seeDetail = async (id) => {
        try {
            const selectedCar = await axios.get('http://localhost:8080/api/car/'+id);
            var carData = selectedCar.data; 
            setCurrentCar({
                _id: carData._id,
                type: carData.type,
                typeDes: carData.typeDes,
                seats: carData.seats,
                doors: carData.doors,
                bags: carData.bags && carData.bags > 0 ? carData.bags : 0,
                snow: carData.snow,
                imgUrl: carData.imgUrl,
                details: carData.details,
                nowDayPrice: carData.nowDayPrice,
                laterDayPrice: carData.laterDayPrice,
            })
        } catch (error) {

        }
    }

    const vehicles = () => {
        // Check the length of the category array
        if (category.length === 0) {
            return <p>No data</p>; // Render a message if there are no vehicles
        }
    
        // Render Vehicle components if there are vehicles
        return category.map(vehicle => (
            <Vehicle 
                key={vehicle._id}
                id={vehicle._id}
                type={vehicle.type} 
                type_des={vehicle.typeDes} 
                seats={vehicle.seats} 
                bags={vehicle.bags} 
                doors={vehicle.doors} 
                snow={vehicle.snow} 
                img_url={vehicle.imgUrl} 
                now_day_price={vehicle.nowDayPrice} 
            />
        ));
    };

    const nextBanner = () => {
        const cards = document.querySelector('.card-content')
        cards.scrollLeft=cards.scrollLeft += window.innerWidth / 2 > 100 ? 220 : window.innerWidth -220
    }

    const prevBanner = () => {
        const cards = document.querySelector('.card-content')
        cards.scrollLeft=cards.scrollLeft -= window.innerWidth / 2 > 100 ? 220 : window.innerWidth -220
    }

    const handleSlideClick = (id) => {
        navigate(`/article/homeslider/${id}`);
    };

    return (
        <>
            {loading ? (
                <div className="loading-spinner"></div>
            ): (
                <>
                    <div className='including-form'>
                        <Swiper 
                            navigation={true}
                            modules={[Navigation, Autoplay]}
                            className="mySwiper" 
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false
                            }}>
                                {urls.map((data, key) => (
                              
                                        <SwiperSlide
                                            id={data._id}
                                            onClick={() => handleSlideClick(data._id)}
                                            key={key} style={{
                                            backgroundImage: `url(${data.url})`,
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover'
                                        }}>
                                            {/* <img className='slider-img' src={data.url} alt='...loading' /> */}
                                        </SwiperSlide>
                      
                                ))}
                        </Swiper>

                        <div>
                            
                            <div className="slider">
                                <button id="prev" onClick={() => {prevBanner()}} className="btn">
                                    <i className="las la-angle-left"></i>
                                </button>
                                <div className="card-content">
                                    {banners.map((data, key) => (
                                        <div className="card" key={key}>
                                            <div className="card-img">
                                                <img src={data.url} alt='...loading'/>                                
                                            </div>
                                            <div className="card-text">
                                                <h3>{data.title}</h3>
                                                <p>{data.des}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button id="next" onClick={() => {nextBanner()}} className="btn">
                                    <i className="las la-angle-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                   
                    <div className='popular-div' style={{
                        marginBottom: "20px"
                    }}>
                        <div className='container'>
                        <h1 className='color-primary text-center m-0 p-s'>Mobil Popular</h1>
                            <Swiper
                                spaceBetween={20}
                                freeMode={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation = {true}
                                modules={[Navigation, Pagination]}
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
                                        slidesPerView: 4, // Show 3 slides
                                    },
                                }}
                                >
                                    {populars.map((data, key) => (
                                         <SwiperSlide key={key}>
                                         <div className='text-center b-d-g' style={{
                                             padding: "10px 30px 10px 30px"
                                         }}>
                                             <div className='home-swiper-img-div' style={{
                                                 backgroundImage: `url(${data.imgUrl})`
                                             }}>
     
                                             </div>
                                           
                                             <h3 className='client-name'>{data.type}</h3>
                                             <p className='client-bio color-primary'>(Rp) <strong>{data.nowDayPrice}</strong></p>
                                             <p className='client-bio des-p'>{data.typeDes}</p>
                                             <a className='client-bio seedeatil-btn' onClick={() => {seeDetail(data._id)}} href="#see-car">Lihat Details</a>
                                         </div>
                                     </SwiperSlide>
                                    ))}
                            </Swiper>
                        </div>
                    </div>
                 
                    <div className='popular-div'>
                        <div className='container'>
                        <h1 className='color-primary text-center m-0 p-s'>Promo Terbaru</h1>
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
                                        slidesPerView: 4, // Show 3 slides
                                    },
                                }}
                                >
                                    {promos.map((data, key) => (
                                         <SwiperSlide key={key}>
                                         <div className='text-center b-d-g' style={{
                                             padding: "10px 30px 10px 30px"
                                         }}>
                                             <div className='home-swiper-img-div' style={{
                                                 backgroundImage: `url(${data.imgUrl})`
                                             }}>
     
                                             </div>
                                           
                                             <h3 className='client-name'>{data.type}</h3>
                                             <p className='client-bio color-primary'>(Rp) <strong>{data.nowDayPrice}</strong></p>
                                             <p className='client-bio des-p'>{data.typeDes}</p>
                                             <a className='client-bio seedeatil-btn' onClick={() => {seeDetail(data._id)}} href="#see-car">Lihat Details</a>
                                         </div>
                                     </SwiperSlide>
                                    ))}
                            </Swiper>
                        </div>
                    </div>
                 

                    <div className='vehicle-background'>
                        <div className='vehicle-categories'>
                            <div className='container'>
                                <h1 className='vehicle-title color-white m-t-0'>Brand Mobil</h1>
                                <div className='row'>
                                    {vehicles()}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='why-choose-us'>
                        <div className='container p-b-30'>
                            <WhyChooseUs />
                        </div>
                    </div>

                    <div className='what-do-we-know bg-color-primary'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6 col-md-5 col-sm-10 p-0 color-white'>
                                    <h1 className='aboutus-title'>About Us</h1>
                                    <p className='aboutus-bio'>Cartopia adalah perusahaan jasa penjualan otomotif yang berkomitmen untuk
memberikan penawaran harga terbaik dengan proses termudah, menyediakan
berbagai pilihan Mobil baru dari authorized dealer dengan garansi resmi dengan
Visi menjadi One Stop Solution untuk setiap kebutuhan pembelian Mobil baru
Anda.</p>
                                    <button className='btn-secondary'>Our Company</button>
                                </div>
                                <div className='col-lg-6 col-md-5 col-sm-10 p-0'>
                                    <div className='aboutus-img'>
                                    </div>
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
                    <div id="see-car" className="modal">
                        <div className="modal__content gap-s">
                            <div className='flex align-center justify-center'>
                                <div className='home-modal-img-div' style={{
                                    backgroundImage: `url(${currentCar.imgUrl})`
                                }}>
                            </div>
                            </div>
                            <div className='home-modal-details flex-1'>
                                <h1>{currentCar.type}</h1>
                                <h3>{currentCar.typeDes}</h3>
                                <h3>{currentCar.nowDayPrice}(RP)</h3>
                                <div className='flex flex-wrap gap-s align-center'>
                                    <div className='flex align-center color-primary gap-xs m-b-xs'>
                                        <FontAwesomeIcon className='icon' icon={faChair} /> {currentCar.seats} Seats
                                    </div>
                                    {currentCar.bags > 0 ? (<div className='flex align-center color-primary gap-xs m-b-xs'>
                                        <FontAwesomeIcon className='icon' icon={faBagShopping} /> {currentCar.seats} Bags
                                    </div>) : "" }
                                    <div className='flex align-center gap-xs m-b-xs color-primary'>
                                        <FontAwesomeIcon className='icon' icon={faDoorOpen} /> {currentCar.doors} Doors
                                    </div>
                                    <div className='flex align-center gap-xs color-primary m-b-xs'>
                                        <FontAwesomeIcon className='icon' icon={faSnowflake} /> {currentCar.snow}
                                    </div>
                                </div>
                                <div className='flex flex-wrap'>
                                    {currentCar.details.map((data, key) => (
                                        <div className='home-modal-detail-span'>{data}</div>
                                    ))}
                                </div>
                                <div style={{
                                    marginTop: "20px"
                                }}>
                                    <Link className='wa-btn' to={`whatsapp/${currentCar._id}`} >Redirect To WA</Link>
                                </div>
                            </div>
                                <a href = "#" className="modal__close">&times;</a>
                        </div>
                    </div>
                    <div className='home-map'>
                        <MapComponent />
                    </div>
                </>
            )}
        </>
    );
};

export default Home;
// src/pages/About.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { useParams } from 'react-router-dom';
// import BrandComp from "../components/brandcomp";
import BrandComp from '../components/brandcomp';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination, Navigation, Autoplay } from 'swiper/modules';

const options = [
  { value: 'default_sort', label: 'Default Sorting' },
  { value: 'popular_sort', label: 'Sort by popularity' },
  { value: 'rate_sort', label: 'Sort by average rating' },
  { value: 'latest_sort', label: 'Sort by latest' },
  { value: 'low_high_sort', label: 'Sorty by price: low to high' },
  { value: 'high_low_sort', label: 'Sorty by price: high to low' },
];

const Brand = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [promos, setPromos] = useState([]);

  const {id} = useParams();

  useEffect(()=>{
    brands();
    getPromos();
  }, [])

  const brands = async() => {
    setLoading(true);
    const startLoadingTime = Date.now(); // Record the start time
    try {
      const response = await axios.get("http://localhost:8080/api/car/bycat/"+id);
      setCars(response.data);
    }
    catch (error) {
      setError(error);
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

  const getPromos = async() => {
    try {
      const promosData = await axios.get("http://localhost:8080/api/homeadditions/promo/" + id);
          setPromos(promosData.data);
      } catch (error) {
          console.log(error);
      }
  }
  return (
    <>
    {loading ? (
      <div className="loading-spinner"></div>
    ) : (
      <div>
      <div className='brand-reservation text-center'>
        <div className='container'>
        <h1 className='color-white text-center m-0 p-s'>Promo</h1>
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
                  {promos.map((data, key) => (
                        <SwiperSlide key={key}>
                        <div className='text-center b-d-g' style={{
                            padding: "20px 30px 0px 30px"
                        }}>
                            <div className='home-swiper-img-div' style={{
                                backgroundImage: `url(${data.imgUrl})`
                            }}>

                            </div>
                          
                            <h3 className='client-name'>{data.type}</h3>
                            <h3 className='client-name'>{data.typeDes}</h3>
                        </div>
                    </SwiperSlide>
                  ))}
          </Swiper>
        </div>
      </div>
      <div className='brand-content'>
        <div className='container brand-container'>
          <div className='brand-filter-form'>
            <h1 className='brand-filter-title color-primary'>Select Vehicle / Add - Ons</h1>
            <div className='brand-filter'>
              <Select
                  defaultValuem={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
              />
            </div>
          </div>

          <div className='brand-list'>
          { cars.length > 0 ? cars.map((data) => (
               <BrandComp
                key={data._id}
                id={data._id}
                type={data.type}
                type_des={data.type_des}
                seats={data.seats}
                bags={data.bags}
                doors={data.doors}
                snow={data.snow}
                img_url={data.imgUrl}
                later_day_price={data.laterDayPrice}
                now_day_price={data.nowDayPrice}
                details = {data.details}
              />
          )) : <p>No Vehicles</p>}
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  );
};

export default Brand;
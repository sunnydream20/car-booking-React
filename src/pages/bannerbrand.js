// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import './page.css';

// Import Swiper styles
import BannerBrandComp from "../components/bannerbrand";
import axios from 'axios';

const prefix = "http://localhost:8080/api";

const BannerBrand = () => {

    const [banners , setBanners] = useState([]);

    useEffect(() => {
        getHomeBanners();
    }, [])

    const getHomeBanners = async () => {
        try {
            const banners = await axios.get(prefix + "/homebanners");
            setBanners(banners.data.homebanners);
            console.log(banners)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='banner-content'>
                <h1 className='title color-white'>Brand Mobil</h1>
                <div className='flex flex-wrap align-center justify-center'>
                        {banners?banners.map((data, key) => (
                            <BannerBrandComp 
                                key={key}
                                id = {data._id}
                                url = {data.url}
                                title = {data.title}
                                des = {data.des}
                                />
                        )) : ""}
                </div>
             
            </div>
        </>
    );
};

export default BannerBrand;
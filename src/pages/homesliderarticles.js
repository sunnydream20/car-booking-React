// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import './page.css';

// Import Swiper styles
import Blog from "../components/blog";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const prefix = "http://localhost:8080/api";

const HomeSliderArticle = () => {

    const [articles , setArticles] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        getBlogs();
    }, [])

    const getBlogs = async () => {
        try {
            const data = await axios.get(prefix + '/articles/homeslider/' + id);
            setArticles(data.data);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='article-content'>
                <h2 className='article-title color-primary'>HomeSlider - Articles</h2>
                <div className='flex flex-wrap container align-center justify-center'>
                        {articles?articles.map((data, key) => (
                            <Blog 
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

export default HomeSliderArticle;
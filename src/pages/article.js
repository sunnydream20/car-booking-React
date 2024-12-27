// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import './page.css';
import { Pagination } from 'antd';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Blog from "../components/blog";
import axios from 'axios';

const prefix = "http://localhost:8080/api";

const Article = () => {
    const [totalPageSize, setTotalPageSize] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [articles , setArticles] = useState([]);

    useEffect(() => {
        gotoLength();
        getBlogs();
    }, [])

    useEffect(() => {
        console.log(totalPageSize)
    }, [totalPageSize])

    useEffect(() => {
        getBlogs();
    }, [currentPage])

    

    const gotoLength = async () => {
        try {
            const data = await axios.get(prefix + '/articles/page/totallength');
            setTotalPageSize(data.data.totalLength);
        } catch (err) {
            console.log(err);
        }
    }

    const getBlogs = async () => {
        try {
            const data = await axios.get(prefix + '/articles/get/pagination' , {
                params: {
                    currentPage,
                    pageSize
                }
            })
            setArticles(data.data.articles);
        } catch (error) {
            console.log(error)
        }
    }

    const onChangePage = (current, pageSize) => {
        setCurrentPage(current);
    }

    return (
        <>
            <div className='article-content'>
                <h2 className='article-title color-primary'>Articles</h2>
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
                <div style={{
                    padding: '10px'
                }}>
                    <Pagination showSizeChanger={false} onChange={onChangePage} pageSize={pageSize} total={totalPageSize} />
                </div>
            </div>
        </>
    );
};

export default Article;
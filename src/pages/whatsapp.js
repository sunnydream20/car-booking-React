// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import './page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMessage, faVoicemail, faContactBook } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Whatsapp = () => {
    const {id} = useParams();
    const [car, setCar] = useState({
        imgUrl: "",
        _id: "",
        type: ""
    });

    useEffect(() => {
        getBrand();
    }, [])

    const getBrand = async () => {
        const data = await axios.get('http://localhost:8080/api/car/'+id);
        let selectedCar = data.data;
        console.log(selectedCar);
        setCar({
            imgUrl: selectedCar.imgUrl,
            _id: selectedCar._id,
            type: selectedCar.type
        })
    }

    return (
        <>
            <div className='whatsapp-content'>
                <div className='form-whatsapp'>
                    <div className='flex justify-center'>
                        <img  style={{
                            width: "200px",
                            height: "100px"
                        }} src={car.imgUrl} alt='loading' />
                    </div>
                    <div className='text-center'>
                        <h3 style={{
                            color: "#273b84",
                            margin: "0px"
                        }}>{car.type}</h3>
                    </div>
                    <div className='each-div-whatsapp flex justify-spacebetween gap-s'>
                        <FontAwesomeIcon style={{
                            width: "20px",
                            height: "20px",
                            color: "#273b84"
                        }} icon={faContactBook}/>
                        <input style={{
                            fontSize: "16px",
                            padding: "5px 10px"
                        }} className='flex-1' placeholder='Your Name'/>
                    </div>
                    <div className='each-div-whatsapp flex justify-spacebetween gap-s'>
                        <FontAwesomeIcon style={{
                            width: "20px",
                            height: "20px",
                            color: "#273b84"
                        }} icon={faVoicemail}/>
                        <input style={{
                            fontSize: "16px",
                            padding: "5px 10px"
                        }} className='flex-1'  placeholder='Your Email'/>
                    </div>
                    <div className='each-div-whatsapp flex justify-spacebetween gap-s'>
                        <FontAwesomeIcon style={{
                            width: "20px",
                            height: "20px",
                            color: "#273b84"
                        }} icon={faPhone}/>
                        <input style={{
                            fontSize: "16px",
                            padding: "5px 10px"
                        }} className='flex-1' placeholder='Your Number'/>
                    </div>
                    <div className='each-div-whatsapp flex justify-spacebetween gap-s'>
                        <FontAwesomeIcon style={{
                            width: "20px",
                            height: "20px",
                            color: "#273b84"
                        }} icon={faMessage}/>
                        <textarea style={{
                            height: "80px",
                            fontSize: "16px",
                            padding: "5px 10px"
                        }} className='flex-1' placeholder='Leave your Message'/>
                    </div>
                    <div className='each-div-whatsapp flex justify-center gap-s'>
                        <button className='btn wa-btn' style={{
                            width: "100%",
                        }}>Submit</button >
                    </div>
                </div>
            </div>
        </>
    );
};

export default Whatsapp;
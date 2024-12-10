import React from 'react';
import './component.css';
import ThumbSvg from './thumb';

export default function WhyChooseUs() {

  return (
    <>
        <h1 className='why-choose-title color-primary'>Why Choose Us</h1>
        <div className='row'>
            <div className='col-lg-6 col-md-5 col-sm-10'>
                <div className='flex gap-s why-choose-us-comp'>
                    <div>
                        <ThumbSvg />
                    </div>
                    <div>
                        <h3>ALL BRAND AUTHORIZED CAR</h3>
                        <p>
                        CARTOPIA bekerja sama dengan lebih dari 20 authorize dealer di seluruh indonesia.
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-md-5 col-sm-10'>
                <div className='flex gap-s why-choose-us-comp'>
                    <div>
                        <ThumbSvg />
                    </div>
                    <div>
                        <h3>MULTIPLE FINANCING PARTNER</h3>
                        <p>
                        Dengan berkeja sama dengan beberapa bank maupun perusahaan leasing terpercaya ,mempermudah dan mempercepat proses pembiayaan mobil idaman mu.
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-md-5 col-sm-10'>
                <div className='flex gap-s why-choose-us-comp'>
                    <div>
                        <ThumbSvg />
                    </div>
                    <div>
                        <h3>BEST PRICE WARANTY</h3>
                        <p>
                        Best Price Waranty untuk memastikan
                        customer mendapatkan harga terbaik.
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-md-5 col-sm-10'>
                <div className='flex gap-s why-choose-us-comp'>
                    <div>
                        <ThumbSvg />
                    </div>
                    <div>
                        <h3>FREE TOWING</h3>
                        <p>
                        Fasilitas Free Towing delivery sebagai komitmen kami untuk memastikan keamanan dalam pengiriman mobil impian mu.
                        </p>
                    </div>
                </div>
            </div>
     
        </div>
    </>
  );
}
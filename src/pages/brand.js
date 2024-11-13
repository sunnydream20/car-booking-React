// src/pages/About.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { useParams } from 'react-router-dom';
// import BrandComp from "../components/brandcomp";
import BrandComp from '../components/brandcomp';

const options = [
  { value: 'default_sort', label: 'Default Sorting' },
  { value: 'popular_sort', label: 'Sort by popularity' },
  { value: 'rate_sort', label: 'Sort by average rating' },
  { value: 'latest_sort', label: 'Sort by latest' },
  { value: 'low_high_sort', label: 'Sorty by price: low to high' },
  { value: 'high_low_sort', label: 'Sorty by price: high to low' },
];

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
      now_day_price: 800,
      details: ['Alexiliary heating', 'Head-up Display', 'Alloy wheels', 'Mp3 interface', 'Bluetooth', 'MP3 interface', 'Electric side Mirrow', 'Navigation System', 'CD player', 'Navigation System', 'Sports Package', 'Panoramic roof', 'Central Locking'],
      category_id: 1,
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
      now_day_price: 100,
      details: ['Alloy wheels', 'Mp3 interface', 'Bluetooth', 'MP3 interface', 'Electric side Mirrow', 'Navigation System', 'CD player', 'Navigation System', 'Sports Package', 'Panoramic roof', 'Central Locking'],
      category_id: 1,
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
      now_day_price: 280,
      details: ['Alexiliary heating', 'Head-up Display', 'Alloy wheels', 'Mp3 interface', 'Bluetooth', 'MP3 interface', 'Electric side Mirrow','Sports Package', 'Panoramic roof', 'Central Locking'],
      category_id: 2,
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
      now_day_price: 589,
      details: ['Alexiliary heating', 'Head-up Display', 'Alloy wheels', 'Mp3 interface', 'Bluetooth', 'MP3 interface', 'Electric side Mirrow', 'Navigation System', 'CD player', 'Navigation System', 'Sports Package', 'Panoramic roof', 'Central Locking', 'Navigation System', 'Sports Package', 'Panoramic roof', 'Central Locking'],
      category_id: 4,
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
      now_day_price: 1180,
      details: ['Alexiliary heating', 'Head-up Display', 'Alloy wheels', 'Mp3 interface', 'Bluetooth', 'MP3 interface', 'Electric side Mirrow', 'Navigation System', 'CD player', 'Navigation System', 'Sports Package', 'Panoramic roof', 'Central Locking', 'Navigation System', 'Sports Package', 'Panoramic roof', 'Central Locking'],
      category_id: 5,
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
      now_day_price: 900,
      details: ['Alexiliary heating','MP3 interface', 'Electric side Mirrow', 'Navigation System', 'CD player', 'Navigation System', 'Sports Package', 'Panoramic roof', 'Central Locking', 'Navigation System', 'Sports Package', 'Panoramic roof', 'Central Locking'],
      category_id: 6,
  },
]

const Brand = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const {id} = useParams();

  const brands = vehicleData
    .filter(data => data.category_id == id)
    .map(data => (
      <BrandComp
      key={data.id}
      id={data.id}
      type={data.type}
      type_des={data.type_des}
      seats={data.seats}
      bags={data.bags}
      doors={data.doors}
      snow={data.snow}
      img_url={data.img_url}
      later_day_price={data.later_day_price}
      now_day_price={data.now_day_price}
      details = {data.details}
    />
  ))

  return (
    <div>
      <div className='brand-reservation text-center'>
        <div className='container'>
          <h1 className='color-white m-0 m-t-38'>RESERVATION</h1>
          <div className='row'>
            <div className='col-lg-4 col-md-10 col-sm-10'>
              <div>
                <Link className='flex reserve-form-opacity' to="">
                  <div className='reserve-number-div'><span className='color-secondary reserve-form-number'>1</span></div>
                  <label className='color-white reserve-form-des text-center'>Your Itinerary</label>
                </Link>
                <div className='reserve-form-label hidden-md-reserve'>
                  <p>PICK UP</p>
                  <p>--</p>
                  <p>--</p>
                  <br />
                  <p>DROP OFF</p>
                  <p>--</p>
                  <p>--</p>
                  <br />
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-10 col-sm-10'>
              <div>
                <Link className='flex reserve-form-opacity' to="">
                  <div className='reserve-number-div'><span className='color-secondary reserve-form-number'>2</span></div>
                  <label className='color-white reserve-form-des'>Select Vehicle/Add-on</label>
                </Link>
                <div className='reserve-form-label bg-color-secondary color-white hidden-md-reserve'>
                  <p>Type</p>
                  <p>--</p>
                  <p>--</p>
                  <br />
                  <p>ADDONS</p>
                  <p>--</p>
                  <p>--</p>
                  <br />
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-10 col-sm-10'>
              <div>
                <Link className='flex reserve-form-opacity' to="">
                  <div className='reserve-number-div'><span className='color-secondary reserve-form-number'>3</span></div>
                  <label className='color-white reserve-form-des'>Reserve Your Vehicle</label>
                </Link>
                <div className='reserve-form-label hidden-md-reserve'>
                  <p>Your Information</p>
                  <p>--</p>
                  <br />
                  <br />
                  <p>Payment Information</p>
                  <p>--</p>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
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
          {brands.length > 0 ? brands : <p>No vehicles found for this category.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
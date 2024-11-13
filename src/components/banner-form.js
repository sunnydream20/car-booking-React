import React, { useState } from 'react';
import Select from 'react-select';
import './component.css';
import { Link } from 'react-router-dom';
import { DateRangePicker } from 'rsuite';
import 'rsuite/DateRangePicker/styles/index.css';
const options = [
  { value: 'arlington', label: 'Arlington' },
  { value: 'downtown', label: 'Downtown' },
  { value: 'westHollywood', label: 'West Hollywood' },
  { value: 'hollywood', label: 'Hollywood' },
  { value: 'koreatown', label: 'Koreatown' },
];

export default function BannerForm() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className='bg-color-secondary banner-search-form'>
        <p className='m-0 m-b-xs font-xs color-primary'>Brand Option</p>
        <Select
            defaultValuem={selectedOption}
            onChange={setSelectedOption}
            options={options}
        />

        <DateRangePicker showOneCalendar style={{
            width: "100%",
            marginTop: "20px",
        }}/>

        <Link to="" >
            <button className='bg-color-primary color-white btn'>Will Direct To Whatsapp</button>
        </Link>
    </div>
  );
}
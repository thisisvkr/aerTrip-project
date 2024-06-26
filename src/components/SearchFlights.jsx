import { useEffect, useState } from 'react';
import flightData from '../api-data.json';

function SearchFlights() {
  const [selectWay, setSelectWay] = useState('Oneway');
  const [passenger, setPassenger] = useState('2 Passenger');
  const [economy, setEconomy] = useState('Economy');
  const [locationFrom, setLocationFrom] = useState('');
  const [locationTo, setLocationTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [selectedAirportCodeFrom, setSelectedAirportCodeFrom] = useState('');
  const [selectedAirportCodeTo, setSelectedAirportCodeTo] = useState('');

  const flight = flightData.data.flights[0].results;
  const flightAdept = flight.apdet;

  const handleSubmit = e => {
    e.preventDefault();
  };

  const airportList = Object.entries(flightAdept).map(([key, value]) => (
    <option key={key} value={value.c}>
      {value.c}
    </option>
  ));

  // displaying cities list
  const airportCode = Object.keys(flightAdept).map(key => (
    <div key={key}>
      <h2>{key}</h2>
    </div>
  ));

  // select input and code
  const handleLocationFromChange = e => {
    setLocationFrom(e.target.value);
    const selectedCode = Object.keys(flightAdept).find(
      key => flightAdept[key].c === e.target.value
    );
    setSelectedAirportCodeFrom(selectedCode || '');
  };

  const handleLocationToChange = e => {
    setLocationTo(e.target.value);
    const selectedCode = Object.keys(flightAdept).find(
      key => flightAdept[key].c === e.target.value
    );
    setSelectedAirportCodeTo(selectedCode || '');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='mt-5 flex flex-col items-center p-5 rounded-lg shadow-lg'
    >
      {/* select flight type */}
      <div className='flex justify-between w-screen md:w-1/2 mb-5'>
        <div className='flex gap-10'>
          <select
            value={selectWay}
            onChange={e => setSelectWay(e.target.value)}
            className='text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600'
          >
            <option value='Oneway'>One way</option>
            <option value='Twoway'>Two way</option>
          </select>
          <select
            value={passenger}
            onChange={e => setPassenger(e.target.value)}
            className='text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600'
          >
            <option value='1 Passenger'>1 Passenger</option>
            <option value='2 Passenger'>2 Passenger</option>
            <option value='3 Passenger'>3 Passenger</option>
            <option value='4 Passenger'>4 Passenger</option>
          </select>
          <select
            value={economy}
            onChange={e => setEconomy(e.target.value)}
            className='text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600'
          >
            <option value='Economy'>Economy</option>
            <option value='Bussiness'>Bussiness</option>
          </select>
        </div>
        <select>
          <option value='recent'>Recent</option>
        </select>
      </div>

      {/* Search Flight */}
      <div className='flex justify-between items-center w-screen md:w-1/2 ml-8'>
        <div className='flex justify-center items-center'>
          <div>
            <label htmlFor='from' className='font-extralight text-slate-500'>
              <p> From</p>
              <input
                list='airports'
                type='text'
                value={locationFrom}
                onChange={handleLocationFromChange}
                className='border-b-2 border-[#29b0b6] font-bold text-slate-900'
              />
              <datalist id='airports'>{airportList}</datalist>
            </label>
          </div>

          <p className='font-extralight text-slate-500 text-center'>
            {selectedAirportCodeFrom}
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <div>
            <label htmlFor='to' className='font-extralight text-slate-500'>
              <p>To </p>
              <input
                list='airports'
                type='text'
                value={locationTo}
                onChange={handleLocationToChange}
                className='border-b-2 border-[#29b0b6] font-bold text-slate-900'
              />
              <datalist id='airports'>{airportList}</datalist>
            </label>
          </div>
          <p className='font-extralight text-slate-500 text-center'>
            {selectedAirportCodeTo}
          </p>
        </div>
        <div>
          <p className='font-extralight text-slate-500'>Depart</p>
          <input
            type='date'
            value={departureDate}
            onChange={e => setDepartureDate(e.target.value)}
          />
        </div>

        <button
          type='submit'
          className='rounded-md bg-gradient-to-r from-[#29b0b6] to-[#0c9] py-2 px-10'
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchFlights;

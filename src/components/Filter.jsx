import { useState, useEffect } from 'react';
import flightData from '../api-data.json';
import PriceSlider from './PriceSlider';
import FlightsList from './FlightsList';

function Filter() {
  const [sortBy, setSortBy] = useState('Price');
  const [isOpen, setIsOpen] = useState(false);
  const [flightsList, setFlightsList] = useState([]);
  const [priceRange, setPriceRange] = useState([1200, 90000]); // initial price range

  useEffect(() => {
    try {
      setFlightsList(flightData.data.flights[0].results.j);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }, []);

  // Filter flightsList based on priceRange
  const filteredFlightsList = flightsList.filter(
    flight => flight.farepr >= priceRange[0] && flight.farepr <= priceRange[1]
  );

  // Sort flightsList based on sortBy
  const sortedFlightsList = [...filteredFlightsList].sort((a, b) => {
    switch (sortBy) {
      case 'Price':
        return Number(a.farepr) - Number(b.farepr);
      case 'Duration':
        return parseInt(a.leg[0].tt) - parseInt(b.leg[0].tt);
      case 'Depart':
        return (
          new Date(a.leg[0].dt).getTime() - new Date(b.leg[0].dt).getTime()
        );
      case 'Arrival':
        return (
          new Date(a.leg[a.leg.length - 1].at).getTime() -
          new Date(b.leg[b.leg.length - 1].at).getTime()
        );
      default:
        return 0;
    }
  });

  const handleSelectChange = event => {
    setSortBy(event.target.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClear = () => {
    setSortBy('Price');
    setIsOpen(false);
    setPriceRange([1200, 90000]);
  };

  return (
    <>
      <div className='mt-5 ml-10 flex gap-20 justify-center items-center'>
        <div>
          <button
            className='bg-[#e2e8f0] hover:bg-gray-400 text-gray-[#1e293b] font-bold py-2 px-4 rounded-full'
            onClick={toggleDropdown}
          >
            Sort: {sortBy}
          </button>
          {isOpen && (
            <select onChange={handleSelectChange} value={sortBy}>
              <option value='Price'>Price (low to high)</option>
              <option value='Duration'>Duration (shortest first)</option>
              <option value='Depart'>Depart (earliest first)</option>
              <option value='Arrival'>Arrival (earliest first)</option>
            </select>
          )}
        </div>
        <p className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full'>
          {flightsList.length} Flights
        </p>
        <button
          className='bg-[#e2e8f0] hover:bg-gray-400 text-gray-[#1e293b] font-bold py-2 px-4 rounded-full'
          onClick={handleClear}
        >
          Clear filter
        </button>
        <PriceSlider priceRange={priceRange} setPriceRange={setPriceRange} />
      </div>

      <FlightsList flightsList={sortedFlightsList} />
    </>
  );
}

export default Filter;

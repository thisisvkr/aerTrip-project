import React, { useState, useEffect } from 'react';
import { format, fromUnixTime } from 'date-fns';

const FlightInfoCard = ({ flightDetails, flightData }) => {
  const [currentFlightData, updateFlightData] = useState({});

  useEffect(() => {
    updateFlightData(flightDetails);
  }, [flightData, flightDetails]);

  const airLineName =
    currentFlightData.leg && currentFlightData.leg.length > 0
      ? flightData?.flights[0]?.results?.aldet[currentFlightData.leg[0].al]
      : 'Loading...';

  console.log(currentFlightData);

  const formatDateDuration = seconds => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m `;
  };

  const airlineLogo = airLineName => {
    if (airLineName === 'Vistara') {
      return 'https://cdn_live.aertrip.com/resources/assets/scss/skin/img/airline-master/UK.png'; // URL of Vistara logo
    } else if (airLineName === 'Air India') {
      return 'https://cdn_live.aertrip.com/resources/assets/scss/skin/img/airline-master/AI.png'; // URL of Air India logo
    } else {
      return '';
    }
  };

  return (
    <div className='bg-white shadow-md py-4 mt-5'>
      <div className='flex justify-between items-center'>
        <div className='w-1/6 text-center'>
          <div className='flex justify-center'>
            <div className='flex gap-5 justify-center items-center'>
              <img
                className='w-10'
                src={airlineLogo(airLineName)}
                alt='airline_logo'
              />
              <p>{airLineName}</p>
            </div>
          </div>
        </div>

        <div className='flex justify-between items-center gap-10 w-full'>
          <div className='w-1/6 text-center'>
            <p>
              {currentFlightData &&
                currentFlightData.leg &&
                currentFlightData.leg[0].dt}
            </p>
          </div>
          <div className='w-1/6 text-center'>
            <p className='font-bold text-sm'>
              {currentFlightData && currentFlightData.leg
                ? formatDateDuration(currentFlightData.leg[0].tt)
                : ''}
            </p>
          </div>
          <div className='w-1/6 text-center'></div>
          <div className='w-1/6 text-center'>
            <p>
              {currentFlightData &&
                currentFlightData.leg &&
                currentFlightData.leg[0].at}
            </p>
          </div>
          <div className='flex-grow text-center'>
            <p>
              ₹
              {currentFlightData &&
                currentFlightData.fare &&
                currentFlightData.farepr}
            </p>
          </div>
          <div className=' mr-10 flex justify-center items-center text-center gap-20'>
            <div>
              <p className='text-gray-600'>
                {currentFlightData &&
                  currentFlightData.leg &&
                  currentFlightData.leg[0].all_ap.join(' → ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightInfoCard;

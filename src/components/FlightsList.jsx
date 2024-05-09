import React, { useState, useEffect } from 'react';
import flightData from '../api-data.json';
import FlightCard from './FlightCard';

function FlightsList({ flightsList }) {
  console.log(flightsList);
  return (
    <div>
      {flightsList && flightsList.length > 0
        ? flightsList.map(flight => (
            <FlightCard
              key={flight.id}
              flightDetails={flight}
              flightData={flightData.data}
            />
          ))
        : ''}
    </div>
  );
}

export default FlightsList;

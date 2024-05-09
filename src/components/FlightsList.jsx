// import { useState, useEffect } from 'react';
// import FlightCard from './flightCard';

// function FlightsList() {
//   const [flights, setFlights] = useState([]);
//   const [sort, setSort] = useState('priceLowToHigh');
//   const [priceRange, setPriceRange] = useState([0, 10000]);

//   useEffect(() => {
//     // Fetch flights from API and set initial state
//     // For simplicity, I'm using a static JSON response
//     const response = {}; // Replace with your actual API response
//     setFlights(response.j);
//   }, []);

//   // Sort and filter flights based on state
//   const sortedAndFilteredFlights = flights
//     .filter(
//       flight => flight.farepr >= priceRange[0] && flight.farepr <= priceRange[1]
//     )
//     .sort((a, b) => {
//       if (sort === 'priceLowToHigh') {
//         return a.farepr - b.farepr;
//       } else if (sort === 'durationShortestFirst') {
//         return a.ft - b.ft;
//       } else if (sort === 'departEarliestFirst') {
//         return new Date(a.dt) - new Date(b.dt);
//       } else if (sort === 'arrivalEarliestFirst') {
//         return new Date(a.at) - new Date(b.at);
//       } else {
//         return 0;
//       }
//     });

//   return (
//     <div>
//       {/* Render sort and filter controls */}
//       {/* Render flights */}
//       {sortedAndFilteredFlights.map(flight => (
//         <FlightCard key={flight.id} flight={flight} />
//       ))}
//     </div>
//   );
// }

// export default FlightsList;

function FlightsList() {
  return <div></div>;
}

export default FlightsList;

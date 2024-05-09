function FlightCard({ flight }) {
  return (
    <div>
      <h2>{flight.al}</h2>
      <p>
        Departure: {flight.fr} at {flight.dt}
      </p>
      <p>
        Arrival: {flight.to} at {flight.at}
      </p>
      <p>Duration: {flight.ft}</p>
      <p>Price: {flight.farepr}</p>
    </div>
  );
}

export default FlightCard;

import Header from '../components/Header';
import FlightData from '../api-data.json';
import FlightsList from '../components/FlightsList';
import SearchFlights from '../components/SearchFlights';

function FlightPage() {
  return (
    <div>
      <Header />
      <SearchFlights />
      <FlightsList />
    </div>
  );
}

export default FlightPage;

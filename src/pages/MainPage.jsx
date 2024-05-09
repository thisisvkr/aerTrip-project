import Header from '../components/Header';
import FlightsList from '../components/FlightsList';
import Filter from '../components/Filter';

function FlightPage() {
  return (
    <div>
      <Header />
      <Filter />
      <FlightsList />
    </div>
  );
}

export default FlightPage;

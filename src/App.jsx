import { Routes, Route } from 'react-router-dom';
// import FlightPage from './pages/FlightPage';
import FlightPage from './pages/FlightPage';
import GenericPage from './pages/GenericPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<FlightPage />} />
        <Route path='/flights' element={<FlightPage />} />
        <Route path='/hotel' element={<GenericPage />} />
        <Route path='/visa' element={<GenericPage />} />
        <Route path='/holidays' element={<GenericPage />} />
        <Route path='/login' element={<GenericPage />} />
        <Route path='*' element={<GenericPage />} />
      </Routes>
    </div>
  );
}

export default App;

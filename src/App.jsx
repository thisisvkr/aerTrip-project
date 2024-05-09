import { Routes, Route } from 'react-router-dom';
// import MainPage from './pages/MainPage';
import MainPage from './pages/MainPage';
import GenericPage from './pages/GenericPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/flights' element={<MainPage />} />
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

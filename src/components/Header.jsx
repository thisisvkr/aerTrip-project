import { Link, useLocation } from 'react-router-dom';
import { BsSun } from 'react-icons/bs';
import logo from '../assets/images/logo.jpeg';
import login from '../assets/images/login.jpg';
import flightData from '../api-data.json';
import SearchFlights from './SearchFlights';

function Header() {
  const location = useLocation();

  return (
    <div>
      <header className='sticky top-0 z-50 flex justify-around items-center bg-gradient-to-r from-[#29b0b6] to-[#0c9] text-slate-50'>
        <Link to='/' className='Logo'>
          <img className='w-14' src={logo} alt='logo' />
        </Link>

        <div>
          <ul className='navlinks flex gap-10'>
            <li>
              <Link
                to='/flights'
                className={
                  location.pathname === '/flights' || '/'
                    ? 'uppercase bg-white bg-opacity-35 rounded-full px-6 py-2 text-center'
                    : 'uppercase'
                }
              >
                Flights
              </Link>
            </li>
            <li>
              <Link
                to='/hotel'
                className={
                  location.pathname === '/hotel'
                    ? 'uppercase bg-white bg-opacity-35 rounded-full px-6 py-2 text-center'
                    : 'uppercase'
                }
              >
                Hotel
              </Link>
            </li>
            <li>
              <Link
                to='/visa'
                className={
                  location.pathname === '/visa'
                    ? 'uppercase bg-white bg-opacity-35 rounded-full px-6 py-2 text-center'
                    : 'uppercase'
                }
              >
                Visa
              </Link>
            </li>
            <li>
              <Link
                to='/holidays'
                className={
                  location.pathname === '/holidays'
                    ? 'uppercase bg-white bg-opacity-35 rounded-full px-6 py-2 text-center'
                    : 'uppercase'
                }
              >
                Holidays
              </Link>
            </li>
          </ul>
        </div>

        <div className='flex gap-7 items-center '>
          <BsSun />
          <p>TRIPS</p>
          <img className='w-14 rounded-full' src={login} alt='login' />
        </div>
      </header>
      <SearchFlights />
    </div>
  );
}

export default Header;

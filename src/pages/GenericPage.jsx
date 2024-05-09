import { Link } from 'react-router-dom';

function GenericPage() {
  return (
    <div className=' font-bold text-2xl font flex flex-col justify-center items-center h-screen bg-gradient-to-r from-[#29b0b6] to-[#0c9] text-slate-50 '>
      <p>
        We are currently working on this page. Please check back soon! While we
        strive to enhance your user experience, this page is under construction.
        We appreciate your patience and understanding. c
      </p>
      <Link to='/flights'>
        <button
          type='button'
          class='my-10  text-white bg-gradient-to-r from-[#4aedf6] to-[#008c69] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-2xl px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Go To Flights
        </button>
      </Link>
    </div>
  );
}

export default GenericPage;

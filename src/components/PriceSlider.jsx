import { useState } from 'react';
function PriceSlider({ priceRange, setPriceRange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = event => {
    setPriceRange(Number(event.target.value));
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className='bg-[#e2e8f0] hover:bg-gray-400 text-gray-[#1e293b] font-bold py-2 px-4 rounded-full'
        onClick={toggleDropdown}
      >
        Price Range
      </button>
      {isOpen && (
        <div className='flex flex-col items-center justify-center  mt-5'>
          <label htmlFor='price' className='mr-3'>
            Price: {price}
          </label>
          <input
            id='price'
            type='range'
            min='1206'
            max='90000'
            value={priceRange}
            onChange={handleChange}
            className='slider w-full h-2 bg-gray-200 rounded-full outline-none appearance-none'
          />
        </div>
      )}
    </>
  );
}

export default PriceSlider;

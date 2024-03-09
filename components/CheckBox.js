'use client'
import React from 'react';

function CheckBox({ algo, check, idAlgo, select }) {
  const handleCheckboxChange = () => {
    select((prevState) => ({
      ...prevState,
      [idAlgo]: !prevState[idAlgo], // Toggle the value
    }));
    
  };

  return (
    <div className="inline-flex items-center">
      <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor={idAlgo}>
        <input
          type="checkbox"
          className="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-md border-2 border-primaryBlue  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-16 before:w-16 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-bg-primaryBlue checked:bg-primaryBlue checked:before:bg-primaryBlue hover:before:opacity-10 focus:outline-none"
          id={idAlgo}
          checked={check}
          onChange={handleCheckboxChange} 
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="0.2">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
          </svg>
        </span>
      </label>
      <label className="mt-px font-medium text-primaryBlack text-2xl cursor-pointer select-none" htmlFor={idAlgo}>
        {algo}
      </label>
    </div>
  );
}

export default CheckBox;

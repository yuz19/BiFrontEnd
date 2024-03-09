'use client'
import React from 'react';

function Dots({ level }) {
  return (
    <div className='dots-container w-4/5 h-[40px]  mt-20 flex flex-row justify-between relative overflow-hidden'>
      <span className='circle  block h-full w-[40px] bg-primaryBlue rounded-[100%] relative z-30'></span>

      <span className={`circle block h-full w-[40px] ${level >= 2 ? 'bg-primaryBlue' : 'bg-secondBlue'} rounded-[100%] relative z-20`}>
        <span className={`absolute h-1 w-56 ${level >= 2 ? 'bg-primaryBlue' : 'bg-secondBlue'} top-1/2 -left-[72px]  transform -translate-y-1/2 -translate-x-1/2`}></span>
      </span>

      <span className={`circle block h-full w-[40px] ${level === 3 ? 'bg-primaryBlue' : 'bg-secondBlue'} rounded-[100%] relative z-10`}>
        <span className={`absolute h-1 w-56 ${level === 3 ? 'bg-primaryBlue' : 'bg-secondBlue'} top-1/2 -left-[72px]  transform -translate-y-1/2 -translate-x-1/2`}></span>
      </span>
    </div>
  );
}

export default Dots;

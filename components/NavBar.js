'use client'
import React, { useState } from 'react';
import settings from '@/public/settings.svg'; // Import the image
import Image from 'next/image'; // Import the Image component
import Link from 'next/link';
function NavBar() {

  return (
    <nav className='flex h-20   items-center px-16  w-full justify-between  border-solid border-b-2 border-[#c4c7c55f]  '>
      <h3 className=' font-wow font-Inter text-2xl text-primaryBlue cursor-pointer'>PourQuoi?</h3>
      <div className='justify-self-end cursor-pointer'>
        <Link href="/Parametres">
        <Image src={settings} width={40} height={40} alt="settings" /> 
        </Link>
      </div>
    </nav>
  );
}
 
export default NavBar;

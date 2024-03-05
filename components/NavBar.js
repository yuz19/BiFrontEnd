import React from 'react';
import profil from '@/public/profil.png'; // Import the image
import Image from 'next/image'; // Import the Image component
function NavBar() {
  return (
    <nav className='flex   items-center px-16 py-4 w-full justify-between   '>
      <h3 className='font-bold font text-2xl '>WHY?</h3>
      <div className='justify-self-end '>
        <Image src={profil} width={60} height={60} alt="Profile" /> {/* Use the imported image */}
      </div>
    </nav>
  );
}

export default NavBar;

import React,{useState} from 'react'
import x from '@/public/x.svg';
import Image from 'next/image'; 
function Mesures({setMesure1,setMesure2,handleChange}) {

  return (
    <div className='border-dashed w-full border-2 border-primaryBlack h-24 rounded-2xl flex flex-row justify-between items-center px-8'>

      <div className='flex flex-row justify-between w-5/12  '>

        <input type='text' placeholder='mesure 1' className='px-2 py-4 focus:outline-none   rounded-md border-solid border-2 border-primaryBlue' onChange={(e) => handleChange(e, setMesure1)} />
        <input type='text' placeholder='mesure 2' className='px-2 py-4 focus:outline-none rounded-md border-solid border-2 border-primaryBlue' onChange={(e) => handleChange(e, setMesure2)} />

      </div>

        <div className='flex flex-row-reverse h-20 gap-2  px-4 py-2  shadow-start rounded-[48px] cursor-pointer'>
            <input
              type='button'
              value={"Effacer"}
              className='text-2xl font-medium mr-2'
            />
            <Image src={x} width={66.67} height={66.67} alt='X'/>
        </div>
      

    </div>
  )
}
 
export default Mesures
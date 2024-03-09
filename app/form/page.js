'use server'
import Algorithme from '@/components/Algorithme';
import NavBar from '@/components/NavBar';
import React from 'react';
 

async function Form() {
 return(
  <>
    <NavBar/>
    <main className=' flex justify-center items-center h-[80.1vh]'>
      <Algorithme/>
    </main>

  </>
 );
}

export default Form;
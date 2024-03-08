'use client'
import React, { useEffect, useState } from 'react';
import felic from '@/public/bxs_party.svg'; // Import the image
import Image from 'next/image'; // Import the Image component
 
import Input from '../components/Input'
import Dots from './Dots';
function formulaire() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [level,setLevel]=useState(1);

  const [contenu,setContenu]=useState('');

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };
//   useEffect(() => {
 
//     if (
//         url!==undefined
//     ) {
//       // Redirect to the form page
//       window.location.href = window.location.href + '/form';
//     }
//   }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

     
    // Remove the protocol ("https://")
    const urlWithoutProtocol = url.replace(/^https?:\/\//, '');

    // Split the remaining URL by "/"
    const urlParts = urlWithoutProtocol.split('/');

    // The first part is the hostname and port
   const hostnameAndPort = urlParts[0].split(':');

    const port = hostnameAndPort[1] || '3306';
    const hostname = hostnameAndPort[0];
    const database = urlParts[1] || '';
    try {
      const formData = {
        user: username,
        password: password,
        host: hostname,
        database:database,
        port:port
      };

      const response = await fetch('/api/handler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }

      console.log('Form data submitted successfully');

      // Navigate to the constructed URL in the browser
      window.location.href = window.location.href + "/form";
    } catch (error) {
      console.error('Error submitting form data:', error.message);
    }
  };
  function nextInput(){
    setLevel(prev=>prev+1);
  }
  useEffect(()=>{
      if(level===1){
          setContenu(
            <>        
            <Input name={"Nom utilisateur  [ex: root ]"} type={"text"} nameId={"DB_USER"} />
            <Input name={"Mot de passe"} type={"password"} nameId={"DB_PASSWORD"}/>
           </>
          )
      }else if(level===2){
          setContenu(    
            <>        
              <Input name={"Lien pour L’entrepôt de Donne [ex: https://localhost:3306 ]"} type={"text"}  nameId={"DB_HOST_DB_PORT"}/>
              <Input name={"Nom de la base de donne"}  type={"text"}  nameId={"DB_NAME"}/>
            </>)
        }else if(level===3){
          setContenu(    
            <>        
                <p className=' font-medium text-2xl text-center mb-4'>Félicitions vous avez terminer la configuration</p>
                <Image src={felic} alt='felic' width={70} height={70}  />
            </>)
        }
   
  },[,level])

  return (
    <div className=" w-2/3 flex flex-col  h-2/3 px-24">
      
      {/* <form onSubmit={handleSubmit}> */}
        <p className=' font-[900] text-[40px] w-4/5'>Donner les informations sure votre Entrepôt de Données </p>
        <div className='form w-4/6 flex flex-col justify-center items-center h-full '>

           {contenu}

            <input type='button' value={level ===3 ? 'Commencer' : 'Suivant'}  className='bg-primaryBlue w-full text-white font-medium text-[32px] h-16 font-Inter rounded-lg mt-[40px] cursor-pointer' onClick={()=>nextInput()}/>
            <Dots/>
        </div>
    </div>
  );
}

export default formulaire;

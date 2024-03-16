'use client'
import React, { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import ret from '@/public/return.svg'; // Import the image
import Image from 'next/image';
import { useRouter } from 'next/navigation';
function Page() {
    const [host, setHost] = useState('');
    const [dbname, setDbname] = useState('');
    const [user, setUser] = useState('');
    const [port, setPort] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter(); 
    const [err,setErr]=useState('')
    const handleChange = (e, setter) => {
        setter(e.target.value);
    };

    const handleReturnClick = () => {
        router.back(); // Navigate back to the previous page
    };
    useEffect( ()=>{

        const fetchData = async () => {
        try {
        
        const response = await fetch('http://localhost:8000/api/sql/', {
          method: 'GET'
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
            console.log(data); // Faites quelque chose avec la réponse du backend
            setHost(data['host'])
            setDbname(data['database'])
            setUser(data['user'])
            setPassword(data['password'])
            setPort(data['port'])
        } catch (error) {
            console.error('Erreur lors de la connexion au backend :', error);
        }}

    fetchData();

    },[])

    const submitChanges=async()=>{
        console.log("reponsed.check")

            const data = {
                host:host,
                database:dbname,
                user:user,
                password:password,
                port:port
            }

            try {

            const response = await fetch('http://localhost:8000/api/resql/', {
              method: 'POST',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            }) 

            if (!response.ok){
                throw new Error('Failed to submit form data');
            }
        
            console.log('Form data submitted successfully');
            const reponsed = await response.json();
            console.log('Données reçues de /api/analyse :', reponsed);

            console.log( window.location.href)
            if(reponsed.message.includes('Reconnexion réussie à MySQL')){
                window.location.href = window.location.href.replace("/Parametres","/form") ;

            }

            if(reponsed.check.includes('sqlError')){
                setErr(<p className=' text-red-500'>Donnee erronée</p>)
            }
            } catch (error) {
            //   console.error('Error submitting form data:', error.message);
            }

 
      
 
    }
    return (
        <div>
            <NavBar />
            <div className='flex flex-col items-center w-full ' >
                <Image src={ret} alt="" className=' absolute left-0 ml-10 mt-10 cursor-pointer' onClick={handleReturnClick} />
                <div className='form w-2/5 mt-4'>
                    <h1 className='self-start text-3xl mb-4 font-medium'>Modifier votre Entrepôt de Donnée</h1>
                    {err}

                    <input type='text' value={host} className='outline-none focus:border-primaryBlue  px-4 py-6 rounded-lg w-full border-solid border-2 border-primaryBlack mb-12' onChange={(e) => handleChange(e, setHost)} />
                    <input type='text' value={dbname} className='outline-none focus:border-primaryBlue  px-4 py-6 rounded-lg w-full border-solid border-2 border-primaryBlack mb-12' onChange={(e) => handleChange(e, setDbname)} />
                    <input type='text' value={port} className='outline-none focus:border-primaryBlue  px-4 py-6 rounded-lg w-full border-solid border-2 border-primaryBlack mb-12' onChange={(e) => handleChange(e, setPort)} />
                    <input type='text' value={user} className='outline-none focus:border-primaryBlue  px-4 py-6 rounded-lg w-full border-solid border-2 border-primaryBlack mb-12' onChange={(e) => handleChange(e, setUser)} />
                    <input type='password' value={password} className='outline-none focus:border-primaryBlue  px-4 py-6 rounded-lg w-full border-solid border-2 border-primaryBlack mb-12' onChange={(e) => handleChange(e, setPassword)} />
                    <input type='button' value={"Lancer"} className='outline-none bg-primaryBlue text-white text-3xl font-semibold  px-4 py-4 rounded-lg w-full  cursor-pointer mb-14'  onClick={submitChanges}/>
                </div>
            </div>
        </div>
    );
}

export default Page;

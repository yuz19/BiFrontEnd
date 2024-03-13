'use client'
import React, { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';

function Page() {
    const [host, setHost] = useState('');
    const [dbname, setDbname] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e, setter) => {
        setter(e.target.value);
    };

    
    useEffect(async ()=>{
        try {
            const response = await fetch('http://localhost:8000/api/sql', {
                method: 'GET',
              
            });
            const data = await response.json();
            console.log(data); // Faites quelque chose avec la réponse du backend
        } catch (error) {
            console.error('Erreur lors de la connexion au backend :', error);
        }
    },[])
    return (
        <div>
            <NavBar />
            <div className='flex flex-col items-center w-full'>
                <div className='form w-2/5 mt-20'>
                    <h1 className='self-start text-3xl mb-12 font-medium'>Modifier votre Entrepôt de Donnée</h1>
                    <input type='text' value={host} className='outline-none focus:border-primaryBlue  px-4 py-6 rounded-lg w-full border-solid border-2 border-primaryBlack mb-12' onChange={(e) => handleChange(e, setHost)} />
                    <input type='text' value={dbname} className='outline-none focus:border-primaryBlue  px-4 py-6 rounded-lg w-full border-solid border-2 border-primaryBlack mb-12' onChange={(e) => handleChange(e, setDbname)} />
                    <input type='text' value={user} className='outline-none focus:border-primaryBlue  px-4 py-6 rounded-lg w-full border-solid border-2 border-primaryBlack mb-12' onChange={(e) => handleChange(e, setUser)} />
                    <input type='password' value={password} className='outline-none focus:border-primaryBlue  px-4 py-6 rounded-lg w-full border-solid border-2 border-primaryBlack mb-20' onChange={(e) => handleChange(e, setPassword)} />
                    <input type='button' value={"Lancer"} className='outline-none bg-primaryBlue text-white text-3xl font-semibold  px-4 py-4 rounded-lg w-full   mb-14'  />
                </div>
            </div>
        </div>
    );
}

export default Page;

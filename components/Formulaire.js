'use client'
import React, { useEffect, useState } from 'react';
import felic from '@/public/bxs_party.svg'; // Import the image
import Image from 'next/image'; // Import the Image component

import Input from '../components/Input';
import Dots from './Dots';

function Formulaire() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [nameDb, setNameDB] = useState('');
  const [level, setLevel] = useState(1);
  const [contenu, setContenu] = useState('');
  const [remarque,setRemaque]=useState(null)
  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async () => {
    // Remove the protocol ("https://")
    const urlWithoutProtocol = url.replace(/^https?:\/\//, '');

    // Split the remaining URL by "/"
    const urlParts = urlWithoutProtocol.split('/');

    // The first part is the hostname and port
    const hostnameAndPort = urlParts[0].split(':');
    const port = hostnameAndPort[1] || '3306';
    const hostname = hostnameAndPort[0];

    try {
      const formData = {
        user: username,
        password: password,
        host: hostname,
        database: nameDb,
        port: port
      };

      const response = await fetch('http://localhost:8000/api/sql/', {
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

      // Redirect to the form page
      window.location.href = window.location.href + "/form";
    } catch (error) {
      console.error('Error submitting form data:', error.message);
    }
  };

  const nextInput = (e) => {
    if (e.target.value === "Suivant") {
      if((level===1 && (username==='' || password==='')) ||(level===2 && (url==='' || nameDb==='')) ){
        setRemaque(<p className=' font-semibold text-red-500 top-8   absolute'>Veuillez remplir tous les champs.</p>)
      }else{
        setLevel(prev => prev + 1);
        setRemaque('')
      }
    } else if (e.target.value === "Commencer") {
      handleSubmit();
    }
  }

  useEffect(() => {
   
    if (level === 1) {
      setContenu(
        <>
          <Input name={"Nom utilisateur [ex: root ]"} type={"text"} setfunction={setUsername} valuer={username} nameId={"DB_USER"} handleChange={handleChange} />
          <Input name={"Mot de passe"} type={"password"}   valuer={password} nameId={"DB_PASSWORD"} setfunction={setPassword} handleChange={handleChange}  />
        </>
      )
    } else if (level === 2) {
      setContenu(
        <>
          <Input name={"Lien pour L’entrepôt de Données [ex: https://localhost:3306 ]"} type={"text"} nameId={"DB_HOST_DB_PORT"}  valuer={url} setfunction={setUrl} handleChange={handleChange} />
          <Input name={"Nom de la base de donnée"} type={"text"} nameId={"DB_NAME"}  valuer={nameDb} setfunction={setNameDB} handleChange={handleChange} />
        </>
      )
    } else if (level === 3) {
      setContenu(
        <>
          <p className='font-medium text-2xl text-center pb-8'>Félicitations vous avez terminé la configuration</p>
          <Image src={felic} alt='felic' width={70} height={70} />
        </>
      )
    }
  }, [level,nameDb,url,username,password]);

  return (
    <div className="flex flex-col h-2/3 px-24 w-3/5">
      <p className='font-[900] text-[42px]'>Donnez les informations sur votre Entrepôt de Données</p>
      <div className='form w-11/12 flex flex-col  pt-20 items-center h-full relative'>
        {remarque}
        {contenu}
        <input type='button' value={level === 3 ? 'Commencer' : 'Suivant'} className={`bg-primaryBlue w-full text-white font-medium text-[32px] h-16 font-Inter rounded-lg ${level === 3 ? 'mt-[36px]' : 'mt-[34px]'} cursor-pointer`} onClick={nextInput} />
        <Dots level={level} />
      </div>
    </div>
  );
}

export default Formulaire;

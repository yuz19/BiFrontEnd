'use client'
import React, { useEffect, useState } from 'react';
 
 
function NavBar() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');

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

  return (
    <div className=" w-2/3">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="w-full h-20 focus:outline-none text-black placeholder:text-gr text-xl px-8 py-2 rounded-md"
          value={username}
          onChange={(e) => handleChange(e, setUsername)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full h-20 focus:outline-none text-black placeholder:text-gr text-xl px-8 py-2 rounded-md mt-4"
          value={password}
          onChange={(e) => handleChange(e, setPassword)}
        />
        <div className='relative'>
            <input
            type="text"
            placeholder="href:https://localhost:3306/ecomerce/"
            className="w-full h-20 focus:outline-none text-black placeholder:text-gr text-xl px-8 py-2 rounded-md mt-4"
            value={url}
            onChange={(e) => handleChange(e, setUrl)}
            />
            <button type="submit" className="absolute top-10 right-10 cursor-pointer">
            <img
                src="/send.png"
                width={40}
                height={40}
                alt="Submit"
            />
            </button>
        </div>

      </form>
    </div>
  );
}

export default NavBar;

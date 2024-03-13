'use client'
import NavBar from '@/components/NavBar';
import React, { useEffect, useState } from 'react';
import Granger from "@/components/Granger";
import Apriori from "@/components/Apriori";



function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [listdatagranger, setListDataGranger] = useState(null); // State for storing data from the "granger" array

  const [listdataApriori,setListDataApriori]=useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch('http://localhost:8000/api/analyse/', {
          method: 'GET'
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
        // Access the array of JSON objects within the "granger" array
        const grangerData = jsonData[0]?.granger;
        setListDataGranger(grangerData); // Set data in state

        //Acces the array of JSON objects within the "apriori" array
        const aprioriData = jsonData[1]?.apriori;
        setListDataApriori(aprioriData); // Set data in state
 
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);




  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
    <NavBar/>
    <div className='flex flex-col items-center pt-20  '>
      
      {/* Display data from the "granger" array */}
      <Granger listdatagranger={listdatagranger}/>

      {/* Display data from the "apriori" array */}
      <Apriori listdataApriori={listdataApriori}/>
   
    </div>
    </>

  );
}

export default Dashboard;

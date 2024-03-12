'use client'
import PlotlyGraph from '@/components/PlotlyGraph';
import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [listdatagranger, setListDataGranger] = useState(null); // State for storing data from the "granger" array
  
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
    <div>
      <h1>Data from API</h1>
    
      {/* Display data from the "granger" array */}
      <div>
        <PlotlyGraph listdatagranger={listdatagranger}/>
      </div>
    </div>
  );
}

export default Dashboard;

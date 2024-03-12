'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

const PlotlyGraph = ({ listdatagranger }) => {
  const [col1, setCol1] = useState();
  const [col2, setCol2] = useState();
  const [graph, setGraph] = useState();

  useEffect(() => {
    if (!listdatagranger || listdatagranger.length === 0) return;

    setCol1(listdatagranger[1][0]);
    setCol2(listdatagranger[1][1]);

    // const xData1 = listdatagranger[2][col1] ? listdatagranger[2][col1].slice(0, 2000).length : [];
    // const yData1 = listdatagranger[2][col1] ? listdatagranger[2][col1].slice(0, 2000) : [];

    // const xData2 = listdatagranger[2][col2] ? listdatagranger[2][col2].slice(0, 2000).length : [];
    // const yData2 = listdatagranger[2][col2] ? listdatagranger[2][col2].slice(0, 2000) : [];
 
      const xData1 = listdatagranger[2][col1] ? listdatagranger[2][col1].length : [];
      const yData1 = listdatagranger[2][col1] ? listdatagranger[2][col1] : [];
  
      const xData2 = listdatagranger[2][col2] ? listdatagranger[2][col2].length : [];
      const yData2 = listdatagranger[2][col2] ? listdatagranger[2][col2] : [];
      const data = [
        {
          x: xData1,
          y: yData1,
          type: 'scatter',
          name: col1,
          mode: 'lines',
          marker: { color: 'red' },
        },
        {
          x: xData2,
          y: yData2,
          name: col2,
          type: 'scatter',
          mode: 'lines',
          marker: { color: 'blue' },
        }
      ];
  
      const layout = {
   
        title: 'Data Visualisation',
        xaxis: {
          title: 'Index',
          range: [0, 500]
        },
        yaxis: {
          title: 'Value',
        },
        font: {size: 14},
   
      };
      var config = {responsive: true}
      setGraph(<Plot data={data} layout={layout} config={config} className='w-full'/>);
 
  }, [listdatagranger, col1, col2]);

  return <>{graph}</>;
};

export default PlotlyGraph;

'use client'

import React, { useState } from 'react';
import StartAnalyse from './StartAnalyse';
import Mesures from './Mesures';
import CheckBox from './CheckBox';

function Algorithme() {
  const [mesure1,setMesure1]=useState("");
  const [mesure2,setMesure2]=useState("");
  const [selectedAlgorithms, setSelectedAlgorithms] = useState({
    granger: false,
    apriori: false,
    decision: false,
    proposer: false
  });
  const [remarque,setRemarque]=useState("")
  const  startAnalyse= async() => {
    if (!mesure1 || !mesure2) {
      setRemarque(<p className=' font-semibold text-red-500 top-28  absolute'>Veuillez sélectionner au moins une mesure.</p>);
      return;
    }
    
    const selectedAlgoValues = Object.values(selectedAlgorithms);
    if (!selectedAlgoValues.includes(true)) {
      setRemarque(<p className=' font-semibold text-red-500 top-28  absolute'>Veuillez sélectionner au moins un algorithme.</p>);
      return;
    }
    
    if(mesure1 && mesure2 && selectedAlgoValues.includes(true) ){
      
    try {

      const data = {
        "columns": [mesure1, mesure2],
        "algorithms": {
          "granger": selectedAlgorithms.granger,
          "apriori": selectedAlgorithms.apriori,
          "decision": selectedAlgorithms.decision,
          "proposer": selectedAlgorithms.proposer
        }
      }

      const response = await fetch('http://localhost:8000/api/analyse/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }

      console.log('Form data submitted successfully');
      const reponsed = await response.json();
      console.log('Données reçues de /api/analyse :', reponsed);
      
      // Traitement des données reçues et mise à jour de l'état
      setAnalysisResult(data);
        // // Redirect to the form page
        // window.location.href = window.location.href + "/form";
      } catch (error) {
        console.error('Error submitting form data:', error.message);
      }
      
    }
  }
  
  const handleChange = (e, setter) => {
    setter(e.target.value);
  };
  return (
    <div className='flex flex-col w-4/5 items-center relative'>
      <Mesures setMesure1={setMesure1} setMesure2={setMesure2} handleChange={handleChange}/>
      {remarque}
      <div className="grid grid-rows-2 grid-flow-col gap-x-56 gap-y-16 justify-center text-primaryBlack p-24">
        <CheckBox algo="Apriori" idAlgo="apriori" check={selectedAlgorithms.apriori} select={setSelectedAlgorithms} />
        <CheckBox algo="Algorithme proposer" idAlgo="proposer" check={selectedAlgorithms.proposer} select={setSelectedAlgorithms} />
        <CheckBox algo="Arbre de Décision" idAlgo="decision" check={selectedAlgorithms.decision} select={setSelectedAlgorithms} />
        <CheckBox algo="Granger Causalité" idAlgo="granger" check={selectedAlgorithms.granger} select={setSelectedAlgorithms} />
      </div>
      <StartAnalyse startAnalyse={startAnalyse} />
    </div>
  );
}

export default Algorithme;

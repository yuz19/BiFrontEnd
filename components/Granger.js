import React,{useEffect,useState} from 'react'
import PlotlyGraph from '@/components/PlotlyGraph';

import AlgoBox from './AlgoBox';

function Granger({listdatagranger}) {

    const [clickG,setClickG]=useState(false)
    const [graphG,setGraphG]=useState('')

    useEffect(()=>{
        if(listdatagranger && listdatagranger.length >= 3){
          setGraphG(
            // <div className="details w-11/12 flex flex-col items-center  justify-center ">
            <div className="details w-11/12 flex flex-col items-center  mb-12 ">
              
              <p className=' self-start ml-4'>
                <span className=' text-green-700 text-xl font-bold '>Causalité trouver :</span>
                <span className=' text-lg text-primaryBlack font-medium'>{listdatagranger[0]}</span>
              </p>
        
              <PlotlyGraph listdatagranger={listdatagranger[2]} col1={listdatagranger[1][0]} col2={listdatagranger[1][1]} />
        
              {/* Render the results */}
              <div className=' w-3/4 grid grid-rows-3 grid-flow-col gap-y-8 justify-between '>
        
                {listdatagranger[3].map(result => (
                    <div key={result.lag} className='text-primaryBlack '>
                      <p className='text-primaryBlue text-xl font-semibold'>Résultats pour le délai {result.lag}:</p>
                      <p>Test F : {result.test_F_value}</p>
                      <p>P-valeur : {result.p_value}</p>
                    </div>
                  ))}
        
              </div>
      
          </div>
          )
      
        }
    
      },[listdatagranger])
  return (
    <>
    
  
        
                <AlgoBox clickG={clickG} setClickG={setClickG} name={"Granger Causalité"} graph={graphG} correct={(listdatagranger && listdatagranger[0][0].includes("Causalité trouvée "))? <p className=' text-xl font-medium text-green-700  mt-7'>(Causalité trouve)</p>: <p className='text-xl font-medium text-red-700  mt-7'>(Causalité non trouve)</p>}/>
         
        

         
      
    </>
  )
}

export default Granger
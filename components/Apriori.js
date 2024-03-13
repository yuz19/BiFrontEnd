import React, { useEffect,useState } from 'react'
import AlgoBox from './AlgoBox';

function Apriori({listdataApriori}) {
    const [clickA,setClickA]=useState(false)

    const [graph,setGraph]=useState();
    useEffect(()=>{
        setGraph(
            <div class="relative w-1/2 overflow-x-auto shadow-start sm:rounded-lg mb-12">

            <table class="w-full text-sm text-left rtl:text-right ">

                <thead class="text-xs text-white uppercase bg-gray-50 dark:bg-primaryBlue ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                        support
                        </th>
                        <th scope="col" class="px-6 py-3">
                        itemsets
                        </th>
                    </tr>
                </thead>
                <tbody>
                {listdataApriori.support.map((supportValue, index) => (
                    <tr key={index} className="odd:bg-white     border-b dark:border-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-primaryBlack whitespace-nowrap ">
                            {supportValue}
                        </th>
                        <td className="px-6 py-4 text-primaryBlack">
                        {'{' + listdataApriori.itemsets[index].join(', ') + '}'}
                        </td>
                    </tr>
                ))}
                </tbody>
            
            </table>
             </div>
        )
    },[])
  return (


        <>
                <AlgoBox clickG={clickA} setClickG={setClickA} name={"Apriori"} graph={graph} correct={listdataApriori.itemsets.length>0 ? <p className=' text-xl font-medium text-green-700 mt-7'>(Itemsets trouve)</p>: <p className='text-xl font-medium text-red-700  mt-7'>(Itemsets non trouve)</p>}/>
        
        </>   
       

  )
}

export default Apriori
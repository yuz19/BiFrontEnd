import React from 'react'

function StartAnalyse({startAnalyse}) {
  return (
    <input type='button' value={'Lancer'} className="bg-primaryBlue hover:bg-hoverBlue w-2/3 text-white font-medium text-[32px] h-16 font-Inter rounded-lg focus:outline-none cursor-pointer" onClick={startAnalyse} />
  )
}

export default StartAnalyse
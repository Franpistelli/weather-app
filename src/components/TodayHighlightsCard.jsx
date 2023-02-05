import React from 'react'

const TodayHighlightsCard = ({ name, value, unit }) => {
  return (
    <div className='bg-principal flex flex-col items-center w-96 h-52 gap-y-8 p-3'>
      <p className='text-principal-text text-base font-medium'>{name}</p>
      <h2 className='text-principal-text text-6xl font-bold'>{value}<span className='text-principal-text text-4xl font-medium'>{unit}</span></h2>
    </div>
  )
}

export default TodayHighlightsCard

import React from 'react'

const TodayHighlightsCard = ({ name, value, unit, type, extraData }) => {
  return (
    <div className='bg-principal flex flex-col items-center w-96 h-56 gap-y-8 p-3'>
      <p className='text-principal-text text-base font-medium'>{name}</p>
      <h2 className='text-principal-text text-6xl font-bold'>{value} <span className='text-principal-text text-4xl font-medium'>{unit}</span></h2>
      {
      type === 'wind'
        ? <div className='flex w-full justify-center items-center gap-2'>
          <span className={`w-12 rotate-[${extraData.deg}deg] text-principal-medium-text`}>
            <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 512 512'><path d='m336.76 161-186.53 82.35c-10.47 4.8-6.95 20.67 4.57 20.67H244a4 4 0 0 1 4 4v89.18c0 11.52 16 15 20.78 4.56L351 175.24A10.73 10.73 0 0 0 336.76 161z' /><path fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32' d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' /></svg>
          </span>
        </div>
        : type === 'humidity'
          ? <div className='flex w-full flex-col justify-center items-center gap-2'>
            <div className='flex w-full justify-between'>
              <span className='text-principal-medium-text text-xs'>0</span>
              <span className='text-principal-medium-text text-xs'>50</span>
              <span className='text-principal-medium-text text-xs'>100</span>
            </div>
            <div class='w-full bg-principal-text rounded-full h-1.5'>
              <div class='bg-[#FFEC65] h-1.5 rounded-full' style={{ width: `${value}%` }} />
            </div>
            <div className='flex w-full justify-end'>
              <span className='text-principal-medium-text text-xs'>%</span>
            </div>
          </div>
          : null
}
    </div>
  )
}

export default TodayHighlightsCard

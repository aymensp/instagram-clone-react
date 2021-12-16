import React, { useState, useEffect } from 'react'
import faker from "faker";

function Suggetions() {
  const [suggestions, setsuggestions] = useState([])
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i
    }));
    setsuggestions(suggestions);
    console.log(suggestions[0].avatar)
  }, [])
  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-m mb-5'>
        <h3 className='text-sm font-bold text-gray-400'>Suggetions for you</h3>
        <button className='font-semibold text-gray-600'>see All</button>
      </div>
      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className='flex items-center justify-between mt-3'
        >
          <img alt="" className='w-12 h-12 rounded-full border p-[2px]' src={profile.avatar} alt="" />
          <div className='flex-1 ml-4'>
            <h2 className='font-semibold text-m '>{profile.username}</h2>
            <h3 className=' text-sm text-gray-400 '>followed by {profile.company.name} </h3>
           
          </div>
          <button className=' text-blue-400 text-sm font-bold'> Follow</button>
        </div>
      ))}

    </div>
  )
}

export default Suggetions

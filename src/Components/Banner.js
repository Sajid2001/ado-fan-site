import React from 'react'
import ado from '../Assets/Images/ado.jpg'

const Banner = () => {
  return (
    <div id='home' className="w-full overflow-hidden mb-12 relative opacity-90">
            <img src = {ado} alt="No image loaded" ></img>
            <div className='absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl lg:text-8xl font-display font-bold p-4'>Ado</div>
            <div className='text-2xl lg:text-7xl font-light font-instrument text-white'>
              <a href='#bio' className='absolute top-3/4 left-1/4  -translate-x-1/2 -translate-y-1/2 bg-transparent hover:bg-black text-black hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition-all ease-in duration-200'>Bio</a>
              <a href='#music' className='absolute top-3/4 left-3/4  -translate-x-1/2 -translate-y-1/2 bg-transparent hover:bg-black text-black hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition-all ease-in duration-200'>Music</a>
            </div>
    </div>
  )
}

export default Banner
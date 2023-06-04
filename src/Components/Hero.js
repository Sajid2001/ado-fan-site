import React from 'react'
import ado from '../Assets/Images/ado.jpg'

const Hero = () => {
  return (
    <div id='home'>
         <section className="flex flex-col min-h-screen bg-slate-600 text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30" style={{backgroundImage: `url(${ado})`}}>

<div className="flex items-center h-20">
 
  <div className="mx-auto relative px-5 max-w-screen-xl w-full flex items-center justify-end">

    <div className="text-4xl font-light font-display absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
      Ado
    </div>

    <nav className="md:flex gap-5 hidden text-xl">
      <a href='#home'  className='font-instrument bg-transparent hover:bg-black text-black hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition-all ease-in duration-200'>Home</a>
      <a href='#bio'className='font-instrument bg-transparent hover:bg-black text-black hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition-all ease-in duration-200'>Bio</a>
      <a href='#music' className='font-instrument bg-transparent hover:bg-black text-black hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition-all ease-in duration-200'>Music</a>
    </nav>

    <nav className="flex flex-col gap-4 md:hidden my-3 translate-y-14">
      <a href='#home'  className='font-instrument bg-transparent hover:bg-black text-black hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition-all ease-in duration-200'>Home</a>
      <a href='#bio'className='font-instrument bg-transparent hover:bg-black text-black hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition-all ease-in duration-200'>Bio</a>
      <a href='#music' className='font-instrument bg-transparent hover:bg-black text-black hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition-all ease-in duration-200'>Music</a>
    </nav>

   
  </div>
</div>

<div className="flex-1 flex items-center">
  <div className="text-center mx-auto">
    <h1 className="lg:text-8xl text-6xl font-semibold font-display">Welcome to Ado's World</h1>
    <p className="text-3xl mt-5 font-instrument">Billboard Japan's Artist Of The Year 2022</p>
  </div>
</div>
</section>
    </div>
  )
}

export default Hero
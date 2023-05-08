import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-evenly flex-wrap p-5 bg-indigo-950 "> 
            <a href='#bio' className="text-white lg:text-4xl text-3xl font-instrument font-light  hover:text-slate-500 transition-all ease-in duration-200">Bio</a>
            <a href='#home' className="text-white lg:text-5xl text-4xl font-display font-bold p-4">Ado</a>
            <a href='#music' className="text-white lg:text-4xl text-3xl font-instrument font-light hover:text-slate-500 transition-all ease-in duration-200">Music</a>
        </nav>
    
  )
}

export default Navbar
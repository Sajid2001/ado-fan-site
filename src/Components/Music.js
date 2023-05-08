import React from 'react'
import adomusic from '../Assets/Images/music.jpg'
import AudioPlayer from './AudioPlayer'
import topSongs from '../Assets/Imports/TopSongs'

const Music = () => {
  return (
    <div id='music' className='my-8'>
        <div className='relative'>
            <img src={adomusic} alt='No image loaded' />
            <h1 className='absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl lg:text-9xl font-display font-bold p-4'>Music</h1>
        </div>
        <div className='flex flex-col md:flex-row justify-center flex-wrap my-8'>
            {topSongs.map((song) => (
                <AudioPlayer key={song.id} song={song.song} image={song.image} title={song.title}/>
            ))}
        </div>
        

    </div>
  )
}

export default Music
import React, { useEffect } from 'react'
import adomusic from '../Assets/Images/music.jpg'
import AudioPlayer from './AudioPlayer'
import Axios from 'axios'
import { useState } from 'react'

const Music = () => {

  const [songs, setSongs] = useState([]);

  const getSongs = () => Axios.get(process.env.REACT_APP_SONG_API)
  .then((result) => {
    console.log(result.data);
    setSongs(result.data);
  })
  .catch((err) => {
    console.log(err);
  })

  useEffect(() => {
    getSongs();
  },[])


  return (
    <div id='music' className='my-8'>
        <div className='relative'>
            <img className='opacity-70' src={adomusic} alt='No image loaded' />
            <h1 className='absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl lg:text-9xl font-instrument font-bold p-4'>Music</h1>
        </div>
        <div className='lg:flex grid justify-items-center lg:flex-row md:justify-center flex-wrap my-8'>
            {songs.map((song) => (
                <AudioPlayer key={song.id} song={song.song} image={song.image} title={song.title}/>
            ))}
        </div>
        

    </div>
  )
}

export default Music
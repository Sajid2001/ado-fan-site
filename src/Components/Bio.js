import React from 'react'
import adobio from '../Assets/Images/adobio.jpg'
import bioPic from '../Assets/Images/bio-pic.jpg'

const Bio = () => {
  return (
    <div id='bio' className='p-2 mx-3 text-white'>
      <div className='relative my-10'>
        <img className='opacity-60' src={bioPic} alt='no image loaded'></img>
        <h1 className='absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-9xl font-bold font-instrument p-4'>Bio</h1>
      </div>
        <div className='flex flex-col md:flex-row justify-center m-3 items-center'>
            <img className="rounded-3xl w-full md:w-1/3" src={adobio} alt='No Image'/>
            <div className='mx-5 my-3'> 
                <p className="p-2 text-lg align-baseline font-display">
                Ado (born October 24, 2002 in Tokyo, Japan) is a Japanese singer and Utaite and is considered to be one of the most promising and popular young singers in Japan right now. In 2020, at the age of 17, she made her debut with the digital single titled Usseewa. The song peaked at number 1 on Billboard Japan Hot 100, Oricon Digital Singles Chart, Oricon Streaming Chart, and Spotify Viral 50 Japan. The music video of the song on her YouTube channel reached 100 million views in 148 days after its release. Reaching 100 million plays on Billboard Japan after 17 weeks from charting-in was the sixth fastest in history and the youngest for a solo singer.
                </p>
                <p className="p-2 text-lg align-baseline font-display">
                In the Summer of 2022, She played a major role in the movie One Piece: Film Red for the very popular anime series One Piece as she released an album dedicated to the movie. The Album was a big success and appeared everywhere on domestic musical charts and broke numerous records throughout the process. Notably, every song in the album all individually placed very highly on every Japanese musical chart including Spotify, Billboard and Apple Music. the very latter of which saw her have seven songs take up the top seven spots on August 14th. Impressively, she is the only Japanese Artist in history to occupy all the top 5 spots on a musical chart with songs from the same album.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Bio
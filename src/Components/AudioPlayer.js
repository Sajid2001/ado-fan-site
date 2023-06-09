import {useState, useRef, useEffect} from 'react'
import {GrRotateLeft} from 'react-icons/gr'
import {GrRotateRight} from 'react-icons/gr'
import {FaPlayCircle} from 'react-icons/fa'
import {FaPauseCircle} from 'react-icons/fa'
import {BsFillVolumeUpFill} from 'react-icons/bs'
import {BsFillVolumeOffFill} from 'react-icons/bs'
import {BsVolumeDownFill} from 'react-icons/bs'


const AudioPlayer = ({song, image, title}) => {

  const[isPlaying, setIsPlaying] = useState(false);
  const[duration, setDuration] = useState(0);
  const[currentTime, setCurrentTime] = useState(0);

  //get a reference to the element
  const audioPlayer = useRef();
  const progressBar = useRef(); //reference to progress bar
  const animationRef = useRef(); //reference animation
  const volumeBar = useRef(1);


  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
    if(volumeBar.current.value == null){
      volumeBar.current.value = 1;
    }
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs/60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}`:`${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  const togglePlayPause = () => {
    const previousValue = isPlaying;

    setIsPlaying(!previousValue);
    if(!previousValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }else{
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    ChangePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    ChangePlayerCurrentTime();
  }

  const changeVolume = () => {
    audioPlayer.current.volume = volumeBar.current.value;
  }

  const ChangePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--get-before-width',`${progressBar.current.value/duration * 100}%`);
    setCurrentTime(progressBar.current.value);
  }

  const backTen = () => {
    progressBar.current.value = Number(progressBar.current.value) -10;
    changeRange();
  }
  
  const forwardTen = () => {
    progressBar.current.value = Number(progressBar.current.value) + 10;
    changeRange();
  }

  return (
    <div className = "bg-white justify-items-center w-2/3 lg:w-1/4 lg:m-5 my-4 rounded-xl overflow-hidden">
        <img src= {image} alt="Nothing read"/>
        <audio ref={audioPlayer} src = {song} preload = "metadata"></audio>
        <div className="flex justify-center -translate-y-7">
          <button onClick={backTen} className = "bg-white border-0 text-2xl rounded-l-lg px-2 pt-1"><GrRotateLeft /></button>
          <button className = "bg-white border-0 text-6xl pt-1" onClick={togglePlayPause}> { isPlaying ? <FaPauseCircle/>:<FaPlayCircle /> }</button>
          <button onClick = {forwardTen} className = "bg-white border-0 text-2xl rounded-r-lg px-2 pt-1"><GrRotateRight /></button>
        </div>
        <div className='flex justify-center text-2xl font-thin mx-3 mb-2 font-display'>
          {title}
        </div>
        <div className='flex justify-between -translate-y-7'>
          <div className='px-2 font-bold font-instrument'>{calculateTime(currentTime)}</div>
          <div className='px-2 font-bold font-instrument'>{(duration && !isNaN(duration)) && calculateTime(duration-currentTime)}</div>
        </div>
        
        <div className='p-2 mx-2 -translate-y-6 '>
          <input defaultValue="0" ref={progressBar} className="relative appearance-none outline-none w-full bg-black h-0.5 rounded-lg slider-thumb" onChange={changeRange} type = "range" />
          <div className = "text-2xl translate-x-10 ">
            <input id="default-range" ref={volumeBar} defaultValue = "1" type="range" min="0" max="1" step = "0.01" className="appearance-none outline-none w-3/4 bg-black h-0.5 rounded-lg slider-thumb"  onChange={changeVolume}/>
              {volumeBar.current.value > 0 
                ? volumeBar.current.value > 0.4
                  ?<BsFillVolumeUpFill/>
                    :<BsVolumeDownFill/>
                : <BsFillVolumeOffFill/>}
          </div>
        </div>
        
    </div>
  )
}
export default AudioPlayer
import React, {useState, useRef, useEffect} from "react";
import "../Styles/DownMenu.css";
import {IoPlayCircle, IoPauseCircle, IoPlayForward, IoPlayBack, IoRepeat, IoShuffle, IoVolumeMedium} from 'react-icons/io5';



 function DownMenu({ song, imgSrc, songName, artist}) {
     console.log(song);
    const [isPlaying, setPlay] = useState(false);

    

    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrenttime] = useState(0);

    const audioPlayer = useRef();
    const progressBar = useRef();
    const animationRef = useRef();

     useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);

    // set max prop with out seconds in input[range]
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

    
     const changePlayPause = () => {
    const prevValue = isPlaying;
    setPlay(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
     
    }
  };
  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMin} : ${returnSec}`;
  };

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;


    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrenttime(progressBar.current.value);
  };

    return (
        <div className='footer'>
            <div className="footer_left">
                
            <div className='songImage'>
                <img src={imgSrc} alt=''/>   
            </div>
            <div className="name">
                <p>{songName}</p>
                <span className="singer">{artist}</span>
            </div>
            <div className='songAttributes'>
                 <audio src={song} preload="metadata" ref={audioPlayer} />
            
             
        </div>
            </div>
            <div className='footer_centre'>
                <IoShuffle className='footer_green'/>
                <IoPlayBack className='footer_icon'/>
                <div className='playpause' onClick={changePlayPause}>
                {isPlaying ? (<IoPauseCircle/>) : (<IoPlayCircle/>)}
                </div>
                <IoPlayForward className='footer_icon'/>
                <IoRepeat className='footer_green'/>
                <div className='timer'>
                 <div className="time">
                     <div className='currentTime'>{calculateTime(currentTime)}</div>
                     </div>
                 <input type="range" className="progressBar" ref={progressBar}
            defaultValue="0"
            onChange={changeProgress}/>
                 <div className='duration'> {duration && !isNaN(duration) && calculateTime(duration)
              ? duration && !isNaN(duration) && calculateTime(duration)
              : "00:00"}</div>
             </div>
            
            </div>
            
            <div className='footer_right'>
                <IoVolumeMedium className='volume' />
                <input type='range'></input>

            </div>
        </div>
    );
}

export {DownMenu};
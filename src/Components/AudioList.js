import React, {useState, useEffect} from "react";
import '../Styles/AudioList.css';
import {IoPlay} from 'react-icons/io5';
import { Songs } from "./Songs"
import {IoMdHeartEmpty, IoMdHeart} from 'react-icons/io';


import { DownMenu } from "./DownMenu";

function AudioList() {
     
     const [songs, setSongs] = useState(Songs);
      const [song, setSong] = useState(songs[0].song);
  const [img, setImage] = useState(songs[0].imgSrc);
  const [name, setName] = useState(songs[0].songName);
  const [span, setSpan] = useState(songs[0].artist);

  useEffect(() => {
    const allSongs = document.querySelectorAll(".songs");
    function changeActive() {
      allSongs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allSongs.forEach((n) => n.addEventListener("click", changeActive));
  }, []);
     
     const changeFavourite = (id) =>{
         Songs.forEach((song) => {
             if(song.id === id){
                 song.favourite = !song.favourite
             }
         });
         setSongs([...songs]);
  };
//      const changePaused = (id) =>{
//          Songs.forEach((song) => {
//              if(song.id === id){
//                  song.playpause = !song.playpause
//              }
//          });
//          setSongs([...songs]);
//   };

  const setMainSong = (songSrc, imgSrc, songNameSrc, artistSrc) =>{
      setSong(songSrc);
      setImage(imgSrc);
      setName(songNameSrc);
      setSpan(artistSrc);
      
  }

    return (
       
        <div className='songsContainer'>

             {Songs &&
          Songs.map((song) => (
              <div className="box">

            <div className='Songs'key={song?.id}
            onClick={() => setMainSong(song?.song, song?.imgSrc, song?.songName, song?.artist)}>
                
                    <div className='playpause'>
                        <IoPlay/>
                </div>
                <div className="song">
                    <div className="imgBox">
                        <img src={song?.imgSrc} alt=""/>
                    </div>

                    <div className="section" >
                        <p className="songName">
                            {song?.songName}
                            <span className="artistName">{song?.artist}</span>
                        </p>
                        <div className="time">
                            <p className="duration">
                                {song?.duration}
                            </p>
                            </div>
                            <div className="favorite" onClick={() => changeFavourite(song?.favourite)}>
                                {
                                    song?.favourite ?
                                <IoMdHeart className="fav"/>:
                                <IoMdHeartEmpty/>
                                }

                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
))
          }  
          
           
                <div className="footer">
                <DownMenu song={song} imgSrc={img} songName={name} artist={span} />
                </div>
        </div>

    )
}

export {AudioList};

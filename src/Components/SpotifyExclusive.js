import React, {useState} from 'react';
import '../Styles/SpotifyExclusive.css';

import { Podcasts } from "./Originals";

function SpotifyExclusive() {
    const [podcasts, setPodcasts] = useState(Podcasts);
    const [podcast, setPodcast] = useState(podcasts[0].podcast);
    
  return( 
  <div className='SpotifyOriginals'>
      {Podcasts &&
          Podcasts.map((podcast) => (
              <div className='podcastbox' key={podcast?.id}>
                  <div className='spotify'>
      <div className='poster'>
       <img src={podcast?.imgSrc} alt=''/>
      </div>
    <div className='Name'>
        <p>{podcast?.songName}</p>
    </div>
    <div className='Studio'>
        <p>Spotify Studios</p>
    </div>
    </div>
    </div>
          ))}
  </div>
  );
}

export {SpotifyExclusive};

import React from 'react';
import '../Styles/mainContainer.css';
import { AudioList } from './AudioList';

import { Banner } from './Banner';
import { SpotifyExclusive } from './SpotifyExclusive';


function MainContainer({spotify}) {
    return (
        <div className='mainContainer'>
         <div className='banner'>
         <Banner spotify={spotify}/>  
         </div>
         

         <div className='LatestRelease'>
             <h2>Latest releases
             <span className='h3'>View all</span>
             </h2>
             <AudioList className='audio'/>
        </div>
        <div className='recommended'>
            <h2>Spotify Exclusive
             <span className='h3'>View all</span>
             
             </h2>
             <SpotifyExclusive/>
        </div>
        <p className='foot
        '></p>
        </div>

        
    )
}

export {MainContainer};

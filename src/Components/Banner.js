import React from 'react';
import Poster from '../img/Model.jpg';
import "../Styles/Banner.css";
import {IoHeartCircleOutline, IoShareSocial} from 'react-icons/io5';
import {Avatar} from '@material-ui/core';
import { useDataLayerValue } from '../DataLayer';
import {BiSearchAlt} from 'react-icons/bi';


function Banner() {
  const [{user}, dispatch] = useDataLayerValue();
    return (
        <div className='banner'>
            
        <img src={Poster} alt='' className='posterImg'>
             
        </img>
         
        <div className='Content'>
             <div className='profile'>
               <Avatar src={user?.images[0]?.url} alt='profilepic'/>
               {/* <h4>{user?.display_name}</h4> */}
             </div>
            
             <div className='searchbox'>
                 <input type= 'text' placeholder='Search songs, artists, genres...'/>
                   <i className='searchIcon'>
                 <BiSearchAlt/>
                 </i>
               
                 </div> 
                 
               <div className='playbutton'>
                     <h2>PLAY NOW</h2>
                 </div>
                 <IoHeartCircleOutline className='Favorite'/>
                 <IoShareSocial className='Share'/>
        
        </div>
        
        </div>
    )
}

export {Banner};

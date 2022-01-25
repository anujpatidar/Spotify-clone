import React from 'react';
import '../src/Login.css';
import Bg from '../src/img/image.jpg';
import {loginUrl} from './Spotify';

function Login() {
  return(
       <div className='login'>
         <img src={Bg} alt=''></img>
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
       </div>
  ) 
}

export {Login} ;

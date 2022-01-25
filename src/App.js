import React, {useState,useEffect} from 'react';
import './App.css';
import { Components } from './Components';
import { Login } from './Login';
import { getTokenFromUrl} from "./Spotify";
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
 
 const [{ user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log(user);

        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }

    console.log(token);
  }, []
  );
  console.log(user);
  console.log(token);
  
  return (
    
    <div className="App">
      {
        token ? (
          <Components spotify={spotify}/>
        ):(
      
     <Login/>
        )
        }
     </div>
    
  );
}

export default App;

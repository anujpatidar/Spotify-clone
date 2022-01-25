import React from "react";
import "../Styles/LeftMenu.css";
import spotifylogo from "../img/Spotify_Logo_RGB_Green.png";
import { SidebarOption } from "./SidebarOption";
import {IoIosRadio, IoIosMic, IoIosSearch, IoMdHeartEmpty, IoMdPeople, IoIosMusicalNotes, IoIosStarOutline, IoIosMusicalNote} from 'react-icons/io'
import {MdHistory} from 'react-icons/md';

import { useDataLayerValue } from "../DataLayer";



function LeftMenu() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    console.log(playlists);
    return (
        <div className="LeftMenu">
        <div className="logo">
            <img src={spotifylogo} alt="logo"></img>
            </div>    
            <div className="browse">
                <h3>BROWSE MUSIC</h3>
            
        <SidebarOption Icon={IoIosSearch} title="Explore" />
        <SidebarOption Icon={IoIosRadio} title="Hear this" />
        <SidebarOption Icon={IoIosMic} title="Radio" />
            </div>
            <div className="yourLibrary">
                <h3>YOUR LIBRARY</h3>
           <SidebarOption Icon={MdHistory} title="Last added songs" />
           <SidebarOption Icon={IoMdHeartEmpty} title="Favorites" />
           <SidebarOption Icon={IoMdPeople} title="Artists" />
           <SidebarOption Icon={IoIosMusicalNotes} title="Songs" />
           <SidebarOption Icon={IoIosStarOutline} title="Genres" />

            </div>
            
             <div className="playlist">
                <h3>PLAYLISTS</h3>
                {playlists?.items?.map((playlist) => (
                    <SidebarOption Icon={IoIosMusicalNote} title={playlist.name} />

                ))}
        
            </div>
        </div>
    )
}

export {LeftMenu};

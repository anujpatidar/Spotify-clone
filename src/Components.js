import React from 'react';
import { LeftMenu } from './Components/LeftMenu';
import { MainContainer } from './Components/MainContainer';
import '../src/Components.css';

function Components({spotify}) {
  return(

    
    <div className="App">
     <LeftMenu spotify={spotify}/>
     <MainContainer spotify={spotify}/>
     
     </div>
    
  )
}



export {Components};

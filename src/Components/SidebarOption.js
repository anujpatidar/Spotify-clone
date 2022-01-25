import React from 'react';
import "../Styles/SidebarOption.css";

function SidebarOption({ title = "test", Icon }) {
   
    return (
        
        <div className='sidebarOption'>

            
            {Icon && <Icon className='sidebaroption_icon'></Icon>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
           
        </div>
    )
}

export {SidebarOption};

import React from 'react'


export default function SideBarItem({name,active,handleClick}) {
    return (
       <
           button className={`SideBar-Item ${active ?`active `:''}`}
           onClick={handleClick}
           >
           
           {name} 
           </button>

    )
}
 
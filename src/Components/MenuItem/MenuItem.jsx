import React from "react";
import {useNavigate} from 'react-router-dom';
import './MenuItem.scss'

function MenuItem  ({item})  {
    
    const navigate = useNavigate();

    const handleClick = (linkUrl) => {
        // 👇️ navigate programmatically
        navigate(item.linkUrl);
      };

    return(

        <div className={`${item.size} menu-item`}  onClick={handleClick}>
        <div
         style={{
            backgroundImage:`url(${item.image})`
        }}
        className="background-image"
        />
        <div className="content">
            <h1 className="title">{item.catogory}</h1>
            <span className="subtitle">SHOP NOW</span>
            {console.log("menu items")}
        </div>
    </div>
    )

}

export default MenuItem;

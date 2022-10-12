import React from "react";
import './MenuItem.scss'

export const MenuItem = ({item}) => (
    <div className={`${item.size} menu-item`} >
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
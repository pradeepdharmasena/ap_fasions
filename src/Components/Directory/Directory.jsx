import React from "react";
import './Directory.scss'
import  MenuItem  from "../MenuItem/MenuItem";

export const Directory = ({ directory }) => (
    <div className="directory-menu">

        {
            directory.map((item) =>(
                    <MenuItem item = {item} />
            ))

        }
       
    </div>
)
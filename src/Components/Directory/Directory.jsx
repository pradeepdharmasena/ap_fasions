import React from "react";
import './Directory.scss'
import { MenuItem } from "../MenuItem/MenuItem";

export const Directory = ({ directory }) => (
    <div className="directory-menu">

        {
            directory.map((item) =>(
                    <MenuItem item = {item} />
                   
            ))

        }
       

        {(() => {
            const a = [1, 2, 3].find((el) => el === 2)
            // as much code as you want ...
            // ...
            // ...
            console.log(a)
        })()}

    </div>
)
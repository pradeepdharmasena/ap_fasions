import React from "react";
import './HatPage.scss'

export const HatPage = (props) =>
    (
        <div>
            <h1> this is hat page</h1>
            {console.log("props" , props)}
            {console.log("props match =>", props.match)}
        </div>
    )

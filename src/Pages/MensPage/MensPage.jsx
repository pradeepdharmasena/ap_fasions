import React from "react";
import './MensPage.scss'

export function MensPage (props) {

    return(
        <div>
            <h1> this is Mens page</h1>
            {console.log("props =>", props.history)}
            {console.log("props match =>", props.match)}
        </div>
    )

}
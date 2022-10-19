import React from "react";
import './JacketPage.scss'

export function JacketPage (props) {

    return(
        <div>
            <h1> this is Jacket page</h1>
            {console.log("props =>", props.history)}
            {console.log("props match =>", props.match)}
        </div>
    )

}
    

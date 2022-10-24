import React from "react";
import './WomensPage.scss'

export function WomensPage (props) {

    return(
        <div>
            <h1> this is Womens page</h1>
            {console.log("props =>", props.history)}
            {console.log("props match =>", props.match)}
        </div>
    )

}
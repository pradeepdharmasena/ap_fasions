import React from "react";
import './SneakersPage.scss'

export function SneakersPage (props) {

    return(
        <div>
            <h1> this is Sneakers page</h1>
            {console.log("props =>", props.history)}
            {console.log("props match =>", props.match)}
        </div>
    )

}
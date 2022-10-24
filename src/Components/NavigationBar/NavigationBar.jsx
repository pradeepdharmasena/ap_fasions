import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../Assetes/crown.svg";


import './NavigationBar.scss'

export const NavigationBar = () =>(
    <div className="container-navigation-bar">
        <Link to = "/">
            <Logo/>
        </Link>

        <Link to = "/shop" className="options">
            SHOP
        </Link>

        <Link to = "/contact" className="options">
            CONTACT
        </Link>

    </div>
)
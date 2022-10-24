import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../Assetes/crown.svg";
import { auth } from "../../firebase/firebase.utils";


import './NavigationBar.scss'

export const NavigationBar = ({currentUser}) =>(
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

        {
            currentUser ?
            <Link to = "/signin" className="options"  onClick={()=>auth.signOut()}>SIGN OUT</Link>

            : <Link to = "/signin" className="options">SIGN IN</Link>
        }

    </div>
)
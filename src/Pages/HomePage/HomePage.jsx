import React from "react";
import './HomePage.scss'
import { Directory } from "../../Components/Directory/Directory";

export const HomePage = ({directory}) => (
    <div className="homepage">

        <Directory directory={directory} />
    </div>
)
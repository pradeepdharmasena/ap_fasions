import React from "react";
import './CostomButton.scss'

export const CoustomButton = ({children, ...otherProps})=>(
    <div>
        <button className="custom-button" {...otherProps}>
            {children}
            
        </button>
    </div>
)


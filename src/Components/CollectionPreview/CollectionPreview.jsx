import React from "react";



export const CollectionPreview = ({title, items}) =>{

    return(
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {
                    items.map( (item) =>(
                        <div key={item.id} className = "item">
                            {item.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


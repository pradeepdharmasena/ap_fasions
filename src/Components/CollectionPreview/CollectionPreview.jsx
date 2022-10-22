import React from "react";
import './CollectionPreview.scss'
import { CollectionItem } from "../CollectionItem/CollectionItem";



export const CollectionPreview = ({title, items}) =>{

    return(
        <div className="container-collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {
                    items.filter((item, id)=> id<4).map( (item) =>(
                        <CollectionItem key= {item.id} item = {item} />
                    ))
                }
            </div>
        </div>
    )
}


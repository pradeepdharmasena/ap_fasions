import React from "react";

import './CollectionItem.scss'

export function CollectionItem({ item }) {

    return (
        <div className="container-collection-item ">
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${item.imageUrl})`
                }}
            />
            <div className="collection-item-footer">
                <span className="name">{item.name}</span>
                <span className="price">{item.price}</span>
            </div>
        </div>
    )
}





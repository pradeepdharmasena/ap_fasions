import React from "react";
import { SHOP_DATA} from "./ShopPageData";
import { CollectionPreview } from "../../Components/CollectionPreview/CollectionPreview";

export class ShopPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            collections : SHOP_DATA
        }
    }


    render(){
        return(
            <div>
                {
                    this.state.collections.map((collection) =>(
                        <CollectionPreview key={collection.id} title={collection.title} items={collection.items} />
                    ))
                }
            </div>
        )
    }
}

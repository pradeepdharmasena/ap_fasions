import { Component } from "react";
import './HomePage.scss'
import { Directory } from "../../Components/Directory/Directory";

export class HomePage extends Component {

    render() {
        return (
            <div className="homepage">
                <Directory directory={this.props.directory} />
            </div>
        )
    }

    
}




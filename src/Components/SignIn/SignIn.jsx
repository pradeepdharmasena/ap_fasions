import React from "react";
import './SignIn.scss'
import { FormInput } from "../FormInput/FormInput";
import { CoustomButton } from "../CostomButton/CustomButton";
import { SignInWithGoogle } from "../../firebase/firebase.utils";
class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            "email": "",
            "password": ""
        }
    }

    handleSubmit = event => {

        event.preventDefault();
        this.setState({ "email": "", "password": "" }, ()=>{console.log("state", this.state)})

    }

    handleOnChange = event => {

        const { type, value } = event.target;
        this.setState({ [type]: value },    ()=>{console.log("state in change", this.state)} )

    }


    render() {

        return (
            <div className="container-signin">
                <form className="signin-form" onSubmit={this.handleSubmit}>
                    <FormInput

                        type="email"
                        value={this.state.email}
                        handleOnChange={this.handleOnChange}
                        label ="Email" />

                    <FormInput
                        type="Password"
                        value={this.state.password}
                        handleOnChange={this.handleOnChange} 
                        label = "Password"/>

                    <CoustomButton
                        type="submit"
                        value="submit"
                        onClick={this.handleSubmit} > Sign In</CoustomButton>

<CoustomButton
                        type="submit"
                        value="submit"
                        onClick={SignInWithGoogle} > Sign In with Google</CoustomButton>
                </form>
            </div>
        )
    }


}

export default SignIn;



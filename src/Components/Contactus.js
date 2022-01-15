import React from 'react'
import Menu from './Menu'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
function Contactus(props) {
    if(props.loginIs===false){
        console.log("inside");
        return <Redirect to="/login"/>;
    }
    return (
        <div>
        <Menu LoginIs={props.loginIs} handleLogout={props.handleLogout}></Menu>
            Contact us!
        </div>
    )
}

export default Contactus

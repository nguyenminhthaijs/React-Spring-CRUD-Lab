import React from "react";
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';


class Create extends React.Component{
    render(){
        return(
            <h1>create new product</h1>
        )
    }
}
export default withRouter(Create);
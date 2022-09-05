import React from 'react';
import './Nav.css';
import {
    Link, NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>
                    Home
                </NavLink>
                <NavLink to="/create" activeClassName="active">
                    Create
                </NavLink>


            </div>
        )
    }
}
export default Nav;

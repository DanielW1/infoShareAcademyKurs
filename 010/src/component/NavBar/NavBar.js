import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    constructor() {
        super();
    }

    render() {
        return <>
            <Link to="/">Home</Link>
            <Link to="/Products">Products</Link>
            <Link to="/Contact">Contact</Link>
        </>
    }
}
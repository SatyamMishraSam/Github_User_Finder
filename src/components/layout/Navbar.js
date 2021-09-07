import React from 'react'
import {Link} from 'react-router-dom';

const Navbar =(props)=>{
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className = {props.gitIcon} ></i>
                    {props.title}
                </h1>
                <ul>
                    <li>
                        <Link to = '/'>Home</Link>
                    </li>
                    <li>
                        <Link to = '/about'>About</Link>
                    </li>
                </ul>
            </nav>
        )  
}

// static defaultProps will assign the props if not mentioned in App or Parent comp.
Navbar.defaultProps = {
    title: "Github Finder",
    gitIcon:"fab fa-github"
}



export default Navbar

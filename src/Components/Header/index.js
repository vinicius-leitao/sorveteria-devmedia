import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(){
    return (    
        <header>
            <div>
                <img src='assets/logo.png' title="Gelateria devmedia logo" alt="Gelateria devmedia logo"></img>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/flavors">Flavors</Link>
                    <Link to="/about">About</Link>
                </nav>
            </div>
            
        </header>
    );
}
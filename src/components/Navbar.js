import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'

export default function Navbar() {
    
    const [ fix, setFix ] = useState(false)

    function setFixed(){
        if(window.scrollY >= 392 ) {
            setFix(true)
        }else{
            setFix(false)
        }
    }

    window.addEventListener("scroll", setFixed)

    return(
        <header>
            <nav className= { fix ? 'navbar fixed' : 'navbar' } >
                <a href="#" className="brand" > Nugi Film </a>
                <ul>
                    <li>
                        <Link to="#trending"> Trending </Link>
                    </li>
                    <li>
                        <Link to="#superhero"> Superhero </Link>
                    </li>
                </ul>
                <button> Get Started </button>
            </nav>
        </header>
    )
}
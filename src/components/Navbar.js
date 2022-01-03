import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav>
                <h2>This is Navbar Component</h2>
                <ul className='nav-links'>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                    <Link to='/post'>
                        <li>Post</li>
                    </Link>
                   
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

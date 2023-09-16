import UserBar from 'components/UserBar/UserBar'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
            </ul>
            <UserBar />
        </header>
    )
}

export default Header
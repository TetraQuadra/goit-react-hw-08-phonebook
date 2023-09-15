import UserBar from 'components/UserBar/UserBar'
import React from 'react'

function Header() {
    return (
        <header>
            <ul>
                <li>Home</li>
                <li>Contacts</li>
            </ul>
            <UserBar />
        </header>
    )
}

export default Header
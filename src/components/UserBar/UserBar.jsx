import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutThunk } from 'redux/authThunk'

function UserBar() {
    const dispatch = useDispatch()
    const username = useSelector(state => state.auth.name)
    const token = useSelector(state => state.auth.token)
    const handleLogout = () => {
        console.log("first")
        dispatch(logoutThunk(token))
    }

    return (
        <>
            {
                username ?
                    <div>{username}
                        <button onClick={handleLogout} type='button'>Logout</button>
                    </div>
                    :
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
            }
        </>

    )
}

export default UserBar
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({ user, setUser }) {
    function logOut() {
        localStorage.removeItem("token")
        setUser(null)
    }
    if (user) {
        return (<nav>
            <Link to="/favs">Your Favs</Link>
            {/* add the indiviual users id to both these links */}
            &nbsp; | &nbsp;
            <Link to="/user">Your Art</Link>
            {/* just a link to the users art you want to see, other user's names will be a link to thier id */}
            &nbsp; | &nbsp;
            <Link to="/">Browse Art</Link>
            &nbsp; | &nbsp;
            <Link to="/draw">Make Art</Link>
            &nbsp; | &nbsp;
            <a onClick={logOut}>Log Out</a>
        </nav>)
    }
    return (<>
        <nav>
            <Link to="/">Browse Art</Link>
            &nbsp; | &nbsp;
            <Link to="/draw">Make Art</Link>
            &nbsp; | &nbsp;
            <Link to="/login">Log In</Link>
        </nav>
        <h1>Log In/ Sign Up to Post Art, and Save other's Art to Your Collection</h1>
    </>
    )
}

export default NavBar
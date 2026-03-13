import React from 'react'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className="site-name">
                <h1>Horizon Courts</h1>
            </div>
            <div className="nav-links">
                <h2>About Us</h2>
                <h2>Services</h2>
                <h2>Coaches</h2>
                <h2>Events</h2>
                <h2>Contacts</h2>
            </div>
            <div className="book-now">
                <button>Book Now</button>
            </div>
        </div>
    )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 navStyle">
            <span style={{ fontFamily: 'Acme, sans-serif' }} className="navbar-brand">Food Bots</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto" style={{ fontSize: 20 }}>
                    <li className="nav-item">
                        <Link className="nav-link mr-2" to='/'>Order Summary</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/profile'>Profile</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

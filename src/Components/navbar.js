import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Logo from '../logo.svg';
import '../App.css';


function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm fixed-top">
            <div className="container">
                <h1><img src={Logo} alt='logo' className='App-logo' /><cite className='text-white'>Forkify</cite>🍴</h1>
                <div id="Navbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><a className="nav-link" href='/'>HOME</a></li>
                        <li className="nav-item"><a className="nav-link" href="/search">SEARCH</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
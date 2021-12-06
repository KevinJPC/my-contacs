import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { selectUser, selectConnected, registerAsync } from '../user/userSlice'


export function NavBar() {
    const connected = useSelector(selectConnected);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Contact Book</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {!connected ? null : 
                        <li className="nav-item">
                            <Link to="/contacs" className="nav-link active" aria-current="page">
                                Contacts
                            </Link>
                        </li>}

                        {connected ? null : 
                        <Fragment>
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">
                                Sign in
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link active" aria-current="page">
                                Sign up
                            </Link>
                        </li> 
                        </Fragment>}


                    </ul>
                </div>
            </div>
        </nav>
    )
}
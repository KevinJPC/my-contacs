import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectConnected, loginAsync } from './userSlice'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export function UserLogin() {

    const user = useSelector(selectUser);
    const connected = useSelector(selectConnected);
    const dispatch = useDispatch();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (username, password) => () => {
        dispatch(loginAsync({
            identifier: username,
            password
        }))
    }

    return (
        <div>
            {connected ? <Redirect to="/contacs" /> :
                <div className="container">

                    <div>
                        <h3 className="text-center">
                            Sign in
                        </h3>
                    </div>
                    <div className="container bg-primary py-3 mt-4 col-md-7 col-lg-4 col-sm-12 col-xl-3 rounded bg-dark">
                        <div className="username-input mb-3">
                            <p className="text-white">
                                Username
                            </p>
                            <input type="text" className="col-12 " onChange={e => setUserName(e.target.value)}></input>

                        </div>
                        <div className="Password-input mb-4">
                            <p className="text-white">
                                Password
                            </p>
                            <input type="password" className="col-12 " onChange={e => setPassword(e.target.value)}></input>

                        </div>

                        <div className="pb-3">
                            <Link to="/register" className="text-white">
                                Or create an account
                            </Link>
                        </div>

                        <button type="button" className="btn btn-success col-12" onClick={handleLogin(username, password)}>
                            Sign in
                        </button>

                    </div>

                </div>
            }
        </div>
    )

}
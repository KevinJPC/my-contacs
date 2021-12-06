import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectConnected, registerAsync } from './userSlice'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export function UserRegister() {

    const user = useSelector(selectUser);
    const connected = useSelector(selectConnected);
    const dispatch = useDispatch();
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (username, email, password) => () => {
        dispatch(registerAsync({
            username,
            email, 
            password
        }))
    }

    return (
        <div>
        { connected ? <Redirect to="/" /> : 
        <div className="container">
           
            <div>
                <h3 className="text-center">
                    Sign up
                </h3>
            </div>
            <div className="container bg-primary py-3 mt-4 col-md-7 col-lg-4 col-sm-12 col-xl-3 rounded bg-dark">
                <div className="username-input mb-3">
                    <p className="text-white">
                        Username
                    </p>
                    <input type="text" className="col-12 " onChange={e => setUserName(e.target.value)}></input>

                </div>
                <div className="Email-input mb-3">
                    <p className="text-white">
                        Email
                    </p>
                    <input type="email" className="col-12 " onChange={e => setEmail(e.target.value)}></input>

                </div>
                <div className="Password-input mb-4">
                    <p className="text-white">
                        Password
                    </p>
                    <input type="password" className="col-12 " onChange={e => setPassword(e.target.value)}></input>

                </div>

                <button type="button" className="btn btn-success col-12" onClick={handleRegister(username, email, password)}>
                    Sign up
                </button>

            </div>

        </div>
        }
        </div>
    )

}
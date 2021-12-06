import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectConnected, getUserContacsAsync, selectStatus } from './userSlice'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export function UserContacs() {

    const user = useSelector(selectUser);
    const connected = useSelector(selectConnected);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    useEffect(function () {
        if (status == "loading")
            dispatch(getUserContacsAsync(user.jwt))
    }, []);

    // const handleGetUserContacs = (jwt) => () => {
    //     dispatch(getUserContacsAsync(jwt))
    // }

    return (
        <div>
            {!connected ? <Redirect to="/" /> : (
                status == "loading" ?

                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <div className="container">

                        <div>
                            <h3 className="text-center">
                                Contacs
                            </h3>
                        </div>
                        <div className={"text center py-3 mt-4 rounded" + user.user.contacs.length != 0 ? "card-group" : null}>

                            {
                                user.user.contacs.length == 0 ?
                                    <div className=" text-center alert alert-danger col" role="alert">
                                        Parece que no hay nada aqui
                                    </div>
                                    :
                                    user.user.contacs.map(function (contac, index) {
                                        return (
                                            <div className=" card text-white rounded m-2 bg-dark p-3" key={index}>
                                                <p><span className="text-warning">Name:</span> {contac.name}</p>
                                                <p><span className="text-warning">Lastname:</span> {contac.lastname}</p>
                                                <p><span className="text-warning">Phone:</span> {contac.phone}</p>
                                                <p><span className="text-warning">Email:</span> {contac.email}</p>
                                            </div>
                                        );
                                    })}
                        </div>
                    </div>
            )
            }
        </div>
    )

}
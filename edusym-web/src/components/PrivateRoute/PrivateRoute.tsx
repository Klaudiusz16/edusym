import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react'
import { useAppSelector } from '../../store/hooks'
import { Navigate } from "react-router-dom"
import LoadingScreen from '../Loading/LoadingScreen';

export default function PrivateRoute({ Component }: { Component: FunctionComponent }) {
    const [user, setUser] = useState<null | false | string>(null);


    useEffect(() => {
        if (window) {
            const userJSON = window.localStorage.getItem("user")
            if (userJSON) {
                setUser(userJSON);
            } else {
                setUser(false);
            }
        }
    }, [])

    if (user === null) {
        return <LoadingScreen />
    }


    if (user === false) {
        return <Navigate to="/login" replace={true} />
    }

    if (user) {
        return <Component />
    }

}

import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingToRedirect from './LoadingToRedirect';

import { currentAdmin } from '../../functions/auth';

const AdminRoute = ({ children, ...rest }) => {
    console.log('tam route', children)
    const { user } = useSelector((state) => ({ ...state }));
    const [ok, setOk] = useState(false)

    useEffect(() => {
        if (user && user.token) {
            currentAdmin(user.token)
                .then(res => {
                    setOk(true)
                    console.log('Admin Route Ok', res)
                }).catch(err => {
                    setOk(false)
                    console.log('Admin Route err', err)
                })
        }
    }, [user])

    return ok
        ? <Route {...rest} />
        : <LoadingToRedirect />
}

export default AdminRoute


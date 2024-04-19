import React, { useEffect } from 'react'
import { Navigate, Outlet } from "react-router-dom";



function PrivateRouter() {
    const auth = JSON.parse(localStorage.getItem("user"))
    // const navigate = useNavigate()
    useEffect (()=> {

    }, [auth])
    return auth?<Outlet />:<Navigate to='/' />

}

export default PrivateRouter
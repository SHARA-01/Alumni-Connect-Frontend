import { Navigate, Outlet } from "react-router-dom";


function PrivateRouterAll() {
    const auth = JSON.parse(localStorage.getItem('user'))
    return auth && (auth.user.role === "Student" || auth.user.role === "Alumni") ? <Outlet /> : <Navigate to='/' />
}

export default PrivateRouterAll
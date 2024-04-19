import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login, AdminMain, Routess, Dashbord, UserProfile, UsersPage, RegisterPage, PostPage, UserMain, IndexPage, ProfilePage } from './Components/index.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import PrivateRouter from './router/PrivateRouter.jsx'
import './index.css'
import './App.css'

import { CookiesProvider } from "react-cookie";


const router = createBrowserRouter(
  createRoutesFromElements(

   
    <Route path='/' element={<Routess />} >
      <Route path='/' element={<Login />} />
      {/* <Route element={<PrivateRouter />} > */}
      <Route   path='/admin' element={<AdminMain />} >
        <Route path='' element={<Dashbord />} index />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="user/register" element={<RegisterPage />} />
        <Route path="new-post" element={<PostPage />} />
      {/* </Route> */}
      </Route>

      {/* <Route element={<PrivateRouter />}> */}
      <Route path='/user' element={<UserMain />} >
            <Route path='' element={<IndexPage />} index/>
            <Route path='profile' element={<UserProfile />} />
      </Route>
      {/* </Route> */}

    </Route>

  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <CookiesProvider>
    <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>
);

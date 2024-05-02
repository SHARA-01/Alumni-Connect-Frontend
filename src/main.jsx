import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login, AdminMain, Routess, Dashbord, UserProfile, UsersPage, RegisterPage, PostPage, UserMain, IndexPage, ProfilePage, JobPost, TestPage, CreateJobPost, JobsPostedPageForAlumni, JobPostView, DisplayUserProfile } from './Components/index.js'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import PrivateRouter from './router/PrivateRouter.jsx'
import './index.css'
import './App.css'



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
            <Route path=':id' element={<DisplayUserProfile />} />
            <Route path='profile' element={<UserProfile />} />
            <Route path='new-post' element={<CreateJobPost />} />
            <Route path='jobs' element={<JobPost />} />
            <Route path='job/:id' element={<JobPostView/>} />
            <Route path='job-posted' element={<JobsPostedPageForAlumni />} />
      </Route>
      {/* </Route> */}

      <Route path='/te' element={<TestPage />} />

    </Route>

  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

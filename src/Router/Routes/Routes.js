import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Addservice from '../../Pages/Addservice/Addservice';
import Allservices from '../../Pages/Allservices/Allservices';
import Blogs from '../../Pages/Blogs/Blogs';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Myreviews from '../../Pages/Myreviews/Myreviews';
import Update from '../../Pages/Myreviews/Update';
import Signup from '../../Pages/Signup/Signup';
import SingleService from '../../Pages/SingleService/SingleService';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/services',
                element: <Allservices></Allservices>
            },
            {
                path: '/services/:id',
                element: <SingleService></SingleService>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`) 
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><Myreviews></Myreviews></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><Addservice></Addservice></PrivateRoute>
            },
            {
                path: '/update',
                element: <Update></Update>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])
export default Routes;
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Allservices from '../../Pages/Allservices/Allservices';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Myreviews from '../../Pages/Myreviews/Myreviews';
import Signup from '../../Pages/Signup/Signup';
import SingleService from '../../Pages/SingleService/SingleService';

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
                element: <Allservices></Allservices>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services/:id',
                element: <SingleService></SingleService>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`) 
            },
            {
                path: '/myreviews',
                element: <Myreviews></Myreviews>
            }
        ]
    }
])
export default Routes;
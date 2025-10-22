import { createBrowserRouter } from 'react-router-dom';
import Layouts from '../Layouts/Layouts';
import Home from '../Pages/Home';
import CategoryNews from '../Pages/CategoryNews';
import ErrorPage from '../Pages/ErrorPage';
import LoginPage from '../Pages/LoginPage';
import Register from '../Pages/Register';
import AuthLayOuts from '../Layouts/AuthLayOuts';
import NewsDetails from '../Pages/NewsDetails';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts></Layouts>,
        children: [
            {
                path: '',
                element: <Home></Home>
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch('/news.json')
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }

        ]
    },
    {
        path: '/auth',
        element: <AuthLayOuts></AuthLayOuts>,
        children: [
            {
                path: '/auth/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/details/:id',
        element: <NewsDetails></NewsDetails>,
        loader: () => fetch('/news.json')
    }
]);



export default router;
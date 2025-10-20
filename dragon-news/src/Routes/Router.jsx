import { createBrowserRouter } from 'react-router-dom';
import Layouts from '../Layouts/Layouts';
import Home from '../Pages/Home';
import CategoryNews from '../Pages/CategoryNews';

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
            }

        ]
    },
]);



export default router;
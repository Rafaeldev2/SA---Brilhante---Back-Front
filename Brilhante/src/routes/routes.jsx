import { Router, createBrowserRouter } from "react-router-dom";
import LoginForm from "../Pages/LoginForm.jsx";
import Cadastro from "../Pages/Cadastro.jsx"
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            // {
            //     path: '/',
            //     element: <Home />
            // },
            {
                path: '/Login',
                element: <LoginForm />
            },
            // {
            //     path: '/Brinco',
            //     element: <Brinco />
            // },
            {
                path: '/Cadastro',
                element: <Cadastro />
            },
        ]
    },
])

export default router;

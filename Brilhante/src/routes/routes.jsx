import { Router, createBrowserRouter } from "react-router-dom";
import LoginForm from "../Pages/LoginForm.jsx";
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
                path: '/',
                element: <LoginForm />
            },
            // {
            //     path: '/Carrinho',
            //     element: <Carrinho />
            // },
            // {
            //     path: '/Cadastro',
            //     element: <Cadastro />
            // },
        ]
    },
])

export default router;

import { Router, createBrowserRouter } from "react-router-dom";
// import HomePage from "../Pages/HomePage.jsx";
import LoginForm from "../Pages/LoginForm.jsx";
import Cadastro from "../Pages/Cadastro.jsx"
import Brinco from "../Pages/Brinco.jsx";
import Colar from "../Pages/Colar.jsx";
import Pulseira from "../Pages/Pulseira.jsx";
import GerenciaProdutos from "../Pages/GerenciaProdutos.jsx";
import ListarProdutos from "../Pages/ListarProdutos.jsx";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            // {
            //     path: '/',
            //     element: <HomePage />
            // },
            {
                path: '/Login',
                element: <LoginForm />
            },
            {
                path: '/Cadastro',
                element: <Cadastro />
            },
            {
                path: '/Brinco',
                element: <Brinco />
            },
            {
                path: '/Colar',
                element: <Colar />
            },            
            {
                path: '/Pulseira',
                element: <Pulseira />
            },
            {
                path: '/GerenciaProdutos',
                element: <GerenciaProdutos />
            },
            {
                path: '/ListaProdutos',
                element: <ListarProdutos />
            },
        ]
    },
])

export default router;

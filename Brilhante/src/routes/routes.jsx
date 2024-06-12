import { Router, createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage.jsx";
import LoginForm from "../Pages/LoginForm.jsx";
import Cadastro from "../Pages/Cadastro.jsx"
import Carrinho from "../Pages/Carrinho.jsx"
import Aneis from "../Pages/Aneis.jsx"
import Brinco from "../Pages/Brinco.jsx";
import Colar from "../Pages/Colar.jsx";
import Conjunto from "../Pages/Conjunto.jsx"
import Pulseira from "../Pages/Pulseira.jsx";
import Perfil from "../Pages/Perfil.jsx";
import AtualizarProdutos from "../Pages/AtualizarProdutos.jsx";
import GerenciaProdutos from "../Pages/GerenciaProdutos.jsx";
import ListaProdutos from "../Pages/ListaProdutos.jsx";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/Login',
                element: <LoginForm />
            },
            {
                path: '/Cadastro',
                element: <Cadastro />
            },
            {
                path: '/Carrinho',
                element: <Carrinho />
            },
            {
                path: '/Perfil',
                element: <Perfil />
            },
            {
                path: '/Aneis',
                element: <Aneis />
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
                path: '/Conjunto',
                element: <Conjunto />
            },
            {
                path: '/Pulseira',
                element: <Pulseira />
            },
            {
                path: '/AtualizarProdutos',
                element: <AtualizarProdutos />
            },
            {
                path: '/GerenciaProdutos',
                element: <GerenciaProdutos />
            },
            {
                path: '/ListaProdutos',
                element: <ListaProdutos />
            },
        ]
    },
])

export default router;

import React, { useState } from 'react';
import './AtualizarProduto.css';

const produtosIniciais = [
    { Idproduto: 1, nome: 'Produto A', valor: 100.00, quantidade: 10 },
    { Idproduto: 2, nome: 'Produto B', valor: 200.00, quantidade: 5 },
    { Idproduto: 3, nome: 'Produto c', valor: 300.00, quantidade: 1 },
];

  

const ProdutoItem = ({produto, onChange}) => {
  const handleChange = (e) => {
    const {name, value} = e.target;
    onChange(produto.Idproduto, name, value);
  };

  return (
    <div className='produto-container'>
      <h2>
        <input
         type="text"
         name="nome"
         value={produto.nome}
         onChange={handleChange}
          />
      </h2>
      <p>ID: {produto.Idproduto}</p>
      <p>
        Valor: R$
        <input
        type='number'
        name='valor'
        value={produto.valor}
        onChange={handleChange}
        step="0.01"
        />
      </p>
      <p>
        Quantidade
        <input
        type='number'
        name='quantidade'
        value={produto.quantidade}
        onChange={handleChange}
        />
      </p>
    </div>

  );
};

const AtualizarProduto = () => {
   const [produtos, setProdutos] = useState(produtosIniciais);

   const handleProdutoChange = (id, name, value) => {
    setProdutos((prevProdutos) => 
     prevProdutos.map((produto) =>
      produto.Idproduto === id
        ? { ...produto, [name]: name ===  'valor' || name === 'quantidade'? parseFloat(value) : value}
          : produto
      )
    );
   };
   return (
    <div className='lista-de-produtos'>
      <h1>Editar Produtos</h1>
      {produtos.map((produto) => (
        <ProdutoItem
          key={produto.Idproduto}
          produto={produto}
          onChange={handleProdutoChange}
        />
      ))}
    </div>
   );
};


export default AtualizarProduto;
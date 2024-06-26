import React, { useState, useEffect } from 'react';
import './ListaProdutos.css';

const ListaProdutos = () => {
  const [products, setProdutos] = useState([]);
  const [sortBy, setSortBy] = useState('ID');

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('http://localhost:8010/brilhante/produto');
        if (!response.ok) {
          throw new Error('Falha ao carregar os produtos');
        }
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProdutos();
  }, []);

  const sortByKey = (key) => {
    setSortBy(key);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'Nome') {
      return a.nomeProduto.localeCompare(b.nomeProduto);
    } else if (sortBy === 'Valor') {
      return a.valorProduto - b.valorProduto;
    } else {
      return a[sortBy.toLowerCase()] - b[sortBy.toLowerCase()];
    }
  });

  return (
    <div className='container-list'>
      <h2>Lista de Produtos</h2>
      <table className='list-product'>
        <thead>
          <tr>
            <th onClick={() => sortByKey('ID')} className='ID'>ID</th>
            <th onClick={() => sortByKey('Nome')} className='Nome'>Nome</th>
            <th onClick={() => sortByKey('CodigoDeBarra')} className='Codigo-de-barra'>Código de barra</th>
            <th onClick={() => sortByKey('Valor')} className='Valor'>Valor</th>
            <th onClick={() => sortByKey('QtdEstoque')} className='Quantidade'>Quantidade</th>
            <th onClick={() => sortByKey('ProdutoTipo')} className='Tipo'>Tipo</th>
            <th onClick={() => sortByKey('DescricaoProduto')} className='Descricao'>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map(product => (
            <tr key={product.idproduto}>
              <td>{product.idproduto}</td>
              <td>{product.nomeProduto}</td>
              <td>{product.codigoDeBarra}</td>
              <td>{product.valorProduto}</td>
              <td>{product.qtdEstoque}</td>
              <td>{product.produtoTipo}</td>
              <td>{product.descricaoProduto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaProdutos;

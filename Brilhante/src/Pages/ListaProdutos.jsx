import React, { useState, useEffect, useContext } from 'react';
import './ListaProdutos.css';

const ListaProdutos = () => {
  const [products, setProdutos] = useState([]);
  const [sortBy, setSortBy] = useState('id');

  useEffect(() => {
    const fetchProdutos = async () => {
      const productData = [
        { id: 1, name: 'Produto A', valor: 10.0, quantity: 5, barcode: 57363833, tipo: 'Anel', descricao: 'Um ótimo produto A' },
        { id: 2, name: 'Produto B', valor: 20.0, quantity: 3, barcode: 95738392, tipo: 'Brinco', descricao: 'Produto B de alta qualidade' },
        { id: 3, name: 'Produto C', valor: 30.0, quantity: 8, barcode: 12345678, tipo: 'Colar', descricao: 'Confortável e estiloso' },
      ];
      setProdutos(productData);
    };

    fetchProdutos();
  }, []);

  const sortByKey = (key) => {
    setSortBy(key);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'valor') {
      return a.valor - b.valor;
    } else {
      return a[sortBy] - b[sortBy];
    }
  });

  return (
    <div className='container-list'>
      <h2>Lista de Produtos</h2>
      <table className='list-product'>
        <thead>
          <tr>
            <th onClick={() => sortByKey('id')} className='ID'>ID</th>
            <th onClick={() => sortByKey('name')} className='Nome'>Nome</th>
            <th onClick={() => sortByKey('barcode')} className='Codigo-de-barra'>Código de barra</th>
            <th onClick={() => sortByKey('valor')} className='Valor'>Valor</th>
            <th onClick={() => sortByKey('quantity')} className='Quantidade'>Quantidade</th>

            <th onClick={() => sortByKey('tipo')} className='Tipo'>Tipo</th>
            <th onClick={() => sortByKey('descricao')} className='Descricao'>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.barcode}</td>
              <td>{product.valor}</td>
              <td>{product.quantity}</td>
              <td>{product.tipo}</td>
              <td>{product.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaProdutos;

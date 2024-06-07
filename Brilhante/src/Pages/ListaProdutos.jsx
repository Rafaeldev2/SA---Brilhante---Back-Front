import React, { useState, useEffect } from 'react';
import './ListaProdutos.css';

const ListaProdutos = () => {
  const [products, setProdutos] = useState([]);
  const [sortBy, setSortBy] = useState('id');

  useEffect(() => {
    const fetchProdutos = async () => {
      const productData = [
        { id: 1, name: 'Produto A', price: 10.0, quantity: 5, barcode: 57363833 },
        { id: 2, name: 'Produto B', price: 20.0, quantity: 3, barcode: 95738392 },
        { id: 3, name: 'Produto C', price: 30.0, quantity: 8, barcode: 12345678 },
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
    } else if (sortBy === 'price') {
      return a.price - b.price;
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
            <th onClick={() => sortByKey('price')} className='Preço'>Preço</th>
            <th onClick={() => sortByKey('quantity')} className='Quantidade'>Quantidade</th>
            <th onClick={() => sortByKey('barcode')} className='Codigo-de-barra'>Código de barra</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.barcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaProdutos;
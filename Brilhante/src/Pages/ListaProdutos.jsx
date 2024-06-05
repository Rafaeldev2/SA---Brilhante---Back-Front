import React, { useState, useEffect } from 'react';

const ListaProdutos = () => {
const [products, setProdutos] = useState([]);

useEffect(() => {
const fetchProdutos = async () => {

const productData = [
{ id: 1, name: 'Produto A', price: 10.0, quantity: 5, barcode: 57363833 },
{ id: 2, name: 'Produto B', price: 20.0, quantity: 3, barcode: 95738392 },
{ id: 3, name: 'Produto C', price: 30.0, quantity: 8, barcode: 12345678},
];
setProdutos(productData);
};

  fetchProdutos();
  }, []);
  return (
    <div className='container'>
      <h2>Lista de Produtos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Codigo de barra</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
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

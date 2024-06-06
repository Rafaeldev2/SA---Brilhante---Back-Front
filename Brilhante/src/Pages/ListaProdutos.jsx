import React, { useState, useEffect } from 'react';
import './ListaProdutos.css';

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
          <tr className='titulos'>
            <th className='ID'>ID</th>
            <th className='Nome'>Nome</th>
            <th className='Preço'>Preço</th>
            <th className='Quantidade'>Quantidade</th>
            <th className='Codigo-de-barra'>Codigo de barra</th>
          </tr>
        </thead>
        <tbody className='valores'>
          {products.map((product) => (
            <tr key={product.id}>
              <td className='id' >{product.id}</td>
              <td className='name'>{product.name}</td>
              <td className='price'>{product.price}</td>
              <td className='quantity'>{product.quantity}</td>
              <td className='barcode'>{product.barcode}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
    
};

export default ListaProdutos;

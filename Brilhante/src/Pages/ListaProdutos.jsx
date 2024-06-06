import React, { useState, useEffect } from 'react';
import './ListaProdutos.css';

const ListaProdutos = () => {
  const [products, setProdutos] = useState([]);

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
  return (
    <div className='container-list'>
      <h2>Lista de Produtos</h2>
      <table className='list-product'>
          <div className='valores-lista'>
            <div className='div-id' >
            <th className='ID'>ID</th>
              <tl>1</tl>
              <tl>2</tl>
              <tl>3</tl>
              <tl>4</tl>
              <tl>5</tl>
              <td className='id' >{ }</td>
            </div>
            <div className='div-id' >
            <th className='Nome'>Nome</th>
              <tl>.50</tl>
              <tl>P350</tl>
              <tl>MAGNUM</tl>
              <tl>RIFLE DE CAÇA</tl>
              <tl>.40</tl>
              <td className='name'>{ }</td>
            </div>
            <div className='div-id' >
            <th className='Preço'>Preço</th>
              <tl>898</tl>
              <tl>747</tl>
              <tl>546</tl>
              <tl>4554</tl>
              <tl>43435</tl>
              <td className='price'>{ }</td>
            </div>
            <div className='div-id' >
            <th className='Quantidade'>Quantidade</th>
              <tl>94359</tl>
              <tl>354543262</tl>
              <tl>355452</tl>
              <tl>457435</tl>
              <tl>45435</tl>
              <td className='quantity'>{ }</td>
            </div>
            <div className='div-id' >
            <th className='Codigo-de-barra'>Codigo de barra</th>
              <tl>57363833</tl>
              <tl>95738392</tl>
              <tl>12345678</tl>
              <tl>95823723</tl>
              <tl>76528295</tl>
              <td className='barcode'>{ }</td>
            </div>
          </div>

      </table>
    </div>
  );

};

export default ListaProdutos;

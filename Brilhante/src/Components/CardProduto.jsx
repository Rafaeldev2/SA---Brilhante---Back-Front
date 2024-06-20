import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductCards({ tipo }) {
  const [listarprodutos, setListarProdutos] = useState([]);

  useEffect(() => {
    const listarProduto = async () => {
      try {
        let url = 'http://localhost:8010/brilhante/produto';
        if (tipo) {
          url = `http://localhost:8010/brilhante/produto/produtotipo/${tipo}`;
        }
        
        const response = await axios.get(url);
        
        if (response.status === 200) {
          setListarProdutos(response.data.map(product => ({
            ...product,
            quantidade: 1 // Inicializa a quantidade como 1 para cada produto
          })));
        }
      } catch (error) {
        console.error('Erro ao listar produtos:', error);
      }
    };

    listarProduto();
  }, [tipo]);

  // Função para lidar com a mudança na quantidade e atualizar o estado
  const handleQuantityChange = (index, event) => {
    const newQuantity = parseInt(event.target.value);
    setListarProdutos(prevProducts => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index].quantidade = newQuantity;
      return updatedProducts;
    });
  };

  return (
    <div className='div-container'>
      {listarprodutos.length > 0 && listarprodutos.map((product, index) => (
        <div className='div-card-produto' key={index}>
          <img className='product-image' src={`./img/${product.tipo}/${product.name}.png`} alt={product.name} />
          <h4>{product.nomeProduto}</h4>
          <p>{product.descricaoProduto}</p>
          <div className="quantity-container">
            <p className="price">R$ {product.valorProduto}</p>
            <label >Quantidade:</label>
            <input
              type="number"
              id={`quantity-${index}`}
              name={`quantity-${index}`}
              min="1"
              max={product.qtdEstoque}
              value={product.quantidade}
              onChange={(e) => handleQuantityChange(index, e)} // Passa o índice do produto
            />
          </div>
          <div className="div-card-price-cart">
            <p className="total-price">Valor Total: R$ {product.valorProduto * (product.quantidade || 1)}</p> {/* Calcula o valor total do produto */}
          </div>
          <div className="div-card-price-cart">
            <button className="button-add-to-cart">Adicionar ao carrinho</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;

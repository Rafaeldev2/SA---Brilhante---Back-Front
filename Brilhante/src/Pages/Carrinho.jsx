import React, { useContext, useEffect, useState } from 'react';
import { BrilhanteContext } from "../Context/GlobalContext";
import axios from 'axios';

function Carrinho() {
  const { cart, setCart, clienteExistente } = useContext(BrilhanteContext);
  const [produtosComprados, setProdutosComprados] = useState([]);

  useEffect(() => {
    // Carregar os produtos comprados do localStorage quando a página for carregada
    const produtosCompradosFromStorage = JSON.parse(localStorage.getItem('produtosComprados'));
    if (produtosCompradosFromStorage) {
      setProdutosComprados(produtosCompradosFromStorage);
    }
  }, []);

  const handleQuantityChange = (index, event) => {
    const newQuantity = parseInt(event.target.value);
    setCart(prevCart => {
      const updatedCart = [...prevCart];
      updatedCart[index].quantidade = newQuantity;
      return updatedCart;
    });
  };

  const handleCheckout = async () => {
    try {
      await Promise.all(cart.map(async (product) => {
        const updatedProduct = {
          ...product,
          qtdEstoque: product.qtdEstoque - product.quantidade // Supondo que qtdEstoque seja o estoque inicial
        };
        await axios.put('http://localhost:8010/brilhante/produto', updatedProduct);
      }));

      setProdutosComprados(cart); // Move os produtos comprados para o estado de produtos comprados
      localStorage.setItem('produtosComprados', JSON.stringify(cart)); // Salva os produtos comprados no localStorage

      setCart([]); // Limpar o carrinho após finalizar a compra
      localStorage.removeItem('cart'); // Remover o carrinho do localStorage
    } catch (error) {
      console.error('Erro ao finalizar a compra:', error);
      alert('Erro ao finalizar a compra. Tente novamente.');
    }
  };

  if (!clienteExistente) {
    return <div>Por favor, faça login para acessar o carrinho.</div>;
  }

  return (
    <div className='carrinho-container'>
      <h1>Cart Page</h1>
      <div className='products-container'>
        {cart.map((product, index) => (
          <div className='product-card' key={index}>
            <h4>{product.nomeProduto}</h4>
            <p>{product.descricaoProduto}</p>
            <div className="quantity-container">
              <p className="product-price">R$ {product.valorProduto}</p>
              <label htmlFor={`quantity-${product.IDProduto}`}>Quantidade:</label>
              <input
                type="number"
                id={`quantity-${product.IDProduto}`}
                name={`quantity-${product.IDProduto}`}
                min="1"
                value={product.quantidade}
                onChange={(e) => handleQuantityChange(index, e)}
              />
            </div>
            <div className="price-cart-container">
              <p className="total-price">Valor Total: R$ {product.valorProduto * (product.quantidade || 1)}</p>
            </div>
            <button className='remove-from-cart-button'>Remover do Carrinho</button>
          </div>
        ))}
      </div>
      <div className='div-checkout-button'>
        <button className="checkout-button" onClick={handleCheckout}>Finalizar Compra</button>
      </div>
      {produtosComprados.length > 0 && (
        <div>
          <h2>Produtos Comprados:</h2>
          <div className='products-container'>
            {produtosComprados.map((product, index) => (
              <div className='product-card' key={index}>
                <h4>{product.nomeProduto}</h4>
                <p>{product.descricaoProduto}</p>
                <p>Quantidade: {product.quantidade}</p>
                <p>Valor Total: R$ {product.valorProduto * product.quantidade}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrinho;

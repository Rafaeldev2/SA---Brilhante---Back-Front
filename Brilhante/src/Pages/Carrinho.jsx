import React, { useContext, useEffect, useState } from 'react';
import { BrilhanteContext } from "../Context/GlobalContext";
import axios from 'axios';

function Carrinho() {
  // Extrair dados do contexto
  const { cart, setCart, clienteExistente, cliente, setCliente } = useContext(BrilhanteContext);
  // Estado local para armazenar produtos comprados
  const [produtosComprados, setProdutosComprados] = useState([]);
  // Estado local para controlar se a venda já foi criada
  const [vendaCriada, setVendaCriada] = useState(false);

  // Carregar produtos comprados do armazenamento local ao montar o componente
  useEffect(() => {
    const produtosCompradosFromStorage = JSON.parse(localStorage.getItem('produtosComprados'));
    if (produtosCompradosFromStorage) {
      setProdutosComprados(produtosCompradosFromStorage);
    }
  }, []);

  // Atualizar a quantidade de um produto no carrinho
  const handleQuantityChange = (index, event) => {
    const newQuantity = parseInt(event.target.value);
    setCart(prevCart => {
      const updatedCart = [...prevCart];
      updatedCart[index].quantidade = newQuantity;
      return updatedCart;
    });
  };

  // Remover um produto do carrinho e do localStorage
  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1); // Remove o produto do carrinho
    setCart(updatedCart); // Atualiza o estado do carrinho

    // Atualiza o localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Verificar se o cliente está autenticado
  if (!clienteExistente) {
    return <div>Por favor, faça login para acessar o carrinho.</div>;
  }

  // Renderizar o componente
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
              <label htmlFor={`quantity-${product.idProduto}`}>Quantidade:</label>
              <input
                type="number"
                id={`quantity-${product.idProduto}`}
                name={`quantity-${product.idProduto}`}
                min="1"
                value={product.quantidade}
                onChange={(e) => handleQuantityChange(index, e)}
              />
            </div>
            <div className="price-cart-container">
              <p className="total-price">Valor Total: R$ {product.valorProduto * (product.quantidade || 1)}</p>
            </div>
            <button className='remove-from-cart-button' onClick={() => handleRemoveFromCart(index)}>Remover do Carrinho</button>
          </div>
        ))}
      </div>
      <div className='div-checkout-button'>
        <button className="checkout-button" >Finalizar Compra</button>
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

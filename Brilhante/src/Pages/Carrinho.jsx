import React, { useContext, useEffect, useState } from 'react';
import { BrilhanteContext } from "../Context/GlobalContext";
import axios from 'axios';

function Carrinho() {
  // Extrair dados do contexto
  const { cart, setCart, clienteExistente, cliente } = useContext(BrilhanteContext);
  // Estado local para armazenar produtos comprados
  const [produtosComprados, setProdutosComprados] = useState([]);

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

  // Finalizar a compra
  const handleCheckout = async () => {
    try {
      // Construir objeto de venda
      const venda = {
        //status: 1, // Defina um status apropriado para novas vendas
        vendasProduto: cart.map(product => ({
          idproduto: product.idproduto,
          qtdproduto: product.quantidade,
          valorProduto: product.valorProduto,
          status: 1
        })),
        cliente: cliente // Supondo que cliente é o objeto cliente autenticado
      };

      // Enviar requisição para finalizar a compra
      const response = await axios.post(`http://localhost:8010/brilhante/venda/${cliente.idClient}`, venda);
      
      // Atualizar produtos comprados no estado local e armazenamento local
      setProdutosComprados(cart);
      localStorage.setItem('produtosComprados', JSON.stringify(cart));
      
      // Limpar carrinho
      setCart([]);
      localStorage.removeItem('cart');
    } catch (error) {
      console.error('Erro ao finalizar a compra:', error);
      alert('Erro ao finalizar a compra. Tente novamente.');
    }
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

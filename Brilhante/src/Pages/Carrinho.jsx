import React, { useContext, useState } from 'react';
import { BrilhanteContext } from "../Context/GlobalContext"

function Carrinho() {
  const { handleQuantityChange } = useContext(BrilhanteContext);
  const [cart, setCart] = useState([]);
  
  // Supondo que products seja a lista de produtos disponíveis
  const products = [
    // Lista de produtos
  ];

  return (
    <>
      <div className='carrinho-container'>
        {products.map((product, index) => (
          <div className='product-card' key={index}>
            {/* <img className='product-image' src={`./img/${product.tipo}/${product.name}.png`} alt={product.name} /> */}
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
                value={product.qtdEstoque}
                onChange={(e) => handleQuantityChange(index, e)}
              />
            </div>
            <div className="price-cart-container">
              <p className="total-price">Valor Total: R$ {(product.valorProduto * product.qtdEstoque)}</p>
            </div>
            <div className="price-cart-container">
              <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>Adicionar ao carrinho</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Carrinho;

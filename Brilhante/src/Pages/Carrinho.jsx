import React, { useContext } from 'react';
import { BrilhanteContext } from "../Context/GlobalContext";

function Carrinho() {
  const { cart, setCart } = useContext(BrilhanteContext);

  const handleQuantityChange = (index, event) => {
    const newQuantity = parseInt(event.target.value);
    setCart(prevCart => {
      const updatedCart = [...prevCart];
      updatedCart[index].quantidade = newQuantity;
      return updatedCart;
    });
  };

  return (
    <div className='carrinho-container'>
      <h1>Cart Page</h1>
      <div className='products-container'>
        {cart.map((product, index) => (
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
                value={product.quantidade}
                onChange={(e) => handleQuantityChange(index, e)}
              />
            </div>
            <div className="price-cart-container">
              <p className="total-price">Valor Total: R$ {product.valorProduto * (product.quantidade || 1)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='div-checkout-button'>
        <button className="checkout-button">Finalizar Compra</button>
      </div>
    </div>
  );
}

export default Carrinho;

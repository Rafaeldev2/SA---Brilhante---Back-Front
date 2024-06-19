import React, { useContext, useEffect, useState } from 'react';
import { BrilhanteContext } from '../Context/GlobalContext';
import axios from 'axios';


function ProductCards() {

  // const [listarprodutosPorTipo, setListarProdutosPorTipo] = useState([]);
  const [listarprodutos, setListarProdutos] = useState([]);
  const {produtosHomePage} = useState ()
  const { products, handleQuantityChange } = useContext(BrilhanteContext);

  // const timeout = (duration) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(resolve, duration)
  //   })
  // }

  // timeout(2000)
  // .then(function() { // executa o bloco após 2 segundos
  //   console.log("executa o bloco após 2 segundos");
  // });

  const listarProduto = async () => {
    try {
      const response = await axios.get(`http://localhost:8010/brilhante/produto`);
      if (response.status === 200) {
        setListarProdutos(response.data);
      }
    } catch (error) {
      console.error('Erro ao listar produtos por tipo:', error);
      setError('Erro ao listar produtos por tipo. Por favor, tente novamente.');
    }
  };

  // const listarProdutoPorTipo = async (tipo) => {
  //   try {
  //     const response = await axios.get(`http://localhost:8010/brilhante/produto/produtotipo/${tipo}`);
  //     if (response.status === 200) {
  //       setListarProdutosPorTipo(response.data);
  //     }
  //   } catch (error) {
  //     console.error('Erro ao listar produtos por tipo:', error);
  //     setError('Erro ao listar produtos por tipo. Por favor, tente novamente.');
  //   }
  // };
  
  useEffect(() =>{
    listarProduto()
  },[]);

  useEffect(() =>{
    console.log(listarprodutos);
  },[listarprodutos]);

  return (
    <div className='div-container'>
      {!!listarprodutos && listarprodutos.map((product, index) => (
        <div className='div-card-produto' key={index}>
          {/* <img className='img-card' src={`./img/${product.tipo}/${product.name}.png`} alt={product.name} /> */}
          
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <div className="quantity-container">
            <p className="price">R$ {product.price/*.toFixed(2)*/}</p>
            <label htmlFor={`quantity-${product.id}`}>Quantidade:</label>
            <input
              type="number"
              id={`quantity-${product.id}`}
              name={`quantity-${product.id}`}
              min="1"
              value={product.quantity}
              onChange={(e) => handleQuantityChange(index, e)}
            />
          </div>
          <div className="div-card-price-cart">
            <p className="total-price">Valor Total: R$ {(product.price * product.quantity)/*.toFixed(2)*/}</p>
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
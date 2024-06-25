import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { BrilhanteContext } from '../Context/GlobalContext';

function ProductCards({ tipo }) {
  // Usando contexto para acessar a função addToCart
  const { addToCart } = useContext(BrilhanteContext);
  // Estado para armazenar a lista de produtos
  const [listarprodutos, setListarProdutos] = useState([]);
  // Estado para rastrear se uma venda foi criada
  const [vendaCriada, setVendaCriada] = useState(false);

  // Buscando produtos com base no tipo ao montar o componente ou quando o tipo muda
  useEffect(() => {
    const listarProduto = async () => {
      try {
        let url = 'http://localhost:8010/brilhante/produto';
        if (tipo) {
          url = `http://localhost:8010/brilhante/produto/produtotipo/${tipo}`;
        }
        // Buscando dados da API
        const response = await axios.get(url);
        // Se a resposta for bem-sucedida, atualiza o estado da lista de produtos
        if (response.status === 200) {
          setListarProdutos(response.data.map(product => ({
            ...product,
            quantidade: 1 // Adicionando propriedade de quantidade a cada produto
          })));
        }
      } catch (error) {
        console.error('Erro ao listar produtos:', error);
      }
    };

    listarProduto();
  }, [tipo]);

  // Função para lidar com a mudança de quantidade de um produto
  const handleQuantityChange = (index, event) => {
    const newQuantity = parseInt(event.target.value);
    // Atualizando a quantidade do produto na lista
    setListarProdutos(prevProducts => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index].quantidade = newQuantity;
      return updatedProducts;
    });
  };

  // Função para lidar com a adição de um produto ao carrinho
  const handleAddToCart = (product) => {
    // Chamando a função addToCart do contexto
    addToCart(product);
    // Se a venda ainda não foi criada, cria-a
    if (!vendaCriada) {
      criarVenda();
    }
  };

  // Função para criar uma venda
  const criarVenda = async () => {
    try {
      const cart = []; // Supondo que o carrinho já esteja populado em algum lugar
      const cliente = { idCliente: cliente.idCliente }; // Dados fictícios do cliente

      // Criando promessas para cada produto no carrinho
      const vendasPromises = cart.map(async (product) => {
        const vendaProduto = {
          idProduto: product.idProduto,
          qtdProduto: product.quantidade,
          valorProduto: product.valorProduto
        };
        // Enviando solicitação para criar VendasProduto para cada produto
        const response = await axios.post(`http://localhost:8010/brilhante/vendasproduto/${venda.idVendas}/${cliente.idCliente}`, vendaProduto);
        return response.data;
      });

      // Aguardando a conclusão de todas as solicitações de criação de VendasProduto
      const vendasProdutos = await Promise.all(vendasPromises);

      // Construindo objeto de VendasProduto
      const venda = {
        vendasProduto: vendasProdutos
      };

      // Enviando solicitação para criar venda geral
      const response = await axios.post(`http://localhost:8010/brilhante/venda/${cliente.idCliente}`, venda);

      // Atualizando dados do cliente com a nova venda
      setCliente(prevCliente => ({
        ...prevCliente,
        vendas: [...prevCliente.vendas, response.data]
      }));

      // Supondo que essas funções estejam definidas em algum lugar
      setProdutosComprados(cart);
      localStorage.setItem('produtosComprados', JSON.stringify(cart));

      setCart([]);
      localStorage.removeItem('cart');

      // Definindo o estado vendaCriada como true para evitar a criação de várias vendas
      setVendaCriada(true);
    } catch (error) {
      console.error('Erro ao finalizar a compra:', error);
    }
  };

  // Renderizando cartões de produtos
  return (
    <div className='div-container'>
      {listarprodutos.length > 0 && listarprodutos.map((product, index) => (
        <div className='div-card-produto' key={index}>
          <img className='product-image' src="https://i.imgur.com/hgt1w0P.png" alt={product.name} />
          <h4>{product.nomeProduto}</h4>
          <p>{product.descricaoProduto}</p>
          <div className="quantity-container">
            <p className="price">R$ {product.valorProduto}</p>
            <label>Quantidade:</label>
            <input
              type="number"
              id={`quantity-${index}`}
              name={`quantity-${index}`}
              min="1"
              max={product.qtdEstoque}
              value={product.quantidade}
              onChange={(e) => handleQuantityChange(index, e)}
            />
          </div>
          <div className="div-card-price-cart">
            <p className="total-price">Valor Total: R$ {product.valorProduto * (product.quantidade || 1)}</p>
          </div>
          <div className="div-card-price-cart">
            <button className="button-add-to-cart" onClick={() => handleAddToCart(product)}>Adicionar ao carrinho</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;

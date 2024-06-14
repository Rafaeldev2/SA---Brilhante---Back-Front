import React, { useContext, useState, useEffect } from 'react';
import './GerenciaProdutos.css';
import { BrilhanteContext } from '../Context/GlobalContext.jsx';
import { NumericFormat } from 'react-number-format';
import axios from 'axios';

function GerenciaProdutos() {
  const { produtos, setProdutos } = useContext(BrilhanteContext);
  const [currentProductId, setCurrentProductId] = useState(null);
  const [newProduto, setNewProduto] = useState({ IDProduto: '', nomeProduto: '', produtoTipo: '', qtdEstoque: '', valorProduto: '', codigoDeBarra: '' });
  const [newDescricaoProduto, setNewDescricaoProduto] = useState('');
  const [error, setError] = useState('');

  const handleProductChange = (field, value) => {
    setNewProduto({ ...newProduto, [field]: value });
  };

  const cadastrarProduto = async () => {
    if (newProduto.nomeProduto.trim() !== '' && newProduto.produtoTipo && newProduto.valorProduto && newDescricaoProduto.trim() !== '' && newProduto.codigoDeBarra.trim() !== '') {
      const novoProduto = {
        nomeProduto: newProduto.nomeProduto.trim(),
        produtoTipo: newProduto.produtoTipo,
        qtdEstoque: newProduto.qtdEstoque,
        descricaoProduto: newDescricaoProduto.trim(),
        valorProduto: newProduto.valorProduto,
        codigoDeBarra: newProduto.codigoDeBarra.trim()
      };

      try {
        const response = await axios.post('http://localhost:8010/brilhante/produto', novoProduto);
        if (response.status === 201) { // Supondo que 201 seja o código de status de sucesso para criação de produto
          setProdutos([...produtos, response.data]);
          setNewProduto({ IDProduto: '', nomeProduto: '', produtoTipo: '', qtdEstoque: '', valorProduto: '', codigoDeBarra: '' });
          setNewDescricaoProduto('');
          setCurrentProductId(null);
          setError('');
        }
      } catch (error) {
        console.error('Erro ao cadastrar produto:', error);
        setError('Erro ao cadastrar produto. Por favor, tente novamente.');
      }
    } else {
      setError('Preencha todos os campos antes de cadastrar o produto.');
    }
  };

  const atualizarProduto = async () => {
    if (newProduto.nomeProduto.trim() !== '' && newProduto.produtoTipo && newProduto.valorProduto && newDescricaoProduto.trim() !== '' && newProduto.codigoDeBarra.trim() !== '') {
      const produtoAtualizado = {
        IDProduto: newProduto.IDProduto,
        nomeProduto: newProduto.nomeProduto.trim(),
        produtoTipo: newProduto.produtoTipo,
        qtdEstoque: newProduto.qtdEstoque,
        descricaoProduto: newDescricaoProduto.trim(),
        valorProduto: newProduto.valorProduto,
        codigoDeBarra: newProduto.codigoDeBarra.trim()
      };

      try {
        const response = await axios.put('http://localhost:8010/brilhante/produto', produtoAtualizado);
        if (response.status === 200) { // Supondo que 200 seja o código de status de sucesso para atualização de produto
          setProdutos(produtos.map(produto => (produto.IDProduto === newProduto.IDProduto ? response.data : produto)));
          setNewProduto({ IDProduto: '', nomeProduto: '', produtoTipo: '', qtdEstoque: '', valorProduto: '', codigoDeBarra: '' });
          setNewDescricaoProduto('');
          setCurrentProductId(null);
          setError('');
        }
      } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        setError('Erro ao atualizar produto. Por favor, tente novamente.');
      }
    } else {
      setError('Preencha todos os campos antes de atualizar o produto.');
    }
  };

  const excluirProduto = async () => {
    try {
      const response = await axios.delete(`http://localhost:8010/brilhante/produto/{id}`);
      if (response.status === 204) { // Supondo que 204 seja o código de status de sucesso para exclusão de produto
        setProdutos(produtos.filter(produto => produto.IDProduto !== newProduto.IDProduto));
        setNewProduto({ IDProduto: '', nomeProduto: '', produtoTipo: '', qtdEstoque: '', valorProduto: '', codigoDeBarra: '' });
        setNewDescricaoProduto('');
        setCurrentProductId(null);
        setError('');
      }
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
      setError('Erro ao excluir produto. Por favor, tente novamente.');
    }
  };

  const consultarCodigoBarras = async () => {
    try {
      const response = await axios.get(`http://localhost:8010/brilhante/produto/cb/${newProduto.codigoDeBarra}`);
      if (response.status === 200) {
        const produto = response.data;
        setNewProduto({
          IDProduto: produto.IDProduto,
          nomeProduto: produto.nomeProduto,
          produtoTipo: produto.produtoTipo,
          qtdEstoque: produto.qtdEstoque,
          valorProduto: produto.valorProduto,
          codigoDeBarra: produto.codigoDeBarra,
        });
        setNewDescricaoProduto(produto.descricaoProduto);
        setCurrentProductId(produto.IDProduto);
        setError('');
      }
    } catch (error) {
      console.error('Erro ao consultar código de barras:', error);
      setError('Erro ao consultar código de barras. Por favor, tente novamente.');
    }
  };

  useEffect(() => {
    if (currentProductId) {
      const produto = produtos.find(p => p.IDProduto === currentProductId);
      if (produto) {
        setNewProduto({
          IDProduto: produto.IDProduto,
          nomeProduto: produto.nomeProduto,
          produtoTipo: produto.produtoTipo,
          qtdEstoque: produto.qtdEstoque,
          valorProduto: produto.valorProduto,
          codigoDeBarra: produto.codigoDeBarra,
        });
        setNewDescricaoProduto(produto.descricaoProduto);
      }
    }
  }, [currentProductId]);

  return (
    <div className="gerencia-produtos">
      <div>
        <h1>Gerenciar Produtos</h1>
        {error && <div className="error-message">{error}</div>}
        <div className="input-group">
          <label htmlFor="codigoDeBarra">Código de Barras:</label>
          <input
            id="codigoDeBarra"
            type="text"
            placeholder="Digite o código de barras"
            value={newProduto.codigoDeBarra}
            onChange={(e) => handleProductChange('codigoDeBarra', e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="nomeProduto">Nome do Produto:</label>
          <input
            id="nomeProduto"
            type="text"
            placeholder="Digite o nome do Produto"
            value={newProduto.nomeProduto}
            onChange={(e) => handleProductChange('nomeProduto', e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="qtdEstoque">Quantidade do Produto:</label>
          <input
            id="qtdEstoque"
            type="number"
            placeholder="Quantidade do Produto"
            value={newProduto.qtdEstoque}
            onChange={(e) => handleProductChange('qtdEstoque', parseInt(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label htmlFor="valorProduto">Valor:</label>
          <NumericFormat
            thousandSeparator="."
            decimalSeparator=","
            prefix="R$ "
            placeholder="Valor"
            value={newProduto.valorProduto}
            onValueChange={(values) => handleProductChange('valorProduto', values.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="descricaoProduto">Descrição:</label>
          <textarea
            id="descricaoProduto"
            className="descricao-produto"
            rows={5}
            placeholder="Descrição do Produto"
            value={newDescricaoProduto}
            onChange={(e) => setNewDescricaoProduto(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="produtoTipo">Tipo do Produto:</label>
          <select
            id="produtoTipo"
            value={newProduto.produtoTipo}
            onChange={(e) => handleProductChange('produtoTipo', e.target.value)}
          >
            <option value="">Selecione o tipo de produto</option>
            <option value="1">Anel</option>
            <option value="2">Brinco</option>
            <option value="3">Colar</option>
            <option value="4">Conjunto</option>
            <option value="5">Pulseira</option>
          </select>
        </div>
        <div className="button-group">
          <button onClick={cadastrarProduto}>Cadastrar Produto</button>
          <button onClick={atualizarProduto}>Atualizar Produto</button>
          <button onClick={excluirProduto}>Excluir Produto</button>
          <button onClick={consultarCodigoBarras}>Consultar Código de Barras</button>
        </div>
      </div>
    </div>
  );
}

export default GerenciaProdutos;

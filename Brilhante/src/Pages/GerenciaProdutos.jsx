import React, { useContext, useState, useEffect } from 'react';
import './GerenciaProdutos.css';
import { NumericFormat } from 'react-number-format';
import axios from 'axios';

function GerenciaProdutos() {
  const [currentProductId, setCurrentProductId] = useState(null);
  const [error, setError] = useState('');
  const [newProduto, setNewProduto] = useState({
    idproduto: '',
    nomeProduto: '',
    produtoTipo: '',
    qtdEstoque: '',
    valorProduto: '',
    codigoDeBarra: '',
    descricaoProduto: ''
  });

  const handleProductChange = (field, value) => {
    setNewProduto({ ...newProduto, [field]: value });
  };

  const cadastrarProduto = async () => {
    if (newProduto.nomeProduto.trim() !== '' &&
      newProduto.produtoTipo &&
      newProduto.valorProduto &&
      newProduto.descricaoProduto.trim() !== '' &&
      newProduto.codigoDeBarra !== '') {

      const novoProduto = {
        nomeProduto: newProduto.nomeProduto.trim(),
        produtoTipo: newProduto.produtoTipo,
        qtdEstoque: newProduto.qtdEstoque,
        descricaoProduto: newProduto.descricaoProduto.trim(),
        valorProduto: newProduto.valorProduto,
        codigoDeBarra: newProduto.codigoDeBarra
      };

      try {
        const response = await axios.post('http://localhost:8010/brilhante/produto', novoProduto);
        if (response.status === 201) { // Supondo que 201 seja o código de status de sucesso para criação de produto

          setNewProduto({
            idproduto: '',
            nomeProduto: '',
            produtoTipo: '',
            qtdEstoque: '',
            valorProduto: '',
            codigoDeBarra: '',
            descricaoProduto: ''
          });
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
    if (
      newProduto.nomeProduto.trim() !== '' &&
      newProduto.produtoTipo &&
      newProduto.valorProduto &&
      newProduto.descricaoProduto.trim() !== '' &&
      newProduto.codigoDeBarra !== '') {

      const produtoParaAtualizar = {
        idproduto: newProduto.idproduto,
        nomeProduto: newProduto.nomeProduto.trim(),
        produtoTipo: newProduto.produtoTipo,
        qtdEstoque: newProduto.qtdEstoque,
        descricaoProduto: newProduto.descricaoProduto.trim(),
        valorProduto: newProduto.valorProduto,
        codigoDeBarra: newProduto.codigoDeBarra
      };

      try {
        const response = await axios.put('http://localhost:8010/brilhante/produto', produtoParaAtualizar);
        if (response.status === 200) {
          setNewProduto({ idproduto: '', nomeProduto: '', produtoTipo: '', qtdEstoque: '', valorProduto: '', codigoDeBarra: '', descricaoProduto: '' });
          setCurrentProductId(response.data.idproduto);
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
      const response = await axios.delete(`http://localhost:8010/brilhante/produto/${newProduto.idproduto}`);
      if (response.status === 204) { // Supondo que 204 seja o código de status de sucesso para exclusão de produto
        setNewProduto({ idproduto: '', nomeProduto: '', produtoTipo: '', qtdEstoque: '', valorProduto: '', codigoDeBarra: '', descricaoProduto: '' });
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
          idproduto: produto.idproduto,
          nomeProduto: produto.nomeProduto,
          produtoTipo: produto.produtoTipo,
          qtdEstoque: produto.qtdEstoque,
          valorProduto: produto.valorProduto,
          codigoDeBarra: produto.codigoDeBarra,
          descricaoProduto: produto.descricaoProduto,
        });
        setError('');
      }
    } catch (error) {
      console.error('Erro ao consultar código de barras:', error);
      setError('Erro ao consultar código de barras. Por favor, tente novamente.');
    }
  };

  useEffect(() => {
    if (currentProductId) {
      const produto = produto.find(p => p.idproduto === currentProductId);
      if (produto) {
        setNewProduto({
          idproduto: produto.idproduto,
          nomeProduto: produto.nomeProduto,
          produtoTipo: produto.produtoTipo,
          qtdEstoque: produto.qtdEstoque,
          valorProduto: produto.valorProduto,
          codigoDeBarra: produto.codigoDeBarra,
          descricaoProduto: produto.descricaoProduto,
        });
      }
    }
  }, [currentProductId]);

  return (
    <div className="gerencia-produtos">
      <div>
        <h1>Gerenciar Produtos</h1>
        {error && <div className="error-message">{error}</div>}
        <div className="input-group">
          <input
            id="idproduto"
            type="number"
            placeholder="idproduto"
            value={newProduto.idproduto}
            disabled
            onChange={(e) => handleProductChange('idproduto', e.target.value)}
          />
        </div>
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
          <input
            id="descricaoProduto"
            className="descricao-produto"
            placeholder="Descrição do Produto"
            value={newProduto.descricaoProduto}
            onChange={(e) => handleProductChange('descricaoProduto', e.target.value)}
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

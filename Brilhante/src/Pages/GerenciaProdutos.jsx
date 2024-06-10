import React, { useContext, useState } from 'react';
import './GerenciaProdutos.css';
import { BrilhanteContext } from '../Context/GlobalContext.jsx';
import { NumericFormat } from 'react-number-format';
import axios from 'axios';

function GerenciaProdutos() {
  const { produtos, setProdutos } = useContext(BrilhanteContext);
  const [newProdutoNome, setNewProdutoNome] = useState('');
  const [newProduto, setNewProduto] = useState({ tipo: '', quantidade: '', valor: '' });
  const [newDescricaoProduto, setNewDescricaoProduto] = useState('');
  const [error, setError] = useState('');

  const handleProductChange = (field, value) => {
    setNewProduto({ ...newProduto, [field]: value });
  };

  const adicionarProduto = async () => {
    if (newProdutoNome.trim() !== '' && newProduto.tipo && newProduto.valor && newDescricaoProduto.trim() !== '') {
      const novoProduto = {
        nome: newProdutoNome.trim(),
        tipo: newProduto.tipo,
        quantidade: newProduto.quantidade,
        descricaoProduto: newDescricaoProduto.trim(),
        valor: newProduto.valor
      };

      try {
        const response = await axios.post('http://localhost:3306/brilhante/produto', novoProduto);
        if (response.status === 201) { // Supondo que 201 seja o código de status de sucesso para criação de produto
          setProdutos([...produtos, response.data]);
          setNewProdutoNome('');
          setNewProduto.tipo('');
          setNewProduto.quantidade('');
          setNewProduto.valor('');
          setNewDescricaoProduto('');
          setError('');
        }
      } catch (error) {
        console.error('Erro ao adicionar produto:', error);
        setError('Erro ao adicionar produto. Por favor, tente novamente.');
      }
    } else {
      setError('Preencha todos os campos antes de adicionar o produto.');
    }
  };

  return (
    <div className="gerencia-produtos">
      <div>
        <h1>Cadastro de Produtos</h1>
        {error && <div className="error-message">{error}</div>}
        <div className="input-group">
          <label htmlFor="nomeProduto">Nome do Produto:</label>
          <input
            id="nomeProduto"
            type="text"
            placeholder="Digite o nome do Produto"
            value={newProdutoNome}
            onChange={(e) => setNewProdutoNome(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="quantidadeProduto">Quantidade do Produto:</label>
          <input
            id="quantidadeProduto"
            type="number"
            placeholder="Quantidade do Produto"
            value={newProduto.quantidade}
            onChange={(e) => handleProductChange('quantidade', parseInt(e.target.value))}
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
          <label htmlFor="valor">Valor:</label>
          <NumericFormat
            thousandSeparator="."
            decimalSeparator=","
            prefix="R$ "
            placeholder="Valor"
            value={newProduto.valor}
            onValueChange={(values) => handleProductChange('valor', values.value)}
            isNumericString
          />
        </div>
        <div className="input-group">
          <label htmlFor="tipoProduto">Tipo do Produto:</label>
          <select
            id="tipoProduto"
            value={newProduto.tipo}
            onChange={(e) => handleProductChange('tipo', e.target.value)}
          >
            <option value="">Selecione o tipo de produto</option>
            <option value="Anel">Anel</option>
            <option value="Brinco">Brinco</option>
            <option value="Colar">Colar</option>
            <option value="Conjunto">Conjunto</option>
            <option value="Pulseira">Pulseira</option>
          </select>
        </div>
        <div className="button-group">
          <button onClick={adicionarProduto}>Adicionar Produto Completo</button>
        </div>
      </div>
    </div>
  );
}

export default GerenciaProdutos;

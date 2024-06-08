import React, { useContext, useState } from 'react';
import './GerenciaProdutos.css';
import { BrilhanteContext } from '../Context/GlobalContext.jsx';
import { NumericFormat } from 'react-number-format';

function GerenciaProdutos() {
  const { produtos, setProdutos } = useContext(BrilhanteContext);
  const [newProdutoTitulo, setNewProdutoTitulo] = useState('');
  const [newProduto, setNewProduto] = useState({ tipo: '', quantidade: '', valor: '' });
  const [newDescricaoProduto, setNewDescricaoProduto] = useState('');
  const [quantidadeProduto, setQuantidadeProduto] = useState(1);

  const handleProductChange = (field, value) => {
    setNewProduto({ ...newProduto, [field]: value });
  };

  const adicionarProduto = () => {
    if (newProdutoTitulo.trim() !== '') {
      const novoProduto = {
        nome: newProdutoTitulo.trim(),
        tipo: newProduto.tipo,
        quantidade: quantidadeProduto,
        descricaoProduto: newDescricaoProduto.trim(),
        valor: newProduto.valor
      };
      setProdutos([...produtos, novoProduto]);
      setNewProdutoTitulo('');
      setNewProduto({ tipo: '', quantidade: '', valor: '' });
      setNewDescricaoProduto('');
      setQuantidadeProduto(1);
    }
  };

  return (
    <div className="gerencia-produtos">
      <div>
        <h1>Cadastro de Produtos</h1>
        <div className="input-group">
          <label htmlFor="nomeProduto">Nome do Produto:</label>
          <input
            id="nomeProduto"
            type="text"
            placeholder="Digite o nome do Produto"
            value={newProdutoTitulo}
            onChange={(e) => setNewProdutoTitulo(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="quantidadeProduto">Quantidade do Produto:</label>
          <input
            id="quantidadeProduto"
            type="number"
            placeholder="Quantidade do Produto"
            value={quantidadeProduto}
            onChange={(e) => setQuantidadeProduto(parseInt(e.target.value))}
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

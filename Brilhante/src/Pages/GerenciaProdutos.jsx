import React, { useContext, useState } from 'react';
import './GerenciaProdutos.css';
import { BrilhanteContext } from '../Context/GlobalContext.jsx';
import { NumericFormat } from 'react-number-format';
function GerenciaProdutos() {
  const { produtos, setProdutos } = useContext(BrilhanteContext);
  const [newProdutoTitulo, setNewProdutoTitulo] = useState('');
  const [newUnidadeProdutos, setNewUnidadeProdutos] = useState([{ nome: '', quantidade: '', valor: '' }]);
  const [newDescriçãoProduto, setNewDescriçãoProduto] = useState('');
  const [quantidadeProduto, setQuantidadeProduto] = useState(1);

  const handleProductChange = (index, field, value) => {
    const atualizarProdutos = [...newUnidadeProdutos];
    atualizarProdutos[index][field] = value;
    setNewUnidadeProdutos(atualizarProdutos);
  };

  const addProductField = () => {
    setNewUnidadeProdutos([...newUnidadeProdutos, { nome: '', quantidade: '', valor: '' }]);
  };

  const adicionarProdutos = () => {
    if (newProdutoTitulo.trim() !== '') {
      const newProduto = {
        nome: newProdutoTitulo.trim(),
        quantidade: quantidadeProduto,
        descriçãoProduto: newDescriçãoProduto.trim(),
        unidades: newUnidadeProdutos
      };

      setProdutos([...produtos, newProduto]);
      setNewProdutoTitulo('');
      setNewUnidadeProdutos([{ nome: '', quantidade: '', valor: '' }]);
      setNewDescriçãoProduto('');
      setQuantidadeProduto(1);
    }
  };

  return (
    <>
      <div className="add-produto">
        <h1>Cadastro de Produtos</h1>

        <div className="produto-nome">
          <div className="produto_2">
            <label htmlFor="nomeProduto">Nome do Produto: </label>
            <input
              className='nomeProduto'
              type="text"
              placeholder="Digite o nome do Produto "
              value={newProdutoTitulo}
              onChange={(e) => setNewProdutoTitulo(e.target.value)}
            />
          </div>
          
          <div className="quantidadeProduto">
            <label htmlFor="quantidade_Produto">Quantidade do Produto: </label>
            <input
              className='quantidade_Produto'
              type="number"
              placeholder="Quantidade do Produto: "
              value={quantidadeProduto}
              onChange={(e) => setQuantidadeProduto(parseInt(e.target.value))}
            />
          </div>
        </div>

        <textarea
          className='DescricaoProduto'
          rows={5}
          placeholder="Descrição do Produto: "
          value={newDescriçãoProduto}
          onChange={(e) => setNewDescriçãoProduto(e.target.value)}
        />
        
        <div>
          <h4>Descrição:</h4>
          {newUnidadeProdutos.map((produto, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Nome do Produto"
                value={produto.nome}
                onChange={(e) => handleProductChange(index, 'nome', e.target.value)}
              />
              <input
                type="number"
                placeholder="Quantidade"
                value={produto.quantidade}
                onChange={(e) => handleProductChange(index, 'quantidade', e.target.value)}
              />
              <NumericFormat
                thousandSeparator="."
                decimalSeparator=","
                prefix="R$ "
                className='valorProduto'
                placeholder="Valor"
                value={produto.valor}
                onValueChange={(values) => handleProductChange(index, 'valor', values.value)}
                isNumericString
              />
            </div>
          ))}
          <button onClick={addProductField}>Adicionar Produto no Campo</button>
          <button onClick={adicionarProdutos}>Adicionar Produto Completo</button>
        </div>
      </div>
    </>
  );
}

export default GerenciaProdutos;
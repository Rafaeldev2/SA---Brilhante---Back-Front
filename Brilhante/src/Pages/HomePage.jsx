import React from 'react';
import './HomePage.css';

function App() {
  return (
    <div>
        <h1>Nossas Bijuterias</h1>
        <div className="product-grid">
          {/* Card do Produto 1 */}
          <div className="product-card">
            <img src="imagem-produto1.jpg" alt="Produto 1" />
            <h2>Produto 1</h2>
            <p>Descrição do produto 1</p>
            <p className="price">R$ 25,00</p>
            <button className="add-to-cart">
              <img src="icone-carrinho.png" alt="Adicionar ao Carrinho" />
            </button>
          </div>
          {/* Outros Cards de Produto... */}
        </div>
      <footer>
        {/* Conteúdo do Footer */}
      </footer>
    </div>
  );
}

export default App;

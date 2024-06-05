import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <>
      <div className='container'>
        <div className='div-card-produto'>
          <h1>Nossas Bijuterias</h1>
          <img className='img-card' src="./img/Aneis/Anel-com-firulas.png" />
          <h2>Nome do Produto</h2>
          <p>Descrição do produto</p>
          <div className="div-card-price-cart">
            <p className="price">R$ 25,00</p>
            <button className="cart-button" ><img src="./img/Cart.png" className="card-icon" />
            </button>
          </div>
        </div>
        <div className='div-card-produto'>
          <h1>Nossas Bijuterias</h1>
          <img className='img-card' src="./img/Brincos/Brico-de-uvas.png" />
          <h2>Nome do Produto</h2>
          <p>Descrição do produto</p>
          <div className="div-card-price-cart">
            <p className="price">R$ 25,00</p>
            <button className="cart-button" ><img src="./img/Cart.png" className="card-icon" />
            </button>
          </div>
        </div>
        <div className='div-card-produto'>
          <h1>Nossas Bijuterias</h1>
          <img className='img-card' src="./img/Colares/Colar-de-perolas.jpg" />
          <h2>Nome do Produto</h2>
          <p>Descrição do produto</p>
          <div className="div-card-price-cart">
            <p className="price">R$ 25,00</p>
            <button className="cart-button" ><img src="./img/Cart.png" className="card-icon" />
            </button>
          </div>
        </div>
        <div className='div-card-produto'>
          <h1>Nossas Bijuterias</h1>
          <img className='img-card' src="./img/Conjunto/Conjunto-de-colar-e-brincos-Persa.png" />
          <h2>Nome do Produto</h2>
          <p>Descrição do produto</p>
          <div className="div-card-price-cart">
            <p className="price">R$ 25,00</p>
            <button className="cart-button" ><img src="./img/Cart.png" className="card-icon" />
            </button>
          </div>
        </div>
        <div className='div-card-produto'>
          <h1>Nossas Bijuterias</h1>
          <img className='img-card' src="./img/Pulseiras/Misanga-arco-iris.jpg" />
          <h2>Nome do Produto</h2>
          <p>Descrição do produto</p>
          <div className="div-card-price-cart">
            <p className="price">R$ 25,00</p>
            <button className="cart-button" ><img src="./img/Cart.png" className="card-icon" />
            </button>
          </div>
        </div>
        <div className='div-card-produto'>
          <h1>Nossas Bijuterias</h1>
          <img className='img-card' src="./img/Aneis/Anel-dourado.png" />
          <h2>Nome do Produto</h2>
          <p>Descrição do produto</p>
          <div className="div-card-price-cart">
            <p className="price">R$ 25,00</p>
            <button className="cart-button" ><img src="./img/Cart.png" className="card-icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

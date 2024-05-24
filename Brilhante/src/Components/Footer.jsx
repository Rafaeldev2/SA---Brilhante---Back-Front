import React, { useState } from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-about-us">
                    <h4>Sobre Nós</h4>
                    <p>Bijuterias exclusivas e de alta qualidade para todos os estilos.</p>
                </div>
                <div className="footer-contact">
                    <h4>Contato</h4>
                    <p>Email: Brilhante@bijuterias.com</p>
                    <p>Telefone: (48) 9 1234-5678</p>
                </div>
                <div className="footer-icon">
                    <h4>Siga-nos</h4>
                    <div className="social-icons">
                        <img className='Icon' src="./img/insta.png" />
                        <img className='Icon' src="./img/twitter.png" />
                        <img className='Icon' src="./img/facebook.png" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Brilhante. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};


export default Footer;


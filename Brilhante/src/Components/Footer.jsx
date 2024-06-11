import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-container">
            <div className='footer-content'>
                <div className="footer-about-us">
                    <h4>Sobre Nós</h4>
                    <p>Bijuterias exclusivas e de alta qualidade para todos os estilos.</p>
                </div>
                <div className="footer-contact">
                    <h4>Contato</h4>
                    <p>Email: Brilhante@bijuterias.com</p>
                    <p>Telefone: (48) 9 1234-5678</p>
                </div>
                <div className="footer-Icon">
                    <h4>Siga-nos</h4>
                    <div className="Icons">
                        <img className='Icon' src="./img/insta.png" alt="Instagram" />
                        <img className='Icon' src="./img/twitter.png" alt="Twitter" />
                        <img className='Icon' src="./img/facebook.png" alt="Facebook" />
                    </div>
                </div>
            </div>
            <div className='footer-bottom-container'>
                <div className="footer-bottom">
                    <p>&copy; 2024 Brilhante. Todos os direitos reservados.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;

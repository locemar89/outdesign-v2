import React from 'react';

export default function Header() {
    return (
        <header>
            <div class="contact-top-bar">
                <p>
                    <span>Fale Conosco:</span>
                    <span>21 3491-5475</span><i> / </i>
                    <span>21 98120-0615</span><i> / </i>
                    <span>21 99622-5316</span>
                </p>
                <ul class="rede-social">
                    <li><a class="facebook" href="https://www.facebook.com/outdsg/" target="_blank"></a></li>
                    <li><a class="instagram" href="https://www.instagram.com/outdsg/" target="_blank"></a></li>
                </ul>
            </div>
            <div class="container">
                <h1>Out Design</h1>
                <div id="btnMenu" class="btn-abre-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul class="menu-a">
                    <li><a href="#">Início</a></li>
                    <li><a class="quem-somos" href="#QuemSomos">Quem Somos</a></li>
                    <li><a class="servicosMenu" href="#Servicos">Serviços</a></li>
                    <li><a class="contato" href="#Contato">Contato</a></li>
                </ul>
            </div>
        </header>
    )
}
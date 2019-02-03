import React, { Component } from 'react'

export default class extends Component {
    render() {
        return (
            <habbo-footer>
                <footer className="wrapper">
                    <div className="footer__media">
                        <p className="footer__media__label">Siga o Habbo Hotel</p>
                        <ul>
                            <link itemProp="url" href="https://www.habbo.com.br" />
                            <li className="footer__media__item"><a href="https://www.facebook.com/HabboBR" className="footer__media__link" target="_blank" itemProp="sameAs" rel="noopener noreferrer"><i className="icon icon--facebook"></i></a></li><li className="footer__media__item"><a href="https://twitter.com/HabboPTBR" className="footer__media__link" target="_blank" itemProp="sameAs" rel="noopener noreferrer"><i className="icon icon--twitter"></i></a></li><li className="footer__media__item"><a href="https://www.youtube.com/user/HabboBRStaff" className="footer__media__link" target="_blank" itemProp="sameAs" rel="noopener noreferrer"><i className="icon icon--youtube"></i></a></li><li className="footer__media__item"><a href="https://www.habbo.com.br/rss.xml" className="footer__media__link" target="_blank" itemProp="sameAs" rel="noopener noreferrer"><i className="icon icon--rss"></i></a></li>
                        </ul>
                    </div>
                    <div className="footer__content">
                        <ul className="footer__nav">
                            <li className="footer__nav__item"><a className="footer__nav__link" target="_blank" rel="noopener noreferrer" href="https://help.habbo.com.br">Ferramenta de Ajuda</a></li><li className="footer__nav__item"><a className="footer__nav__link" target="_blank" rel="noopener noreferrer" href="/playing-habbo/safety">Segurança</a></li><li className="footer__nav__item"><a className="footer__nav__link" target="_blank" rel="noopener noreferrer" href="https://help.habbo.com.br/forums/311751-Informa%C3%A7%C3%B5es-para-os-Pais">Guia dos Pais</a></li><li className="footer__nav__item"><a className="footer__nav__link" target="_blank" rel="noopener noreferrer" href="https://help.habbo.com.br/forums/22863963-Termos-e-Condi%C3%A7%C3%B5es-do-Site">Termos e Condições &amp; Política de Privacidade</a></li><li className="footer__nav__item"><a className="footer__nav__link" target="_blank" rel="noopener noreferrer" href="mailto:advertising@sulake.com">advertising@sulake.com</a></li>
                        </ul>
                        <p className="footer__copyright">© 2004 - 2018 Sulake Corporation Ltd. HABBO é marca registrada da Sulake Corporation Oy na União Européia, EUA, Japão, China e várias outras jurisdições. Todos os direitos reservados. O Habbo Hotel é recomendado para maiores de 13 anos.</p><a href="http://www.sulake.com" target="_blank" rel="noopener noreferrer" className="footer__sulake">Sulake</a>
                    </div>
                </footer>
            </habbo-footer>
        )
    }
}
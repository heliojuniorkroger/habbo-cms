import React, { Component, Fragment } from 'react'

export default class extends Component {
    render() {
        let content
        switch (this.props.pageKey) {
            case 'common/box_learn_how_to_stay_safe':
                content = (
                    <Fragment>
                        <h3>Dicas de Segurança</h3>
                        <p>Proteja-se de maneira inteligente! Aprenda como <a href="/playing-habbo/safety">manter-se seguro na internet</a>.</p>
                        <p>O Habbo Hotel é recomendado para maiores de 13 anos.</p>
                    </Fragment>
                )
                break
            case 'common/box_parents_guide':
                content = (
                    <Fragment>
                        <h3>Guia para os Pais</h3>
                        <p>Quer saber mais sobre as ferramentas que temos para que nossos usuários possam se divertir num ambiente seguro? Veja o nosso <a target="_blank" rel="noopener noreferrer" href="/api/public/help?returnTo=https://help.habbo.com.br/forums/311751-Informa%C3%A7%C3%B5es-para-os-Pais">Guia para pais na Ferramenta de Ajuda do Habbo Hotel</a>.</p>
                    </Fragment>
                )
                break
            case 'common/box_habbo_way':
                content = (
                    <Fragment>
                        <h3>Habbo Etiqueta</h3>
                        <p>Siga a <a href="/playing-habbo/habbo-way">Habbo Etiqueta</a>! Uma série de regras para que você esteja sempre do lado certo da diversão!</p>
                    </Fragment>
                )
                break
            case 'common/box_how_to_play':
                content = (
                    <Fragment>
                        <h3>Como Jogar</h3>
                        <p>Seja criativo, construa, faça amigos! Confira as nossas dicas sobre o <a href="/playing-habbo/how-to-play">que você pode fazer no Habbo Hotel</a>.</p>
                    </Fragment>
                )
                break
            case 'common/box_need_help':
                content = (
                    <Fragment>
                        <h3>Precisa de ajuda?</h3>
                        <p>Veja como você pode se defender sozinho ou como conseguir ajuda na nossa <a href="/playing-habbo/help">Página de Ajuda</a>. Lá você também vai encontrar uma lista de telefones e páginas da internet se você precisa de uma ajuda especial.</p>
                        <p>Se você não encontra as respostas que procura, por favor, procure na nossa <a target="_blank" rel="noopener noreferrer" href="/api/public/help?returnTo=https://help.habbo.com.br/home">Ferramenta de Ajuda</a>.</p>
                    </Fragment>
                )
                break
            case 'playing_habbo/box_helplines':
                content = (
                    <Fragment>
                        <h3>Centros de Ajuda</h3>
                        <p>Se você se sente triste, está sofrendo bullying, tendo maus pensamentos sobre você mesmo ou apenas quer falar com alguém e pedir conselhos e ajuda sobre coisas fora do Habbo Hotel, entre em contato com esses centros.</p>
                        <p>Para ajuda relacionada ao Habbo Hotel, bans e problemas com a sua conta, entre em contato com a <a target="_blank" rel="noopener noreferrer" href="https://help.habbo.com.br/home">Ferramenta de Ajuda</a>.</p>
                        <h4>Brasil</h4>
                        <p><strong>SaferNet</strong></p>
                        <ul>
                            <li><a href="http://new.safernet.org.br/helpline" target="_blank" rel="noopener noreferrer">new.safernet.org.br</a></li>
                        </ul>
                        <h4>Portugal</h4>
                        <p><strong>Internet Segura PT</strong></p>
                        <ul>
                            <li>Telefone: 808 91 90 90</li>
                            <li><a href="http://www.internetsegura.pt/linha-ajuda" target="_blank" rel="noopener noreferrer">www.internetsegura.pt</a></li>
                        </ul>
                    </Fragment>
                )
                break
            default:
                content = null
        }
        return (
            <habbo-web-pages class="aside aside--box aside--fixed">
                <aside className="static-content">
                    {content}
                </aside>
            </habbo-web-pages>
        )
    }
}
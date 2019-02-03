import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import HabboWebPages from './HabboWebPages'

export default class extends Component {
    render() {
        return (
            <DocumentTitle title="Como Jogar - Habbo">
                <main className="wrapper wrapper--content">
                    <article className="main main--fixed static-content">
                        <h1>Como jogar</h1>
                        <p>Depois de montar o seu visual super style, descansar confortavelmente no seu mega quarto e conferir as dicas de Frank, o Staff do Hotel, o que mais você pode fazer?</p>
                        <p>Aqui vão algumas ideias:</p>
                        <p><img src="https://images.habbo.com/c_images/HowToPlay/navigator_br.png" alt="Navegador" className="align-right" /></p>
                        <h3>Explore os quartos</h3>
                        <p>Clique no navegador e escolha qualquer um dos Quartos Públicos onde você pode conhecer outros Habbos e fazer novos amigos.</p>
                        <hr />
                        <p><img src="https://images.habbo.com/c_images/HowToPlay/ask_friend_br.png" alt="Faça amigos" className="align-right" /></p>
                        <h3>Faça amigos</h3>
                        <p>Clique em qualquer Habbo e peça a sua amizade ou dê respeitos. Você vai fazer vários amigos!</p>
                        <hr />
                        <p><img src="https://images.habbo.com/c_images/HowToPlay/citizenship_br.png" alt="Cidadania Habbo" className="align-right" /></p>
                        <h3>Complete a sua Cidadania Habbo</h3>
                        <p>Para conhecer melhor o Habbo Hotel, que tal começar clicando na Ferramenta de Ajuda no canto superior direito da tela?</p>
                        <hr />
                        <p><img src="https://images.habbo.com/c_images/HowToPlay/gamehub_br.png" alt="Sala de Jogos" className="align-right" /></p>
                        <h3>Visite a Sala de jogos</h3>
                        <p>Procure a Sala de Jogos na lista de quartos públicos no Navegador. Quando chegar lá, use qualquer uma das máquinas para ir a um quarto de jogo diferente!</p>
                        <hr />
                        <p><img src="https://images.habbo.com/c_images/HowToPlay/shop.png" alt="Habbo Loja" className="align-right" /></p>
                        <h3>Vá de compras</h3>
                        <p>Dê uma passadinha na seção de Duckets da Habbo Loja e veja tudo o que você pode fazer com os Duckets grátis que você recebe diariamente!</p>
                        <hr />
                        <h3>Confira as últimas atividades</h3>
                        <p>Visite a seção <a href="/">Início</a> do Habbo Hotel para saber tudo sobre as últimas notícias, competições e o que está rolando pelo Hotel.</p>
                        <p>Depois de fazer tudo isso, você já poderá se considerar um cidadão Habbo de primeira categoria!</p>
                        <blockquote>
                            <h3>Entre agora!</h3>
                            <p>Não se registrou ainda no Habbo Hotel? <a href="/registration">Entre Agora</a>!</p>
                        </blockquote>
                    </article>
                    <HabboWebPages pageKey="common/box_habbo_way" />
                    <HabboWebPages pageKey="common/box_learn_how_to_stay_safe" />
                    <HabboWebPages pageKey="common/box_need_help" />
                </main>
            </DocumentTitle>
        )
    }
}
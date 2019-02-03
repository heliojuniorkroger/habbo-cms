import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import HabboWebPages from './HabboWebPages'

export default class extends Component {
    render() {
        return (
            <DocumentTitle title="Habbo Etiqueta - Habbo">
                <main className="wrapper wrapper--content">
                    <article className="main main--fixed static-content">
                        <h1>Habbo Etiqueta</h1>
                        <p>A Habbo Etiqueta é um conjunto de regras que todos os jogadores do Habbo devem cumprir: seguir as regras torna o Habbo Hotel mais divertido!</p>
                        <h2>SIM</h2>
                        <p><img src="https://images.habbo.com/c_images/HabboWay/habboway_2a.png" alt="Do chat" className="align-right" /></p>
                        <h4>Bate-papo</h4>
                        <p>Converse com seus amigos, e conheça um monte de gente diferente de você aqui no Habbo Hotel!</p>
                        <h4>Crie</h4>
                        <p>Dê asas à sua imaginação. Construa quartos épicos, faça selfies incíveis e se expresse de todas as maneiras possíveis. Você pode ser o próximo Picasso dos pixels!</p>
                        <p><img src="https://images.habbo.com/c_images/HabboWay/habboway_5a.png" alt="Do create" className="align-right" /></p>
                        <h4>Ajude</h4>
                        <p>Ajude um usuário e faça um amigo! Seja atencioso com os outros Habbos: você nunca sabe quando vai ser a sua vez de precisar de uma ajudinha!</p>
                        <h4>Negocie</h4>
                        <p>Construa o seu império de Mobis! Negocie com os seus amigos e na Feira Livre. Se você tem faro para negócios, use a Feira Livre para vender itens e acumular mais moedas.</p>
                        <p><img src="https://images.habbo.com/c_images/HabboWay/habboway_1a.png" alt="Do play games" className="align-right" /></p>
                        <h4>Jogue e crie jogos</h4>
                        <p>Seja o anfitrião perfeito: crie jogos incríveis para a diversão dos Habbos. Todo mundo vai querer entrar no seu quarto para jogar!</p>
                        <h4>Faça amigos</h4>
                        <p>Divertir-se, paquerar, namorar, apaixonar-se… Ou até, quem sabe, conhecer aquele alguém especial!</p>
                        <hr />
                        <h2>NÃO</h2>
                        <p><img src="https://images.habbo.com/c_images/HabboWay/habboway_2b.png" alt="Don't troll" className="align-right" /></p>
                        <h4>Trolle</h4>
                        <p>Ninguém gosta de trolls e brincadeiras bobas. Temos tolerância zero para a intimidação e o bullying.</p>
                        <h4>Dar golpes ou usar script</h4>
                        <p>Alterar a programação do Hotel através de truques e ações maliciosas não é legal. E tentativas de golpe podem acabar com a sua Habbo vida.</p>
                        <h4>Enganar ou trapacear</h4>
                        <p>Trapaceiros e desonestos não vão muito longe no Habbo Hotel. Além de perderem as suas contas, eles só atrapalham a diversão de todo mundo!</p>
                        <p><img src="https://images.habbo.com/c_images/HabboWay/habboway_7b.png" alt="Não venda nada por dinheiro real" className="align-right" /></p>
                        <h4>Vender por dinheiro real</h4>
                        <p>Não venda seus itens por dinheiro real. O comércio de produtos Habbo fora do Hotel é crime e pode ser investigado pela polícia, além de você perder TUDO o que acumulou.</p>
                        <h4>Fazer apostas</h4>
                        <p>Usar Mobis para criar jogos de azar ou participar de atividades deste tipo é totalmente proibido. Mostre todas suas habilidades e não crie nem participe deste tipo de jogos.</p>
                        <p><img src="https://images.habbo.com/c_images/HabboWay/habboway_3b.png" alt="Don't cyber" className="align-right" /></p>
                        <h4>Cibersexo</h4>
                        <p>O cibersexo não é permitido no hotel. Pedidos de encontros via webcam serão punidos. Cuidado ao liberar dados pessoais através da Internet. Nem todo mundo é quem aparenta ser.</p>
                        <hr />
                        <blockquote>
                            <h4>Como jogar</h4>
                            <p>Seja criativo, seja construtivo, seja social! Confira as nossas <a href="/playing-habbo/how-to-play">DICAS</a> do que fazer no Habbo Hotel.</p>
                        </blockquote>
                    </article>
                    <HabboWebPages pageKey="common/box_learn_how_to_stay_safe" />
                    <HabboWebPages pageKey="common/box_parents_guide" />
                </main>
            </DocumentTitle>
        )
    }
}
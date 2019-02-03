import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import HabboWebPages from './HabboWebPages'

export default class extends Component {
    render() {
        return (
            <DocumentTitle title="O que é o Habbo Hotel? - Habbo">
                <main className="wrapper wrapper--content">
                    <article className="main main--fixed static-content">
                        <h1>O que é o Habbo?</h1>
                        <p><a href="/registration" className="remove-link"><img src="https://images.habbo.com/c_images/WhatIsHabbo/join_now_br.png" alt="Entre agora" className="align-right" /></a></p>
                        <p>O Habbo Hotel é uma comunidade virtual de pixels onde você pode <strong>criar seu próprio avatar, fazer amigos, bater papo, construir quartos, desenvolver seus próprios jogos e jogá-los</strong> e muito mais! Quase tudo é possível nesse lugar tão diferente, com gente incrível…</p>
                        <h2>Muito mais que um simples jogo…</h2>
                        <p><img src="https://images.habbo.com/c_images/WhatIsHabbo/ill_15.png" alt="Encontre a sua turma" className="align-right" /></p>
                        <p>Vestir o seu avatar com o estilo mais cool e original não é a única maneira de se divertir no Habbo Hotel. Quer se tornar o arquiteto do século e <strong>criar as construções mais impressionantes do mundo?</strong> Então o Clube do Arquiteto foi feito pra você. Quer mostrar para toda a comunidade as suas incríveis <strong>habilidades para desenvolver jogos</strong> e deixar seus amigos de queixo caído? Não perca tempo e participe das nossas competições! Você é louco por <strong>selfies e fotos divertidas?</strong> Nossa câmera é diversão infinita e garantida!</p>
                        <h2>Encontre a sua turma</h2>
                        <p>Você adora bater papo e encontrar os seus amigos? <strong>os Habbo Grupos, Fórums e comunidades de RPG</strong> são ótimas opções para você. Entre no exército e assuma seus deveres, monte a sua própria escola e decida você mesmo o que estudar, tome um banho de loja com a Habbo Couture e arrase na passarela ou corra para a emergência e comece a salvar vidas pixeladas. Entre e explore uma infinidade de RPGs do Habbo Hotel!</p>
                        <h2>Seja você mesmo</h2>
                        <p><img src="https://images.habbo.com/c_images/WhatIsHabbo/ill_16.png" alt="Seja você mesmo" className="align-right" /></p>
                        <p>Criatividade e originalidade são super bem-vinddas no Habbo Hotel! Toda semana temos várias competições novas para você participar. De <strong>competições de quarto a selfies, passando por pixel-art e vídeos</strong>, há uma infinidade de atividades legais onde você pode expressar todos os seus dons artísticos e criativos e, ainda por cima, ganhar conquistas e prêmios! Bateu a inspiração? Dê uma olhada nas nossas <a href="/">notícias</a> para ficar por dentro das últimas atividades e competições da semana!</p>
                        <h2>Jogue grátis</h2>
                        <p>o Habbo Hotel é um jogo <em>grátis</em> onde você pode explorar uma interminável lista de quartos, realizar tarefas, bater papo e ganhar prêmios sem ter que pagar por nada de nada!</p>
                        <p>Alguns itens extras como mascotes, Habbo Clube, Clube do Arquiteto e mobis podem ser adquiridos com Habbo Créditos (moedas). Para mais informação sobre esses itens, dê uma olhada na <a href="/shop">Habbo Shop</a>.</p>
                        <h2>Sempre prontos para ajudar…</h2>
                        <p><img src="https://images.habbo.com/c_images/WhatIsHabbo/ill_17.png" alt="Sempre prontos para ajudar" className="align-right" /></p>
                        <p>O Habbo Hotel é moderado em tempo integral (24 horas). Você também pode contribuir para a sua própria segurança no Habbo Hotel e na internet. Dê uma lida nas nossas <a href="/playing-habbo/safety">Dicas de Segurança</a> para saber mais.</p>
                        <p>Por ser uma das comunidades virtuais mais populares do mundo, temos muito orgulho de possuir um <strong>profundo conhecimento de segurança online</strong>, seguindo diretrizes internacionais estabelecidas por grupos governamentais e ONGs.</p>
                        <h2>Jogue no PC, iPhone, iPad e Android</h2>
                        <p>O Habbo Hotel está esperando por você! Dê uma olhada, assista esse vídeo!</p>
                        <iframe src="//www.youtube.com/embed/b0fbiGmd-yw" title="Habbo para Android!" frameBorder="0" width="640" height="360"></iframe><p>Confira outros vídeos no nosso <a href="https://www.youtube.com/user/habbo" target="_blank" rel="noopener noreferrer">Canal YouTube Habbo</a>…</p>
                        <h2>Junte-se ao Habbo Hotel!</h2>
                        <p><a href="/registration" className="remove-link"><img src="https://images.habbo.com/c_images/WhatIsHabbo/join_now_br.png" alt="Entre agora" className="align-right" /></a></p>
                        <p>Seja parte da maior comunidade online para adolescentes do mundo! <a href="/registration">Entre no Habbo Hotel agora</a>!</p>
                        <p><img src="https://images.habbo.com/c_images/WhatIsHabbo/ill_14.png" alt="Fantasy furni" /></p>
                    </article>
                    <HabboWebPages pageKey="common/box_how_to_play" />
                    <HabboWebPages pageKey="common/box_habbo_way" />
                    <HabboWebPages pageKey="common/box_parents_guide" />
                </main>
            </DocumentTitle>
        )
    }
}
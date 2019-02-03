import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import HabboWebPages from './HabboWebPages'

export default class extends Component {
    render() {
        return (
            <DocumentTitle title="Ajuda - Habbo">
                <main className="wrapper wrapper--content">
                    <article className="main main--fixed static-content">
                        <h1>Como denunciar abuso no Habbo Hotel</h1>
                        <p>No Habbo Hotel você pode acabar encontrando-se com alguns Habbos irritantes, chatos e mal educados. Mas, há remédio para tudo! Nesta página, você poderá encontrar conselhos super úteis sobre como utilizar as ferramentas de denúncia e os diversos casos nos quais poderá utilizá-las.</p>
                        <h2>Em um Quarto</h2>
                        <p>Se você está em um Quarto e outro Habbo está passando um pouco dos limites, clique nele e um menu de opções irá aparecer. Isso irá permitir que você cale esse usuário, expulse de um quarto seu ou reporte esta pessoa à moderação.</p>
                        <h4>Botão Calar</h4>
                        <p>Se algum usuário lhe incomodar, ou se você simplesmente não quer escutar o quê algum Habbo diz, você pode utilizar o botão Calar em qualquer quarto. Esse botão aparece quando clicamos no usuário que desejamos silenciar. Sua função é silenciar um Habbo por um tempo determinado: 2, 5 ou 10 minutos.</p>
                        <p><img src="https://images.habbo.com/c_images/Help/report_br.png" alt="Clique no usuário para calar, moderar ou reportar" className="align-right" /></p>
                        <ol>
                            <li>Clique no usuário. Um menu de opções irá aparecer.</li>
                            <li>Escolha o botão "calar".</li>
                            <li>Você não vai mais ver o que esse usuário diz. Se você quer voltar a ver o que o usuário calado diz, basta clicar novamente nesse menu e escolher a opção "ouvir Habbo".</li>
                        </ol>
                        <h4>Moderando um usuário</h4>
                        <p><strong>Você tem o controle dos quartos que construir!</strong> Você pode decidir o quê acontece nos quartos e quem pode visitá-los. Dispomos de ferramentas que permitem que vocês sejam parte ativa na moderação do Habbo Hotel e assim possam contribuir para a construção de uma comunidade mais segura, divertida e responsável!</p>
                        <p>Leia mais na Ferramenta de Ajuda do habbo Hotel sobre as <a target="_blank" rel="noopener noreferrer" href="https://help.habbo.com.br/entries/37244226-De-que-ferramentas-disponho-para-navegar-seguro-no-Habbo-Hotel-">Ferramentas de Moderção</a> disponíveis para você.</p>
                        <h4>Reportando usuários</h4>
                        <p>No Quarto onde você está tem um Habbo que só fala besteiras e só quer saber de ofender outros Habbos? Alguém está falando em encontros reais, webcams, troca de informações pessoais ou alguém está infringindo as regras da Habbo Etiqueta? Nesses casos, a melhor coisa que você pode fazer é acionar a moderação, que vai verificar atentamente as conversas e tomará as atitudes necessárias com quem se comporte mal e não siga a Habbo Etiqueta.</p>
                        <ol>
                            <li>Clique no usuário. Um menu de opções irá aparecer.</li>
                            <li>Escolha <em>Denunciar</em>.</li>
                            <li>Escolhas as linhas de chat que a moderação deveria ler para lhe ajudar.</li>
                            <li>Escolha a melhor categoria que descreve a situação que você está vivenciando.</li>
                            <li>Explique brevemente o que está acontecendo.</li>
                            <li>Clique em "Pedir Ajuda" e aguarde. Se você escolheu a categoria "Bullying", um Guardião pode intervir.</li>
                        </ol>
                        <p><img src="https://images.habbo.com/c_images/Help/help_button_br.png" alt="Botão Ajuda" className="align-right" /></p>
                        <p>Outra maneira de denunciar é a seguinte:</p>
                        <ol>
                            <li>Clique <em>Ajuda</em> no canto superior direito da tela.</li>
                            <li>Escolha <em>Alguém está se comportando mal</em>. Você verá uma lista dos Habbos que estão no quarto.</li>
                            <li>Escolha o nome do usuário que está se comportando mal.</li>
                            <li>Escolhas as linhas de chat que a moderação deveria ler para lhe ajudar.</li>
                            <li>Escolha a melhor categoria que descreve a situação que você está vivenciando. Se você escolher "Intimidando" um Guardião poderá intervir.</li>
                            <li>Explique brevemente o que está acontecendo.</li>
                            <li>Clique em "Pedir Ajuda" e aguarde.</li>
                        </ol>
                        <hr />
                        <h2>Ajuda no Bate-Papo</h2>
                        <p>Se você está conversando com alguém no Bate-Papo e essa pessoa está criando uma situação incômoda para você:</p>
                        <ol>
                            <li>Clique no botão "Denunciar" embaixo da carinha do outro Habbo na janela do Bate-Papo.</li>
                            <li>Você terá que dar mais informações sobre o que aconteceu.</li>
                            <li>A moderação entrará em ação.</li>
                        </ol>
                        <p><img src="https://images.habbo.com/c_images/Help/report_im_br.png" alt="Denunciando um Habbo no Bate-Papo" /></p>
                        <h2>Fórum de Grupo</h2>
                        <p><img src="https://images.habbo.com/c_images/Help/flag_3.png" alt="bandeira laranja para denunciar tópicos e posts de Fóruns" className="align-right" /></p>
                        <p>Você pode denunciar qualquer conteúdo inapropriado em tópicos e posts de Fóruns de Grupo:</p>
                        <ol>
                            <li>Clique no ícone da bandeira laranja no Fórum.</li>
                            <li>Você terá que dar mais informações sobre o post ou tópico.</li>
                            <li>A moderação entrará em ação.</li>
                        </ol>
                        <h2>Em alguma página do Hotel</h2>
                        <p><img src="https://images.habbo.com/c_images/Help/reportroom.png" alt="White flag for reporting room home pages or camera pics" className="align-right" /></p>
                        <p>Você pode denunciar uma foto, um quarto ou uma imagem de quarto inapropriados.</p>
                        <ol>
                            <li>Clique no ícone da bandeira branca.</li>
                            <li>Escolha a melhor categoria que descreve a situação.</li>
                            <li>Conte-nos o que há de errado com a imagem ou quarto.</li>
                            <li>A moderação entrará em ação.</li>
                        </ol>
                        <hr />
                        <h2>Dicas de Segurança</h2>
                        <p>Em nossa página de <a href="/playing-habbo/safety">Dicas de Segurança</a> Você vai encontrar sugestões de como se divertir em segurança no Habbo Hotel. Dê uma olhada. Você vai encontrar muita informação útil!</p>
                        <h2>Habbo Etiqueta</h2>
                        <p>Você já leu a <a href="/playing-habbo/habbo-way">Habbo Etiqueta</a>? Não? Então corre lá! A Habbo Etiqueta é um conjunto de regras bem simples, mas MUITO importantes. Essas regras ajudam o Habbo Hotel a ser um lugar divertido e seguro para encontrar os amigos e se divertir.</p>
                        <h2>Como Jogar</h2>
                        <p>Procurando <strong>ideias do quê fazer no Habbo Hotel</strong>? Leia o nosso <a href="/playing-habbo/how-to-play">guia de como jogar</a>!</p>
                        <p>Se você precisa de instruções de como utilizar Mobis, Efeitos, ou qualquer outra ferramenta no Habbo Hotel, clique no botão "Ajuda" no canto superior direito da tela e depois clique em "Pedir instruções" e um Habbo Ajudante entrará em ação.</p>
                        <h2>Ferramenta de Ajuda Habbo</h2>
                        <p>Se você tem qualquer <strong>problema com a sua conta Habbo, compra de créditos ou produtos Habbo ou dúvidas sobre banimentos</strong>, você vai encontrar todas as respostas na <a target="_blank" rel="noopener noreferrer" href="https://help.habbo.com.br/home">Ferramenta de Ajuda do Habbo Hotel</a>.</p>
                    </article>
                    <HabboWebPages pageKey="playing_habbo/box_helplines" />
                </main>
            </DocumentTitle>
        )
    }
}
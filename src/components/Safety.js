import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import HabboWebPages from './HabboWebPages'

export default class extends Component {
    render() {
        return (
            <DocumentTitle title="Segurança - Habbo">
                <main className="wrapper wrapper--content">
                    <article className="main main--fixed static-content">
                        <h1>Dicas de Segurança</h1>
                        <p>Esse é o nosso Top 7 das dicas de como navegar na internet com segurança!</p>
                        <p><img src="https://images.habbo.com/c_images/Security/safetytips1_n.png" alt="Proteja as suas informações pessoais" className="align-right" /></p>
                        <h3>Proteja as suas informações pessoais</h3>
                        <p>Você nunca sabe com quem você está realmente falando online, então NUNCA compartilhe suas informações pessoais! Se você compartilha suas informações pessoais (nome real, endereço, número de telefone, whatsapp, fotos, onde você estuda, etc) você poderá ser enganado, sofrer bullying ou até correr perigo.</p>
                        <hr />
                        <p><img src="https://images.habbo.com/c_images/Security/safetytips2_n2.png" alt="Proteja a sua privacidade" className="align-right" /></p>
                        <h3>Proteja a sua privacidade</h3>
                        <p>Nunca compartilhe NADA das suas informações pessoais. Isso inclui suas contas de Twitter, Facebook, Instagram, Skype, Snapshot, etc. Você nunca sabe nas mãos de quem essas informações podem parar.</p>
                        <hr />
                        <p><img src="https://images.habbo.com/c_images/Security/safetytips3_n.png" alt="Não ceda à pressão dos amigos" className="align-right" /></p>
                        <h3>Não ceda à pressão dos amigos</h3>
                        <p>Só porque os seus amigos e conhecidos estão fazendo, não significa que você tenha que fazer também. Se você não está confortável com alguma situação, caia fora!</p>
                        <hr />
                        <p><img src="https://images.habbo.com/c_images/Security/safetytips4_n.png" alt="Mantenha os seus amigos de pixels em pixels" className="align-right" /></p>
                        <h3>Mantenha os seus amigos de pixels em pixels</h3>
                        <p>Não marque encontros com pessoas que você só conhece através da internet! Nem sempre as pessoas são quem elas dizem ser. Se outro usuário insiste para lhe conhecer na vida real, simplesmente responda "não, obrigado!" e selecione o usuário e clique no botão "calar" para não ser incomodado novamente.</p>
                        <hr />
                        <p><img src="https://images.habbo.com/c_images/Security/safetytips5_n.png" alt="Não tenha medo de falar" className="align-right" /></p>
                        <h3>Não tenha medo de falar</h3>
                        <p>Se alguém está fazendo com que você se sinta desconfortável, está ameaçando ou pressionando você para fazer algo que você não quer, ignore esta pessoa e denuncie imediatamente à moderação utilizando o botão "Ajuda".</p>
                        <hr />
                        <p><img src="https://images.habbo.com/c_images/Security/safetytips6_n.png" alt="Esqueça a webcam" className="align-right" /></p>
                        <h3>Esqueça a webcam</h3>
                        <p>Você perde totalmente o controle de suas fotos, vídeos ou imagens da webcam depois de compartilhá-las na internet. Uma vez que você posta qualquer conteúdo deste tipo, não há como removê-lo e poderá ser visualizado por qualquer um, além de poder ser utilizado contra você para praticar bullying ou, até mesmo, fazer chantagem. Antes de postar ou compartilhar qualquer imagem ou vídeo, pergunte-se a si mesmo: "não me importa que pessoas que não conheço vejam isso?".</p>
                        <hr />
                        <p><img src="https://images.habbo.com/c_images/Security/safetytips7_n.png" alt="Seja esperto" className="align-right" /></p>
                        <h3>Desfrute do Habbo Hotel real!</h3>
                        <p>Páginas que oferecem moedas grátis, prêmios, mobis, etc. são feitas para enganar você. TODAS! Essas páginas são criadas para roubar a sua senha e a sua conta. Nunca preencha seus dados de log in (email e senha) nessas páginas nem baixe nada delas. Você poderia acabar infectando o seu computador com vírus e programas suspeitos (keyloggers, spyware e malware).</p>
                    </article>
                    <HabboWebPages pageKey="common/box_parents_guide" />
                    <HabboWebPages pageKey="common/box_need_help" />
                </main>
            </DocumentTitle>
        )
    }
}
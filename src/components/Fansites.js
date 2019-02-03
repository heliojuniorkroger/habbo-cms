import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import HabboWebPages from './HabboWebPages'

export default class extends Component {
    render() {
        return (
            <DocumentTitle title="Fã Sites - Habbo">
                <main>
                    <section className="wrapper wrapper--content">
                        <article className="main main--fixed static-content">
                            <h1>Fã-sites oficiais</h1>
                            <p><img src="https://images.habbo.com/c_images/Fansites/habbo_friends.png" alt="Fansites" className="align-right" /></p>
                            <p>Nossas Fã Sites Oficias são as seguintes:</p>
                            <ul>
                                <li><a href="http://www.beatshabbo.com.br" target="_blank" rel="noopener noreferrer">BeatsHabbo</a></li>
                                <li><a href="http://www.habbid.com.br" target="_blank" rel="noopener noreferrer">Habbid</a></li>
                                <li><a href="https://www.habblindados.com.br" target="_blank" rel="noopener noreferrer">Habblindados</a></li>
                                <li><a href="http://www.habbocolor.com.br/" target="_blank" rel="noopener noreferrer">HabboColor</a></li>
                                <li><a href="http://habbonight.com.br/" target="_blank" rel="noopener noreferrer">Habbonight</a></li>
                                <li><a href="http:/prohabbo.com.br/" target="_blank" rel="noopener noreferrer">ProHabbo</a></li>
                            </ul>
                            <p>Esses são os Fã-Sites Oficiais do Habbo Hotel BR/PT. Aqui você fica sabendo de todas as novidades do maior hotel virtual do mundo. Confiram o trabalho deles, porque, realmente, vale a pena! Essa é a galera que ajuda a manter o verdadeiro espírito do Habbo Hotel vivo: um lugar para fazer amigos, divertir-se e descobrir um mundo de pixels. Somos uma GRANDE FAMÍLIA!</p>
                            <p>Os Fã Sites Oficiais são páginas criadas pelos próprios usuários e todas devem seguir à risca a nossa <a target="_blank" rel="noopener noreferrer" href="https://help.habbo.com.br/entries/22399471-nova-politica-de-fa-sites-do-habbo">Política de Fã-sites</a></p>
                            <p>Lembre-se sempre de NÃO utilizar os dados da sua conta Habbo para se registrar nas Fã Sites. Não utilize a mesma senha do Habbo Hotel!</p>
                        </article>
                        <HabboWebPages pageKey="common/box_habbo_way" />
                    </section>
                </main>
            </DocumentTitle>
        )
    }
}